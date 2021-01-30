<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Order extends Model
{
    public const filterable = ['user_id','client.name', 'client.phone', 'client.address'];

    public $timestamps = false;
    protected $fillable = ['promo_code_id', 'user_id', 'exchange_id'];

    protected $casts = [
        'user_id' => 'int',
        'promo_code_id' => 'int',
        'exchange_id' => 'int',
    ];

    /**
     * Begin of Model relations defnition
     */

    public function status()
    {
        return $this->statuses()->first();
    }

    public function statuses()
    {
        return $this->hasMany(OrderStatus::class)->orderBy('changed_at', 'desc');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function client()
    {
        return $this->hasOne(ClientInformation::class);
    }

    public function promo_code()
    {
        return $this->belongsTo(PromoCode::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, OrderProduct::class, 'order_id')->withPivot(['quantity', 'price_id']);
    }

    public function order_products()
    {
        return $this->hasMany(OrderProduct::class, 'order_id');
    }

    public function exchange()
    {
        return $this->belongsTo(Exchange::class);
    }

    /**
     * Model relations defnition end
     */


    /**
     * Begin of Model methods defnition
     */

    public function delete_statuses()
    {
        try {
            $this->statuses()->delete();
            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }

    public function delete_client()
    {
        try {
            $this->client()->delete();
            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }

    public function delete_products()
    {
        try {
            $this->order_products()->delete();
            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }

    public function setProducts(array $elements): void
    {
        $this->products()->detach();

        $productsIds = array_column($elements, 'product_id');
        $products = Product::query()->whereIn('id', $productsIds)->get();

        foreach ($elements as $i => $e) {
            $e['product'] = $products[$i];
            $product_id = $e['product_id'];
            $data = [
                'quantity' => $e['quantity'],
                'price_id' => $e['product']['price_id'],
            ];
            $this->products()->attach($product_id, $data);
        }
    }
}
