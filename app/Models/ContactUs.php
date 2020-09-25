<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
    public const filterable = ['section', 'key', 'en_value', 'ar_value'];

    protected $fillable = ['section', 'key', 'en_value', 'ar_value', 'url'];
}
