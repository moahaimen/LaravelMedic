<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Type\Decimal;

class Price extends Model
{
    public static function make(int $value, Price $current = null): Price
    {
        $data = [
            'value' => $value
        ];

        if ($current != null) {
            $data['previous_id'] = $current['id'];
        }

        return Price::create($data);
    }

    public $timestamps = false;

    protected $fillable = [
        'value', 'updated_at', 'previous_id'
    ];

    protected $casts = [
        'value' => 'int'
    ];
}
