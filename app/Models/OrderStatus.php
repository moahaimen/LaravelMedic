<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderStatus extends Model
{
    public const pending = 0;
    public const accepted = 1;
    public const shipping = 2;
    public const deliveried = 3;
    public const rejected = 4;
    public const canceled = 5;

    public static function values()
    {
        return [0, 1, 2, 3, 4, 5];
    }


    public static function make_order_status(Order $order, int $title, string $changed_by): OrderStatus
    {
        $status = new OrderStatus;

        $status->title = $title;
        $status->changed_by = $changed_by;
        $status->changed_at = now();
        $status->previous_id = $order->status()->id ?? null;

        $order->statuses()->save($status);
        return $status;
    }

    public $timestamps = false;

    protected $fillable = [
        'order_id', 'title', 'changed_at', 'changed_by', 'previous_id'
    ];

    protected $casts = [
        'title' => 'int'
    ];

    public function previous() {
        return $this->belongsTo(OrderStatus::class, 'previous_id');
    }
}
