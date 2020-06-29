<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->rolesData() as $i => $role) {
            DB::table('roles')->insert($role);
        }
    }

    private function rolesData()
    {
        $administrator = [
            "name" => "administrator",
            "description" => "all permissions are granted"
        ];

        $user = [
            "name" => "user",
            "description" => "Orders management only allowed"
        ];

        $roles = [];
        array_push($roles, $administrator, $user);

        return $roles;
    }
}
