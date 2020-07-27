<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\User;
use App\Models\UserStatus;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
     * Register via given credentials.
     *
     * @return \App\Http\Response
     */
    public function register(Request $request)
    {
        $data = $request->validate([
            'user_name' => 'required|unique:users',
            'first_name' => 'required|min:3',
            'last_name' => 'required|min:3',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
            'role_id' => 'required|exists:roles,id'
        ]);
        $data['password'] = bcrypt($data['password']);
        $data['status_id'] = UserStatus::make(UserStatus::active, '<onRegister>')['id'];

        try {
            if ($data == null) {
                return Response::Error("User data undefined");
            }

            $user = User::create($data);

            if ($user == null) {
                return Response::Error("User creation failed");
            }

            return $this->composeResponse($user);
        } catch (\Throwable $th) {
            return Response::Error("User creation failed");
        }
    }

    /**
     * Login via given credentials.
     *
     * @return \App\Http\Response
     */
    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);

        try {
            $data['request'] = $request;

            $user = $this->attempt($data);

            if ($user instanceof JsonResponse) {
                return $user;
            }

            auth()->setUser($user);
            return $this->composeResponse($user);
        } catch (\Exception $e) {
            return Response::Error('Failed to login to the system');
        }
    }

    /**
     * Get the authenticated User.
     *
     * @return \App\Http\Response
     */
    public function me()
    {
        return Response::Ok(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \App\Http\Response
     */
    public function logout()
    {
        // auth()->logout();    
        return Response::Ok(null, 'User logged out successfully');
    }

    public function change_fcm_token(Request $request)
    {
        $data = $request->validate([
            'token' => 'required',
        ]);
        $user = auth()->user();

        if ($user instanceof User) {
            $user->update([
                'fcm_token' => $data['token']
            ]);
        }
        return Response::Ok($user, 'User Fcm token saved successfully');
    }

    /**
     * Get the token array structure.
     *
     * @param  \App\Models\User $user
     *
     * @return \App\Http\Response
     */
    private function composeResponse(User $user)
    {
        $data = [
            'user' => $user,
            'token' => $user->createToken('MyApp')->accessToken
        ];

        return Response::Ok($data);
    }

    private function attempt(array $credintials)
    {
        $users = User::where('email', $credintials['email'])->get();

        if ($users == null || count($users) != 1) {
            return Response::Error("Invalid Username or Password");
        }

        $user = $users[0];
        $status = UserStatus::find($user['status_id']);
        if ($status == null || $status['title'] == UserStatus::blocked) {
            return Response::Error("This account is blocked at the moment, Please contact your admin");
        }
        return $user;
    }
}
