<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

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

    public function delete_statuses()
    {
        $current = $this->status()->get()[0];
        dd($current);

        while($current != null) {
            $previous = $current->previous();
            dd($previous);
            $current = $previous;
            if(!$current->delete()) {
                return false;
            }
        }
        return true;
    }

    public function client()
    {
        return $this->belongsTo(ClientInformation::class, 'client_id', 'id');
    }

    public function delete_client()
    {
        // return ClientInformation::where('id', '=', $this->client_id)->delete();
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

    public function delete_products()
    {
        return OrderProduct::where('order_id', '=', $this->id)->delete();
    }

    public function set_products(array $data)
    {
        $products = $this->order_products()->get();

        $this->products()->detach();

        foreach ($data as $key => $element) {
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
