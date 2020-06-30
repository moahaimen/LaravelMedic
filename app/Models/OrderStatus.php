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


    public static function make(int $title, string $changed_by, OrderStatus $current = null): OrderStatus
    {
        $data = [
            'title' => $title,
            'changed_by' => $changed_by
        ];
        if ($current != null) {
            $data['previous_id'] = $current['id'];
        }

        return OrderStatus::create($data);
    }

    public $timestamps = false;

    protected $fillable = [
        'title', 'changed_at', 'changed_by', 'previous_id'
    ];
}
