<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\Role;
use App\Models\RolePermission;
use Illuminate\Http\Request;

class RolePermissionController extends Controller
{
    public function fetch(Role $role)
    {
        return $this->get_permissions($role);
    }

    public function assign(Request $request, Role $role)
    {
        $data = $request->validate([
            'permissions' => 'required|array|min:1'
        ])['permissions'];

        $permissions = array_column($this->get_permissions($role)->toArray(), 'id');

        $toAdd = [];
        $toDelete = [];

        foreach ($data as $i => $element) {
            $res = array_search($element, $permissions, true);
            if (is_bool($res) && $res == false) {
                array_push($toAdd, $element);
            }
        }

        foreach ($permissions as $j => $permission) {
            $res = array_search($permission, $data, true);
            if (is_bool($res) && $res == false) {
                array_push($toDelete, $permission);
            }
        }

        $role->permissions()->attach($toAdd);
        $role->permissions()->detach($toDelete);

        return Response::Ok($this->get_permissions($role), "Role's permissions assigned successfully");
    }

    private function get_permissions(Role $role)
    {
        return $role->permissions()->get();
    }
}
