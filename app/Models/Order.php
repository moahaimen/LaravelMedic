<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Order extends Model
{
    public const filterable = [
        'client.name', 
        'client.phone', 
        'client.address',
        'statuses.title'
    ];

    public $timestamps = false;
    protected $fillable = ['promo_code_id', 'user_id'];

    /**
     * Begin of Model relations defnition
     */

    public function status()
    {
        return $this->statuses()->first();
    }

    public function statuses()
    {
        return $this->hasMany(OrderStatus::class)->orderBy('changed_at');
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
        return $this->belongsToMany(Product::class, OrderProduct::class, 'order_id');
    }

    public function order_products()
    {
        return $this->hasMany(OrderProduct::class, 'order_id');
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

    public function set_products(array $data)
    {
        $products = $this->order_products()->get();

        $this->products()->detach();

        foreach ($data as $k => $element) {
            $product_id = $element['product_id'];
            $order_product = $products->find($product_id);

            if ($order_product != null) {
                $order_product->update([
                    'qunatity' => $element['quantity'],
                ]);
            } else {

                DB::table('order_products')->insert([
                    'order_id' => $this->id,
                    'product_id' => $product_id,
                    'quantity' => $element['quantity'],
                    'price_id' => Product::find($product_id)->price()->get()[0]['id'],
                ]);
            }
        }
    }
}
