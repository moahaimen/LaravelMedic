<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\User;
use App\Models\UserStatus;
use AuthException;
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

        if ($data == null) {
            return Response::Error("User data undefined");
        }

        $user = User::create($data);

        if ($user == null) {
            return Response::Error("User creation failed");
        }

        return $this->composeResponse($user);
    }

    /**
     * Login via given credentials.
     *
     * @return \App\Http\Response
     */
    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        $data['request'] = $request;

        if ($data == null || ($user = $this->attempt($data)) == null) {
            return Response::Error('Incorrect UserName or Password');
        }

        auth()->setUser($user);
        return $this->composeResponse($user);
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
        auth()->logout();

        return Response::Ok(null, 'User logged out successfully');
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
            throw new \App\Exceptions\AuthException("xx");
        }
        return $users[0];
    }
}
