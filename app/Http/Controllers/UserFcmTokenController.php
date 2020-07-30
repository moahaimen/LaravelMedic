<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\User;
use App\Models\UserFcmToken;
use Illuminate\Http\Request;

class UserFcmTokenController extends Controller
{
    public function add(Request $request)
    {
        $data = $request->validate([
            'token' => 'required',
        ]);
        $user = auth()->user();

        if ($user instanceof User) {
            $token = UserFcmToken::create([
                'user_id' => $user['id'],
                'token' => $data['token'],
            ]);
            return Response::Ok($token, 'User Fcm token added successfully');
        }
        return Response::Error('User id cannot be detected');
    }
}
