<?php

namespace App\Services;

use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\RegisterClientRequest;
use App\Http\Requests\RegisterUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\Role;
use App\Models\User;
use App\Models\UserFcmToken;
use App\Models\UserStatus;
use Exception;
use Illuminate\Http\JsonResponse;

class UserService extends Service
{

    public function registerUser(RegisterUserRequest $request): array
    {
        $data = $request->all();
        $data['password'] = bcrypt($data['password']);
        $data['status_id'] = UserStatus::make(UserStatus::active, 'REGISTERED')['id'];

        try {
            if ($data == null) {
                throw new Exception("User data undefined");
            }
            $user = User::create($data);

            if ($user == null) {
                throw new Exception("Failed to create user instance");
            }
            return $this->createUserToken($user);
        } catch (\Exception $e) {
            throw $e;
        }
    }

    public function registerClient(RegisterClientRequest $request): array
    {
        $data = $request->all();
        $data['password'] = bcrypt($data['password']);
        $data['status_id'] = UserStatus::make(UserStatus::active, 'REGISTERED')->id;
        $data['role_id'] = Role::where('name', '=', 'client')->first()->id;

        try {
            if ($data == null) {
                throw new Exception("User data undefined");
            }
            $user = User::create($data);

            if ($user == null) {
                throw new Exception("Failed to create user instance");
            }
            return $this->createUserToken($user);
        } catch (\Exception $e) {
            throw $e;
        }
    }

    public function loginUser(LoginUserRequest $request): User
    {
        $data = $request->all();
        try {
            $data['request'] = $request;

            $user = $this->findUser($data);

            if ($user instanceof JsonResponse) {
                return $user;
            }
            auth()->setUser($user);
            return $this->createUserToken($user);
        } catch (\Exception $e) {
            throw $e;
        }
    }

    public function details(): User
    {
        return auth()->user();
    }

    public function logout(): bool
    {
        $user = auth()->user();

        if ($user instanceof User) {
            // Delete all fcm tokens
            UserFcmToken::where('user_id', '=', $user['id'])->delete();

            // Delete access tokens
            $user->tokens()->delete();
            return true;
        }
        throw new Exception('Unable to recognize user');
    }

    public function update(User $user, UpdateUserRequest $request): User
    {
        try {
            if ($user instanceof User) {
                $data = $request->all();

                if ($user->update($data)) {
                    return $user;
                }
            }
            throw new Exception('User is null or unable to save data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Get the token array structure.
     *
     * @param  \App\Models\User $user
     * @return array
     */
    private function createUserToken(User $user): array
    {
        $data = [
            'user' => $user,
            'token' => $user->createToken('MyApp')->accessToken
        ];
        return $data;
    }

    private function findUser(array $credentials): User
    {
        $users = User::where('email', $credentials['email'])->get();

        if ($users == null || count($users) != 1) {
            throw new Exception("Email or password are incorrect");
        }
        $user = $users[0];
        $status = UserStatus::find($user['status_id']);
        if ($status == null || $status['title'] == UserStatus::blocked) {
            throw new Exception("This account is blocked at the moment, Please contact your admin");
        }
        return $user;
    }
}
