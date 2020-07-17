<?php

namespace App\DB\Seeds;

use App\Models\Role;
use App\Models\RolePermission;
use Illuminate\Database\Seeder;

class RolePermissions extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->attach_permission_to_role(1, 1);
        $this->attach_permission_to_role(1, 2);
        $this->attach_permission_to_role(1, 3);
        $this->attach_permission_to_role(1, 4);
        $this->attach_permission_to_role(1, 5);
        $this->attach_permission_to_role(1, 6);
        $this->attach_permission_to_role(1, 7);
        $this->attach_permission_to_role(1, 8);
        $this->attach_permission_to_role(1, 9);
        $this->attach_permission_to_role(1, 10);
        $this->attach_permission_to_role(1, 11);
        $this->attach_permission_to_role(1, 12);
        $this->attach_permission_to_role(1, 13);
        $this->attach_permission_to_role(1, 14);
        $this->attach_permission_to_role(1, 15);
        $this->attach_permission_to_role(1, 16);
    }

    private function attach_permission_to_role(int $roleId, int $permissionId)
    {
        $role = Role::find($roleId);
        if ($role instanceof Role) {
            $role->permissions()->attach($permissionId);
        }
    }
}
