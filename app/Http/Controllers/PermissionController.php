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
    public function get()
    {
        $permissions = Permission::all();

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
            'name' => 'required|string|min:3|unique:categories,name',
            'description' => 'required|string|min:3',
        ]);

        $permission = Permission::create($data);

        if ($permission == null) {
            Response::Error('Failed to create new permission');
        }
        return Response::Ok($permission, 'Permission resource created successfully');
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
            'name' => 'nullable|string|min:3|unique:categories,name,' . $permission['id'],
            'description' => 'nullable|string|min:3',
        ]);

        if (!$permission->update($data)) {

            return Response::Error('Failed to update permission ' . $permission['id']);
        }
        return Response::Ok($permission, 'Permission resource updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function delete(Permission $permission)
    {
        if (!$permission->delete()) {
            return Response::Error('Failed to delete permission ' . $permission['id']);
        }
        return Response::Ok($permission, 'Permission ' . $permission['id'] . ' removed successfully');
    }
}