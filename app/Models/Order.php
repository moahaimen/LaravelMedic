<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'status_id', 'client_id', 'promo_code_id'
    ];
    public $timestamps = false;

    public function status()
    {
        return $this->belongsTo(OrderStatus::class);
    }

    public function client()
    {
        return $this->belongsTo(ClientInformation::class, 'client_id', 'id');
    }

    public function promo_code()
    {
        return $this->belongsTo(PromoCode::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, OrderProduct::class, 'order_id');
    }
    
    public function order_products()
    {
        return $this->hasMany(OrderProduct::class, 'order_id');
    }

    public function set_products(array $data)
    {
        $products = array_column($this->products()->get()->toArray(), 'product_id');

        $toAdd = [];
        $toDelete = [];

        foreach ($data as $i => $element) {
            $product_id = $element['product_id'];
            $res = array_search($product_id, $products, true);
            if (is_bool($res) && $res == false) {
                // array_push($toAdd, $product_id);
                $toAdd[$product_id] = [
                    'product_id' => $product_id,
                    'quantity' => $element['quantity'],
                    'price_id' => Product::find($product_id)['price_id']
                ];
            }
        }

        $data2 = array_column($data, 'product_id');
        foreach ($products as $j => $product) {
            $res = array_search($product, $data2, true);
            if (is_bool($res) && $res == false) {
                array_push($toDelete, $product);
            }
        }

        // dd($toAddAttributes, $toAdd, $toDelete);

        $this->products()->attach($toAdd);
        $this->products()->detach($toDelete);
    }
}
