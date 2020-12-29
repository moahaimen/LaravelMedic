<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\NotificationService;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    protected $notifier;

    public function __construct(NotificationService $notifier)
    {
        $this->notifier = $notifier;
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

        return $this->notifier->push_notification($data);
    }

    public function pushToUser(Request $request, string $username)
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

        $user = User::query()->where('user_name', '=', $username)->first();

        return $this->notifier->push_notification_to_user($user, $data);
    }

    public function test()
    {
        $data = [
            "title" => "Test notifications",
            "body" => "This message to make sure sending notifications working properly",
            "payload" => "",
        ];
        return $this->notifier->push_notification_to_administrators($data);
    }
}
