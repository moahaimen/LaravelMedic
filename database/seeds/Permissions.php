<?php

use App\Models\Permission;
use Illuminate\Database\Seeder;

class Permissions extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->permissionsData() as $i => $permission) {
            Permission::create($permission);
        }
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
}
