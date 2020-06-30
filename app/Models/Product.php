<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name', 'brand_id', 'category_id', 'is_main', 'price_id',
    ];

    public function price()
    {
        $first = $this->belongsTo(Price::class)->get()->first();
        return $first;
    }
}
