<?php

use Faker\Generator as Faker;

$factory->define(\App\Post::class, function (Faker $faker) {
    $date_time = $faker->date . ' ' . $faker->time;

    return [
        'title'      => $faker->sentence,
        'body'       => $faker->paragraph,
        'created_at' => $date_time,
        'updated_at'    => $date_time,
    ];
});
