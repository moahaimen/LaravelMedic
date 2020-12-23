<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClientInformation extends Model
{
    public static function make_from_user(Order $order, User $user = null, array $request): ClientInformation
    {
        $client = new ClientInformation;

        $client->name = array_key_exists('name', $request) ? $request['name'] : $user->first_name . ' ' . $user->last_name;
        $client->phone = array_key_exists('phone', $request) ? $request['phone'] : $user->phone_number;
        $client->province_id = array_key_exists('province_id', $request) ? $request['province_id'] : $user->province_id;
        $client->address = array_key_exists('address', $request) ? $request['address'] : $user->address;
        $client->notes = array_key_exists('notes', $request) ? $request['notes'] : null;

        $order->client()->save($client);
        return $client;
    }


    protected $fillable = ['name', 'phone', 'province_id', 'address', 'notes', 'order_id'];

    public function order()
    {
        return $this->belongsTo(Order::class, 'id', 'role_id');
    }
}
