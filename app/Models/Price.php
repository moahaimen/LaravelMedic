<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'previous_id',
        'value', 'updated_at', 'is_discount'
    ];

    protected $casts = [
        'value' => 'double',
        'is_discount' => 'boolean',
    ];

    public function previous()
    {
        return $this->belongsTo(Price::class, 'previous_id');
    }

}
