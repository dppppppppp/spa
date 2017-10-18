<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = factory(\App\User::class)->times(10)->make()->makeVisible(['password']);
        \App\User::insert($users->toArray());
    }
}
