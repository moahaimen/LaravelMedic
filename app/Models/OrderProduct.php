<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderProduct extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'order_id', 'product_id', 'quantity', 
        'price_id',
    ];

    protected $casts = [
        'quantity' => 'int'
    ];

    public function price()
    {
        return $this->belongsTo(Price::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
