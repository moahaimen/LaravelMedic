<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClientInformation extends Model
{
    public static function make($data): ClientInformation
    {
        return ClientInformation::create($data);
    }


    protected $fillable = [
        'name', 'email', 'phone', 'province', 'address', 'notes', 'user_id'
    ];
}
