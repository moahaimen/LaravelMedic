<?php

use App\Models\Role;
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
            Role::create($role);
        }
    }

    private function rolesData()
    {
        $administrator = [
            "name" => "administrator",
            "description" => "all permissions are granted"
        ];

        $tester = [
            "name" => "tester",
            "description" => "testing the system"
        ];

        $user = [
            "name" => "user",
            "description" => "orders management only allowed"
        ];

        $client = [
            "name" => "client",
            "description" => "browse products and make orders"
        ];

        $roles = [];
        array_push($roles, $administrator, $tester, $user, $client);

        return $roles;
    }
}
