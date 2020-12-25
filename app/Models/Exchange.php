<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Exchange extends Model
{
    public const filterable = ['value', 'changed_at'];
    
    public $timestamps = false;
    protected $fillable = ['value', 'changed_at'];
}
