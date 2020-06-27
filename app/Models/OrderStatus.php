<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderStatus extends Model
{
    public const pending = 0;
    public const accepted = 1;
    public const shipping = 2;
    public const deliveried = 3;
    public const rejected = 4;
    public const canceled = 5;

    public static function values()
    {
        return [0, 1, 2, 3, 4, 5];
    }
}
