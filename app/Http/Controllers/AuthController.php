<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\RegisterClientRequest;
use App\Http\Requests\RegisterUserRequest;
use App\Http\Response;
use App\Services\UserService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    protected $user;

    public function __construct(UserService $user)
    {
        $this->user = $user;
    }

    /**
     * Register via given credentials.
     *
     * @return \App\Http\Response
     */
    public function register(RegisterUserRequest $request)
    {
        try {
            return Response::Ok($this->user->registerUser($request), 'User registered successfully');
        } catch (\Exception $e) {
            return Response::Error($e->getMessage());
        }
    }
    
    /**
     * Register via given credentials.
     *
     * @return \App\Http\Response
     */
    public function registerClient(RegisterClientRequest $request)
    {
        try {
            return Response::Ok($this->user->registerClient($request), 'User registered successfully');
        } catch (\Exception $e) {
            return Response::Error($e->getMessage());
        }
    }

    /**
     * Login via given credentials.
     *
     * @return \App\Http\Response
     */
    public function login(LoginUserRequest $request)
    {
        try {
            return Response::Ok($this->user->loginUser($request), 'User logged-in successfully');
        } catch (\Exception $e) {
            return Response::Error($e->getMessage());
        }
    }

    /**
     * Get the authenticated User.
     *
     * @return \App\Http\Response
     */
    public function me()
    {
        return Response::Ok($this->user->details(), 'User details fetched successfully');
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \App\Http\Response
     */
    public function logout()
    {
        try {
            return Response::Ok($this->user->logout(), 'User logged-out successfully');
        } catch (\Exception $e) {
            return Response::Error($e->getMessage());
        }
    }

    public function update(Request $request)
    {
        try {
            return Response::Ok($this->user->update(auth()->user(), $request), 'User data updated successfully');
        } catch (\Exception $e) {
            return Response::Error($e->getMessage());
        }
    }
}
