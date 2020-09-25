<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public const filterable = ['en_name',  'en_description', 'ar_name',  'ar_description'];

    protected $fillable = [
        'en_name',  'en_description', 'ar_name',  'ar_description', 'icon'
    ];
}
