<?php

namespace App\DB\Seeds;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RoleSeeder::class,
            Permissions::class,
            Users::class,
            RolePermissions::class,
        ]);

        foreach ($this->permissionsData() as $i => $permission) {
            Permission::create($permission);
        }

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

    private function permissionsData()
    {
        $names = [
            'fetchUsers', 'manageUsers',
            'fetchRoles', 'manageRoles',
            'fetchPermissions', 'managePermissions',
            'fetchBrands', 'manageBrands',
            'fetchCategories', 'manageCategories',
            'fetchProducts', 'manageProducts',
            'fetchOrders', 'manageOrders',
            'fetchPromoCodes', 'managePromoCodes'
        ];
        $descriptions = [
            'Can fetch users', 'Can manage users',
            'Can fetch roles', 'Can manage roles',
            'Can fetch permissions', 'Can manage permissions',
            'Can fetch brands', 'Can manage brands',
            'Can fetch categories', 'Can manage categories',
            'Can fetch products', 'Can manage products',
            'Can fetch orders', 'Can manage orders',
            'Can fetch promo codes', 'Can manage promo codes'
        ];
        $permissions = [];
        foreach ($names as $i => $name) {
            array_push($permissions, ['name' => $name, 'description' => $descriptions[$i]]);
        }
        return $permissions;
    }

    private function attach_permission_to_role(int $roleId, int $permissionId)
    {
        $role = Role::find($roleId);
        if ($role instanceof Role) {
            $role->permissions()->attach($permissionId);
        }
    }
}
