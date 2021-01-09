<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Province extends Model
{
    public const filterable = ['en_name', 'ar_name', 'fees'];
    protected $fillable = ['en_name', 'ar_name', 'fees'];
    
    protected $casts = [
        'fees' => 'double',
    ];
}
