<?php

namespace App\Services;

use App\Firebase\Firebase;
use App\Firebase\Push;
use App\Http\Response;
use App\Models\User;
use App\Models\UserFcmToken;

class NotificationService
{
    public function push_notification(array $data)
    {
        $notification_payload = null;
        if (array_key_exists('payload', $data)) {
            $notification_payload = $data['payload'];
        }
        $notification_title     = $data['title'];
        $notification_message   = $data['body'];
        $notification_push_type = $data['push_type'];

        try {

            $sender_id = "";
            $receiver_id = $data['receiver_id'] ?? '';

            $firebase = new Firebase();
            $push     = new Push();

            // optional payload
            $payload = $notification_payload;

            $title = $notification_title ?? '';

            // notification message
            $message = $notification_message ?? '';

            // push type - single user / topic
            $push_type = $notification_push_type ?? '';

            $push->setTitle($title);
            $push->setMessage($message);
            $push->setPayload($payload);

            $json     = '';
            $response = '';

            if ($push_type === 'topic') {
                $topic = $data['topic'];

                $json     = $push->getPush();
                $response = $firebase->sendToTopic($topic, $json);
            } else if ($push_type === 'individual') {
                $json     = $push->getPush();
                $regId    = $receiver_id ?? '';
                $response = $firebase->send($regId, $json);
            } else if ($push_type === 'multiple') {
                $regIds    = json_encode($data['receivers']);

                $json     = $push->getPush();
                $response = $firebase->sendMultiple($regIds, $json);
            }
            return Response::Ok($response, 'Notification sent successfully');
        } catch (\Exception $ex) {
            return Response::Error($ex->getMessage());
        }
    }

    public function push_notification_to_administrators($data)
    {
        $admins = array_column(User::all()->where('role_id', '=', 1)->toArray(), 'id');
        $tokens = array_column(UserFcmToken::all()->whereIn('user_id', $admins)->toArray(), 'token');

        foreach ($tokens as $token) {
            $data['push_type'] = 'individual';
            $data['receiver_id'] = $token;

            $this->push_notification($data);
        }
        return true;
    }

    public function push_notification_to_user(User $user, $data)
    {
        if ($user == null) {
            return;
        }
        $tokens = array_column(UserFcmToken::all()->where('user_id', '=', $user->id)->toArray(), 'token');

        foreach ($tokens as $token) {
            $data['push_type'] = 'individual';
            $data['receiver_id'] = $token;

            $this->push_notification($data);
        }
        return true;
    }
}
