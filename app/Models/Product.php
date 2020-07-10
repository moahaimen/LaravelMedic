<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name', 'description', 'brand_id', 'category_id', 'is_main', 'price_id',
    ];

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
        $attachments = array_column($this->attachments()->get()->toArray(), 'attachment_id');

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

        // dd($toAdd, $toDelete);

        $this->attachments()->attach($toAdd);
        $this->attachments()->detach($toDelete);
    }
}
