<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    public const image = 0;
    public const video = 1;

    public static function values()
    {
        $image = 0;
        $video = 1;

        return [$image, $video];
    }

    public static function typeFromMimeType(string $mimeType)
    {
        $type = explode('/', $mimeType)[0];

        switch($type)
        {
            case 'image':
                return Attachment::image;
            case 'video':
                return Attachment::video;
            default:
                throw "Unsupported mimeType";
        }
    }

    protected $fillable = [
        'type', 'url', 'path', 'code'
    ];

    protected $hidden = [
        'path'
    ];
}
