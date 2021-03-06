<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Fetch a list of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request)
    {
        $roles = Role::query();
        $roles = $this->filter($roles, $request, Role::filterable);
        $roles = $roles->paginate(15);

        return Response::Ok($roles, 'Roles list fetched successfully');
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
            'name' => 'required|string|min:3|unique:roles,name',
            'description' => 'required|string|min:3',
        ]);
        try {
            $role = Role::create($data);

            if ($role == null) {
                Response::Error('Failed to create new role');
            }
            return Response::Ok($role, 'Role resource created successfully');
        } catch (\Throwable $th) {
            Response::Error('Failed to create new role');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Role $role)
    {
        $data = $request->validate([
            'name' => 'nullable|string|min:3|unique:roles,name,' . $role['id'],
            'description' => 'nullable|string|min:3',
        ]);
        try {

            if (!$role->update($data)) {

                return Response::Error('Failed to update role ' . $role['id']);
            }
            return Response::Ok($role, 'Role resource updated successfully');
        } catch (\Throwable $th) {
            return Response::Error('Failed to update role ' . $role['id']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function delete(Role $role)
    {
        try {
            // 1- Delete assocations with permissions
            $role->delete_permissions();
            // 2- Delete entity
            if (!$role->delete()) {
                return Response::Error('Failed to delete role ' . $role['id']);
            }
            return Response::Ok($role, 'Role ' . $role['id'] . ' removed successfully');
        } catch (\Throwable $th) {
            return Response::Error('Failed to delete role ' . $role['id']);
        }
    }
}
