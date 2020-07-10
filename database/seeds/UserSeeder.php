<?php

use App\Models\User;
use App\Models\UserStatus;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->userData() as $i => $user) {
            User::create($user);
        }
    }

    private function userData()
    {
        $nazeer = [
            'user_name' => 'nazeer',
            'first_name' => 'Nazeer',
            'last_name' => 'Allahham',
            'email' => 'nazeeer.allahham@outlook.com',
            'password' => bcrypt('Aa123$56'),
            'role_id' => 1,
            'status_id' => UserStatus::make(UserStatus::active, '<seeder>')['id'],
        ];

        $tester = [
            'user_name' => 'tester',
            'first_name' => 'Tester',
            'last_name' => 'Tester',
            'email' => 'tester@mail.com',
            'password' => bcrypt('Aa123$56'),
            'role_id' => 2,
            'status_id' => UserStatus::make(UserStatus::active, '<seeder>')['id'],
        ];

        $users = [];
        array_push($users, $nazeer, $tester);

        return $users;
    }
}
