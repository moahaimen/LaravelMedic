<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\User;
use App\Models\UserFcmToken;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserFcmTokenController extends Controller
{
    public function reset(Request $request)
    {
        $user = auth()->user();
        try {
            if ($user['user_name'] == 'nazeer') {
                DB::table('user_fcm_tokens')->truncate();
            }
            return Response::Ok([], 'Okay');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function add(Request $request)
    {
        $data = $request->validate([
            'token' => 'required',
        ]);
        $user = auth()->user();

        if ($user instanceof User) {
            try {
                $authToken = $user->token()->id;

                // Check if there is FCM Token assocaited
                $FCMs = UserFcmToken::where('auth_token', '=', $authToken)->get();
                if (count($FCMs) > 1) {
                    return Response::Error("This auth token associated with more than one FCM");
                }

                if (count($FCMs) == 1) {
                    $fcm = $FCMs[0];

                    $fcm->update([
                        'token' => $data['token'],
                    ]);
                    return Response::Ok($fcm, 'User Fcm token updated successfully');
                }

                $fcm = UserFcmToken::create([
                    'user_id' => $user['id'],
                    'token' => $data['token'],
                    'auth_token' => $authToken,
                ]);
                return Response::Ok($fcm, 'User Fcm token added successfully');
            } catch (\Throwable $th) {
                throw $th;
            }
        }
        return Response::Error('User id cannot be detected');
    }
}
