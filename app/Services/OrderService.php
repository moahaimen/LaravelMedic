<?php

namespace App\Services;

use App\Models\Order;
use App\Models\OrderStatus;
use App\Models\User;
use Illuminate\Http\Request;

class OrderService extends Service
{
    protected $notifier;

    public function __construct(NotificationService $notifier)
    {
        $this->notifier = $notifier;
    }

    public function getOrders(Request $request)
    {
        $orders = Order::query()
            ->with([
                'statuses',
                'user', 'client',
                'promo_code',
                'order_products',
                'order_products.product',
                'order_products.price',
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
                'promo_code',
                'order_products',
                'order_products.product',
                'order_products.price',
            ])
            ->where('user_id', '=', $user->id)
            ->get();

        return $orders;
    }

    public function changeOrderStatus(Order $order, int $status)
    {
        OrderStatus::make_order_status($order, $status, auth()->id());

        $user = $order->user()->first();
        if ($user instanceof User) {
            $data = [
                "title" => "Order Status Updated",
                "body" => "Dear Mr/Madam " . $order->client->name . ", Your order is " . $status . " now.",
                "payload" => $order['id'],
            ];
            $this->notifier->push_notification_to_user($user, $data);
        }
        return $order;
    }
}
