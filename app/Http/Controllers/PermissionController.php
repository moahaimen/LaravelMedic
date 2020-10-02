<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\Permission;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    /**
     * Fetch a list of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request)
    {
        $size = $request->input('all') == true ? -1 : 15;

        $permissions = Permission::query();

        $permissions = $this->filter($permissions, $request, Permission::filterable);
        $permissions = $permissions->paginate($size);
        return Response::Ok($permissions, 'Permissions list fetched successfully');
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
            'name' => 'required|string|min:3|unique:permissions,name',
            'description' => 'required|string|min:3',
        ]);

        try {
            $permission = Permission::create($data);

            if ($permission == null) {
                Response::Error('Failed to create new permission');
            }
            return Response::Ok($permission, 'Permission resource created successfully');
        } catch (\Throwable $th) {
            Response::Error('Failed to create new permission');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Permission $permission)
    {
        $data = $request->validate([
            'name' => 'nullable|string|min:3|unique:permissions,name,' . $permission['id'],
            'description' => 'nullable|string|min:3',
        ]);

        try {
            if (!$permission->update($data)) {
                return Response::Error('Failed to update permission ' . $permission['id']);
            }
            return Response::Ok($permission, 'Permission resource updated successfully');
        } catch (\Throwable $th) {
            return Response::Error('Failed to update permission ' . $permission['id']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function delete(Permission $permission)
    {
        try {
            // 1- Delete assocaiation with roles
            $permission->delete_roles();
            // 2- Delete the entity
            if (!$permission->delete()) {
                return Response::Error('Failed to delete permission ' . $permission['id']);
            }
            return Response::Ok($permission, 'Permission ' . $permission['id'] . ' removed successfully');
        } catch (\Throwable $th) {
            return Response::Error('Failed to delete permission ' . $permission['id']);
        }
    }
}
