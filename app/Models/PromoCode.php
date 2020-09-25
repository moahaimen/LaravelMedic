<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PromoCode extends Model
{
    public const filterable = [
        'code', 'type', 'discount', 'created_at', 'updated_at', 'start_at', 'finish_at'
    ];

    public const constant = 0;
    public const percentage = 1;

    public static function discountTypes()
    {
        return [0, 1];
    }


    protected $fillable = [
        'code', 'type', 'discount', 'created_at', 'updated_at', 'start_at', 'finish_at'
    ];

    public function hasOrders(): bool
    {
        return $this->hasMany(Order::class, 'promo_code_id')->count() > 0;
    }
}
