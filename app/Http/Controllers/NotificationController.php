<?php

namespace App\Http\Controllers;

use App\Firebase\Firebase;
use App\Firebase\Push;
use App\Http\Response;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class NotificationController extends Controller
{

    public static function prepare_and_send(array $data)
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
            $receiver_id = $data['receiver_id'];

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

    public static function notify_all_admins($data)
    {
        $tokens = array_column(User::all()->where('role_id', '=', 1)->where('fcm_token', '!=', null)->toArray(), 'fcm_token');

        foreach ($tokens as $i => $token) {
            $data['push_type'] = 'individual';
            $data['receiver_id'] = $token;
            
            NotificationController::prepare_and_send($data);
        }
        return true;
    }

    public function push(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|min:3',
            'body' => 'required|min:5',
            'payload' => 'nullable|json',
            'push_type' => 'required|in:topic,individual,multiple',
            'topic' => 'requiredIf:push_type,topic|string',
            'receiver_id' => 'requiredIf:push_type,individual|string',
            'receivers' => 'requiredIf:push_type,multiple|array|min:1',
        ]);

        return $this->prepare_and_send($data);
    }
}
