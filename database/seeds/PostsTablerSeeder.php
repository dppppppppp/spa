<?php

use Illuminate\Database\Seeder;

class PostsTablerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user_ids = [1,2,3];
        $faker = app(\Faker\Generator::class);
        $posts = factory(\App\Post::class)->times(50)->make()->each(function($post) use ($user_ids,$faker){
            $post->user_id = $faker->randomElement($user_ids);
        });
        \App\Post::insert($posts->toArray());
    }
}
