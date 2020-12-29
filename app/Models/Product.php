<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public const filterable = [
        'category_id', 'brand_id',
        'en_name', 'en_description', 'ar_name', 'ar_description', 'brand.en_name', 'category.en_name', 'is_main', 'price.value', 'available'
    ];

    protected $fillable = [
        'en_name', 'en_description', 'ar_name', 'ar_description', 'brand_id', 'category_id', 'is_main', 'price_id', 'available'
    ];

    protected $casts = [
        'available' => 'bool',
    ];

    protected $appends = array('exchanged_price');

    public function price()
    {
        return $this->belongsTo(Price::class);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function attachments()
    {
        return $this->belongsToMany(Attachment::class, ProductAttachment::class, 'product_id');
    }

    public function set_attachments(array $data): void
    {
        $attachments = array_column($this->attachments()->get()->toArray(), 'id');

        $toAdd = [];
        $toDelete = [];

        foreach ($data as $i => $e) {
            $res = array_search($e, $attachments, true);
            if (is_bool($res) && $res == false) {
                array_push($toAdd, $e);
            }
        }

        foreach ($attachments as $j => $a) {
            $res = array_search($a, $data, true);
            if (is_bool($res) && $res == false) {
                array_push($toDelete, $a);
            }
        }

        // // dd($toAdd, $toDelete);

        $this->attachments()->attach($toAdd);
        $this->attachments()->detach($toDelete);
    }

    public function delete_attachments()
    {
        $attachments = $this->attachments();
        $ids = array_column($attachments->get()->toArray(), 'id');

        $attachments->detach();
        return Attachment::whereIn('id', $ids)->delete();
    }

    public function order_products()
    {
        return $this->hasMany(OrderProduct::class, 'product_id');
    }

    public function getExchangedPriceAttribute()
    {
        $e = Exchange::query()->orderBy('changed_at', 'DESC')->first()->value;
        $p = clone($this->price);

        $p->value = $p->value * $e;
        if($p->previous != null) {
            $p->previous->value = $p->previous->value * $e;
        }
        return $p;
    }
}
