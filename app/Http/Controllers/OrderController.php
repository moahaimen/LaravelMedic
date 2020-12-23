<?php

namespace App\Http\Controllers;

use App\Http\Middleware\Authorize;
use App\Http\Response;
use App\Models\ClientInformation;
use App\Models\Order;
use App\Models\OrderStatus;
use App\Models\PromoCode;
use App\Models\Province;
use App\Models\User;
use App\Services\NotificationService;
use App\Services\OrderService;
use Exception;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    var OrderService $order;
    var NotificationService $notifier;

    public function __construct(NotificationService $notifier, OrderService $order)
    {
        $this->notifier = $notifier;
        $this->order = $order;
    }


    /**
     * Fetch a list of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request)
    {
        try {
            $orders = $this->order->getOrders($request);
            return Response::Ok($orders, 'Orders list fetched successfully');
        } catch (\Exception $e) {
            return Response::Error('Failed to fetch orders list');
        }
    }

    /**
     * Fetch a list of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getUserOrders(Request $request)
    {
        try {
            $user = auth()->user();

            if ($user instanceof User) {

                $orders = $this->order->getUserOrders($user);
                return Response::Ok($orders, 'Your orders fetched successfully');
            } else {
                throw new Exception("Failed to recognize identity");
            }
        } catch (\Throwable $th) {
            return Response::Error('Failed to fetch your orders, ' . $th->getMessage());
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $data = $request->validate([
            'products' => 'required|array|min:1',
            'products.*.quantity' => 'required|numeric|min:1',
            'products.*.product_id' => 'required|numeric|exists:products,id',
            'client.name' => 'required_unless:user_id|string|min:3',
            'client.phone' => 'required_unless:user_id|string',
            'client.province_id' => 'required_unless:user_id|numeric|exists:provinces,id',
            'client.address' => 'required_unless:user_id|string|min:3',
            'client.notes' => 'nullable|string|min:3',
            'client.user_id' => 'nullable|numeric|exists:users,id',
            'promo_code' => 'nullable|string|exists:promo_codes,code',
        ]);

        try {
            $createData = [];

            $createData['user_id'] = $data['client']['id'];
            if (array_key_exists('promo_code', $data) && $data['promo_code'] != null) {
                $createData['promo_code_id'] = PromoCode::getPromoCodeId($data['promo_code']);
            }
            $order = Order::create($createData);

            OrderStatus::make_order_status($order, OrderStatus::pending, auth()->id());
            ClientInformation::make_from_user($order, null, $data['client']);

            $order->set_products($data['products']);

            if ($order == null) {
                throw new Exception('Created order is null');
            }
            $this->notify_order_stakeholders($order);

            return Response::Ok($order, 'Order resource created successfully');
        } catch (\Exception $e) {
            return Response::Error('Failed to create new order');
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function createUserOrder(Request $request)
    {
        $data = $request->validate([
            'products' => 'required|array|min:1',
            'products.*.quantity' => 'required|numeric|min:1',
            'products.*.product_id' => 'required|numeric|exists:products,id',
            'client.name' => 'nullable|string|min:3',
            'client.phone' => 'nullable|string',
            'client.province_id' => 'nullable|numeric|exists:provinces,id',
            'client.address' => 'nullable|string|min:3',
            'client.notes' => 'nullable|string|min:3',
            'promo_code' => 'nullable|string|exists:promo_codes,code',
        ]);

        try {
            $user = auth()->user();

            if ($user instanceof User) {

                $createData = [];

                $createData['user_id'] = $user->id;
                if (array_key_exists('promo_code', $data) && $data['promo_code'] != null) {
                    $createData['promo_code_id'] = PromoCode::getPromoCodeId($data['promo_code']);
                }
                $order = Order::create($createData);

                OrderStatus::make_order_status($order, OrderStatus::pending, $user->id);
                ClientInformation::make_from_user($order, $user, $data['client'] ?? []);

                $order->set_products($data['products']);

                if ($order == null) {
                    throw new Exception('Created order is null');
                }
                $this->notify_order_stakeholders($order);

                return Response::Ok($order, 'Order resource created successfully');
            } else {
                throw new Exception("We're not able to recognize your identity");
            }
        } catch (\Exception $e) {
            return Response::Error('Failed to create new order' . $e->getMessage());
        }
    }

    private function notify_order_stakeholders(Order $order)
    {
        $this->notifier->push_notification_to_administrators([
            "title" => "New Order Submission",
            "body" => "Client '" . $order->client->name . "' submitted new order (" . $order->id . ")",
            "payload" => $order['id'],
        ]);

        $this->notifier->push_notification_to_user($order->user()->first(), [
            "title" => "Order Status",
            "body" => "Dear Mr/Madam " . $order->client->name . ", Your order submitted successfully",
            "payload" => $order['id'],
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        if ($order->status()->get()->first()['title'] != OrderStatus::pending) {
            return Response::Error('You cannot update the order after it is accepted');
        }

        $data = $request->validate([
            'products' => 'nullable|array|min:1',
            'products.*.quantity' => 'nullable|numeric|min:1',
            'products.*.product_id' => 'nullable|numeric|exists:products,id',
            'client.name' => 'nullable|string|min:3',
            'client.phone' => 'nullable|string',
            'client.province' => 'nullable|string|min:3',
            'client.address' => 'nullable|string|min:3',
            'client.notes' => 'nullable|string|min:3',
            'client.user_id' => 'nullable|numeric|exists:users,id',
            'promo_code_id' => 'nullable|numeric|exists:promo_codes,id',
        ]);

        try {
            if (array_key_exists('products', $data)) {
                $order->set_products($data['products']);
            }

            if (array_key_exists('client', $data)) {
                $info = ClientInformation::find($order['client_id']);

                $info->update($data['client']);
                $info->save();
            }

            if (!$order->update($data)) {
                return Response::Error('Failed to update order ' . $order['id']);
            }
            return Response::Ok($order, 'Order resource updated successfully');
        } catch (\Exception $e) {
            return Response::Error('Failed to update order ' . $order['id']);
        }
    }

    /**
     * Update status of the specified resource in the storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update_status(Request $request, Order $order)
    {
        $status = $order->status()->title;
        if ($status == OrderStatus::canceled || $status == OrderStatus::rejected) {
            return Response::Error('Order status cannot be changed since it is canceled or rejected');
        }
        if ($status == OrderStatus::deliveried) {
            return Response::Error('Order status cannot be changed since it is deliveried');
        }

        $data = $request->validate([
            'status' => 'required|numeric|gt:' . $status,
        ]);

        try {
            $order['status_id'] = OrderStatus::make($data['status'], auth()->id())['id'];
            $order->save();

            $this->notifier->push_notification_to_user($order->user()->first(), [
                "title" => "Order Status Updated",
                "body" => "Dear Mr/Madam " . $order->client->name . ", Your order is " . $status . " now.",
                "payload" => $order['id'],
            ]);

            return Response::Ok($order, 'Order\'s status updated successfully');
        } catch (\Throwable $th) {
            return Response::Error('Failed to update order status');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function delete(Order $order)
    {
        try {
            // 1- Delete products related to
            if (!$order->delete_products()) {
                return Response::Error('Failed to delete order ' . $order['id'] . ' (1)');
            }

            // 2- Delete the entity
            if (!$order->delete()) {
                return Response::Error('Failed to delete order ' . $order['id'] . ' (2)');
            }

            return Response::Ok($order, 'Order ' . $order['id'] . ' removed successfully');
        } catch (\Exception $e) {
            return Response::Error('Failed to delete order ' . $order['id']);
        }
    }

    public function fixOrdersProvinces()
    {
        $orders = Order::query()->with('client');

        foreach ($orders as $i => $order) {

            $province = Province::query()
                ->where('en_name', '=', $order['client']['province'])
                ->orWhere('ar_name', '=', $order['client']['province'])
                ->first();

            if ($province == null) {
                throw new Exception('Chosen province does not match ' . $order['client']['province'] . ' from client:' . $order['client']['name']);
            }
            $order['client']['province'] = $province['en_name'];
            $order['client']->save();
            $order->save();
        }

        return true;
    }
}
