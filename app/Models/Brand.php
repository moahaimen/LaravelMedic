<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    public const filterable = ['en_name',  'en_description', 'ar_name', 'ar_description'];
    
    protected $fillable = [
        'en_name',  'en_description', 'ar_name',  'ar_description', 'attachment_id'
    ];

    public function attachment()
    {
        return $this->belongsTo(Attachment::class, 'attachment_id');
    }

    public function delete_attachment()
    {
        return Attachment::where('id', '=', $this->attachment_id)->delete();
    }
}
