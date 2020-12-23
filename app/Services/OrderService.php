<?php

namespace App\Services;

use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;

class OrderService extends Service
{

    public function getOrders(Request $request)
    {
        $orders = Order::query()
            ->with([
                'statuses',
                'user', 'client',
                'promo_code',
                'order_products'
            ]);
        $orders = $this->filter($orders, $request, Order::filterable);
        $orders = $orders->paginate(15);

        return $orders;
    }

    public function getUserOrders(User $user)
    {
        $orders = Order::query()
            ->with([
                'statuses',
                'user', 'client',
                'promo_code', 'order_products'
            ])
            ->where('user_id', '=', $user->id)
            ->get();

        return $orders;
    }
}
