<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $fillable = [
        'name',  'description', 'attachment_id'
    ];

    public function attachment()
    {
        return $this->belongsTo(Attachment::class, 'attachment_id');
    }

    public function delete_attachment()
    {
        $attachment = $this->attachment()->get();
        $attachment->delete();
    }
}
