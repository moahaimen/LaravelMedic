<?php

namespace App\Services;

use App\Models\Exchange;
use App\Models\Price;
use App\Models\Product;
use Exception;

class PriceService extends Service
{

    public function create(float $value): Price
    {
        $exchange = Exchange::query()->orderBy('changed_at', 'DESC')->first();

        $data = [
            'previous_id' => null,
            'exchange_id' => $exchange->id,
            'value' => $value,
            'updated_at' => now(),
            'is_discount' => false
        ];
        return Price::create($data);
    }

    public function changeProductPrice(Product $product, float $value, bool $discount): Price
    {
        $price = $product->price()->get()->first();
        if ($price instanceof Price) {

            if ($discount != null && $price->previous_id != null) {
                $price->update(['is_discount' => $discount]);
                return $price;
            } else if ($price->value != $value) {

                $exchange = Exchange::query()->orderBy('changed_at', 'DESC')->first();
                $data = [
                    'previous_id' => $price->id,
                    'exchange_id' => $exchange->id,
                    'value' => $value,
                    'updated_at' => now(),
                    'is_discount' => $discount
                ];
                $next = Price::create($data);

                $product->price_id = $next->id;
                return $next;
            } else {
                return null;
            }
        }
    }
}
