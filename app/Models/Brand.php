<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $fillable = [
        'name',  'description', 'attachment_id'
    ];

    public function attachment()
    {
        return $this->hasOne(Attachment::class, 'attachment_id');
    }
}
