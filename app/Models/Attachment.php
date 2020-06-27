<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    public const image = 0;
    public const video = 1;

    public static function values()
    {
        $image = 0;
        $video = 1;

        return [$image, $video];
    }
}
