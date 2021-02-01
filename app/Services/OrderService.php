<?php

namespace App\Services;

use App\Http\Requests\CreateAnonymousOrderRequest;
use App\Http\Requests\CreateOrderByUserRequest;
use App\Http\Requests\CreateOrderRequest;
use App\Models\ClientInformation;
use App\Models\Order;
use App\Models\OrderStatus;
use App\Models\PromoCode;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class OrderService extends Service
{
    protected $notifier;
    protected $exchange;

    public function __construct(NotificationService $notifier, ExchangeService $exchange)
    {
        $this->notifier = $notifier;
        $this->exchange = $exchange;
    }

    public function createOrder(CreateOrderRequest $request): Order
    {
        $data = $request->all();
        $createData = [];

        $createData['user_id'] = $data['user_id'];
        $createData['exchange_id'] = $this->exchange->latest()->id;
        if (array_key_exists('promo_code', $data) && $data['promo_code'] != null) {
            $createData['promo_code_id'] = PromoCode::getPromoCodeId($data['promo_code']);
        }
        $order = Order::create($createData);

        OrderStatus::make_order_status($order, OrderStatus::pending, auth()->id());
        ClientInformation::make_from_user($order, null, $data['client']);

        $order->setProducts($data['products']);

        if ($order == null) {
            throw new Exception('Created order is null');
        }
        $this->notifyOrderSides($order);

        return $order;
    }

    public function createAnonymousOrder(CreateAnonymousOrderRequest $request): Order
    {
        $data = $request->all();
        $createData = [];

        $createData['exchange_id'] = $this->exchange->latest()->id;
        if (array_key_exists('promo_code', $data) && $data['promo_code'] != null) {
            $createData['promo_code_id'] = PromoCode::getPromoCodeId($data['promo_code']);
        }
        $order = Order::create($createData);

        OrderStatus::make_order_status($order, OrderStatus::pending, 13);
        ClientInformation::make_from_user($order, null, $data['client']);

        $order->setProducts($data['products']);

        if ($order == null) {
            throw new Exception('Created order is null');
        }
        $this->notifyOrderSides($order);

        return $order;
    }

    public function createUserOrder(User $user, CreateOrderByUserRequest $request): Order
    {
        $data = $request->all();
        $createData = [];


        $createData['user_id'] = $user->id;
        $createData['exchange_id'] = $this->exchange->latest()->id;

        if (array_key_exists('promo_code', $data) && $data['promo_code'] != null) {
            $createData['promo_code_id'] = PromoCode::getPromoCodeId($data['promo_code']);
        }
        $order = Order::create($createData);

        OrderStatus::make_order_status($order, OrderStatus::pending, $user->id);
        ClientInformation::make_from_user($order, $user, $data['client'] ?? []);

        $order->setProducts($data['products']);

        if ($order == null) {
            throw new Exception('Created order is null');
        }
        $this->notifyOrderSides($order);

        return $order;
    }

    public function getOrders(Request $request)
    {
        $orders = Order::query()
            ->with([
                'statuses',
                'user',
                'client',
                'client.province',
                'promo_code',
                'exchange',
                'order_products',
                'order_products.product',
                'order_products.product.category',
                'order_products.product.brand',
                'order_products.product.price',
                'order_products.product.attachments',
                'order_products.price',
            ])
            ->orderBy('id');

        $status = $request->input(str_replace('.', '_', 'status.title'));
        if ($status != null) {
            $orders = $orders->whereHas('statuses', function ($q) use ($status) {
                return $q->where('title', '=', $status);
            });
        }
        $orders = $this->filter($orders, $request, Order::filterable);
        $orders = $orders->paginate(15);

        return $orders;
    }

    public function getUserOrders(User $user)
    {
        $orders = Order::query()
            ->with([
                'statuses',
                'user',
                'client',
                'client.province',
                'promo_code',
                'exchange',
                'order_products',
                'order_products.product',
                'order_products.product.category',
                'order_products.product.brand',
                'order_products.product.price',
                'order_products.product.attachments',
                'order_products.price',
            ])
            ->orderBy('id')
            ->where('user_id', '=', $user->id)
            ->get();

        return $orders;
    }

    public function updateOrder(Order $order, array $data): Order
    {
        if (array_key_exists('products', $data)) {
            $order->setProducts($data['products']);
        }

        if (array_key_exists('client', $data)) {
            $info = $order->client()->first();

            $info->update($data['client']);
            $info->save();
        }

        if (array_key_exists('promo_code', $data)) {
            $createData['promo_code_id'] = PromoCode::getPromoCodeId($data['promo_code']);
        }

        if (!$order->update($data)) {
            throw new Exception('Failed to update order ' . $order['id']);
        }
        return $order;
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

    public function deleteOrder(Order $order): Order
    {
        // 1- Delete products related to
        if (!$order->delete_products()) {
            throw new Exception('Failed to delete order ' . $order['id'] . ' (1)');
        }
        // 2- Delete client related to
        if (!$order->delete_client()) {
            throw new Exception('Failed to delete order ' . $order['id'] . ' (2)');
        }
        // 3- Delete statuses related to
        if (!$order->delete_statuses()) {
            throw new Exception('Failed to delete order ' . $order['id'] . ' (3)');
        }
        // 4- Delete the entity
        if (!$order->delete()) {
            throw new Exception('Failed to delete order ' . $order['id'] . ' (4)');
        }
        return $order;
    }

    private function notifyOrderSides(Order $order)
    {
        $data1 = [
            "title" => "New Order Submission",
            "body" => "Client '" . $order->client->name . "' submitted new order (" . $order->id . ")",
            "payload" => $order['id'],
        ];
        $this->notifier->push_notification_to_administrators($data1);

        $user = $order->user()->first();
        if ($user instanceof User) {
            $data2 = [
                "title" => "Order Status",
                "body" => "Dear Mr/Madam " . $order->client->name . ", Your order submitted successfully",
                "payload" => $order['id'],
            ];
            $this->notifier->push_notification_to_user($user, $data2);
        }
    }
}
