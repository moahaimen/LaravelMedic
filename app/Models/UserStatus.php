<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserStatus extends Model
{
    public const active = 0;
    public const blocked = 1;

    public static function values()
    {
        $active = 0;
        $blocked = 1;

        return [$active, $blocked];
    }

    public static function make(int $title, string $changed_by): UserStatus
    {
        return UserStatus::create([
            'title' => $title,
            'changed_by' => $changed_by
        ]);
    }

    public $timestamps = false;

    protected $fillable = [
        'title', 'changed_at', 'changed_by'
    ];
}
