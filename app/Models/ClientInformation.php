<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Model;

class ClientInformation extends Model
{
    public static function make($data): ClientInformation
    {
        $provinceName = $data['province'];
        $province = Province::query()
            ->where('en_name', '=', $provinceName)
            ->orWhere('ar_name', '=', $provinceName)
            ->first();

        if($province == null)
        {
            throw new Exception('Chosen province does not match');
        }
        
        $normalizedProvinceName = $province['en_name'];
        $data['province'] = $normalizedProvinceName;

        return ClientInformation::create($data);
    }


    protected $fillable = [
        'name', 'phone', 'province', 'address', 'notes', 'user_id'
    ];
}
