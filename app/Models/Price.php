<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Type\Decimal;

class Price extends Model
{
    public static function make(int $value, bool $isDiscount, Price $current = null): Price
    {
        $data = [
            'value' => $value
        ];

        if ($current != null) {
            $data['previous_id'] = $current['id'];
        }
        
        if ($isDiscount != null && $isDiscount == true) {
            $data['is_discount'] = true;
        }

        return Price::create($data);
    }

    public $timestamps = false;

    protected $fillable = [
        'value', 'updated_at', 'previous_id', 'is_discount'
    ];

    protected $casts = [
        'value' => 'int',
        'is_discount' => 'boolean',
    ];

    public function previous()
    {
        return $this->belongsTo(Price::class, 'previous_id');
    }
}
