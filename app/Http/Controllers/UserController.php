<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\User;
use App\Models\UserStatus;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Fetch a list of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get()
    {
        $users = User::with(['role', 'status'])->get();

        return Response::Ok($users, 'Users list fetched successfully');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
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
        $data['status_id'] = UserStatus::make(UserStatus::active, '<' . auth()->user()['user_name'] . '>')['id'];

        if ($data == null) {
            return Response::Error("User data undefined");
        }

        $user = User::create($data);

        if ($user == null) {
            Response::Error('Failed to create new user');
        }
        return Response::Ok($user, 'User resource created successfully');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'user_name' => 'nullable|unique:users,user_name,' . $user['id'],
            'first_name' => 'nullable|min:3',
            'last_name' => 'nullable|min:3',
            'email' => 'nullable|email',
            'password' => 'nullable|min:8|confirmed',
            'role_id' => 'nullable|exists:roles,id',
            // status must be in UserStatus
            'status_id' => 'nullable|in:0,1'
        ]);
        
        if (array_key_exists('password', $data)) {
            $data['password'] = bcrypt($data['password']);
        }

        if (array_key_exists('status_id', $data)) {
            $data['status_id'] = UserStatus::make($data['status_id'], '<' . auth()->user()['user_name'] . '>')['id'];
        }

        if (!$user->update($data)) {

            return Response::Error('Failed to update user ' . $user['id']);
        }
        return Response::Ok($user, 'User resource updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function delete(User $user)
    {
        if (!$user->delete()) {
            return Response::Error('Failed to delete user ' . $user['id']);
        }
        return Response::Ok($user, 'User ' . $user['id'] . ' removed successfully');
    }
}
