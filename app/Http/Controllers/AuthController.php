<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\Role;
use App\Models\User;
use App\Models\UserFcmToken;
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
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8|confirmed',
            'role_id' => 'required|exists:roles,id',
            'phone_number' => 'required|string',
            'province_id' => 'required|numeric|exists:provinces,id',
            'address' => 'required|string'
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
        } catch (\Exception $e) {
            return Response::Error($e->getMessage());
        }
    }

    public function registerNew(Request $request)
    {
        $data = $request->validate([
            'user_name' => 'required|unique:users',
            'first_name' => 'required|min:3',
            'last_name' => 'required|min:3',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8|confirmed',
            'phone_number' => 'required|string',
            'province_id' => 'required|numeric|exists:provinces,id',
            'address' => 'required|string'
        ]);
        $data['password'] = bcrypt($data['password']);
        $data['status_id'] = UserStatus::make(UserStatus::active, '<onRegister>')['id'];
        $data['role_id'] = Role::where('name', '=', 'client')->first()->id;

        try {
            if ($data == null) {
                return Response::Error("User data undefined");
            }
            $user = User::create($data);

            if ($user == null) {
                return Response::Error("User creation failed");
            }
            return $this->composeResponse($user);
        } catch (\Exception $e) {
            return Response::Error($e->getMessage());
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
        $user = auth()->user();

        if ($user instanceof User) {
            // Delete all fcm tokens
            UserFcmToken::where('user_id', '=', $user['id'])->delete();

            // Delete access tokens
            $user->tokens()->delete();
            return Response::Ok(null, 'User logged out successfully');
        }
        return Response::Error('Something went wrong while logging the user out');
    }

    public function updateUser(Request $request)
    {
        $user = auth()->user();

        if ($user instanceof User) {
            $data = $request->validate([
                'first_name' => 'nullable|string|min:3',
                'last_name' => 'nullable|string|min:3',
                'province_id' => 'nullable|numeric|exists:provinces,id',
                'address' => 'nullable|string',
                'phone_number' => 'nullable|string',
            ]);

            if ($user->update($data)) {
                return Response::Ok($user, 'User data saved successfully');
            }
        }
        return Response::Error('Something went wrong while saving user data');
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

    private function attempt(array $credentials)
    {
        $users = User::where('email', $credentials['email'])->get();

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
