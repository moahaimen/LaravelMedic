<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\ClientInformation;
use App\Models\Order;
use App\Models\OrderStatus;
use App\Models\PromoCode;
use App\Models\User;
use App\Notifications\PushOrder;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    /**
     * Fetch a list of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request)
    {
        try {
            $orders = Order::with([
                'promo_code', 'status', 'client', 'order_products', 'order_products.price', 'order_products.product'
            ]);

            $orders = $this->filter($orders, $request, Order::filterable);
            $orders = $orders->paginate(15);

            return Response::Ok($orders, 'Orders list fetched successfully');
        } catch (\Throwable $th) {
            return Response::Error('Failed to fetch orders list');
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
            'client.name' => 'required|string|min:3',
            'client.phone' => 'required|string',
            'client.province' => 'required|string|min:3',
            'client.address' => 'required|string|min:3',
            'client.notes' => 'nullable|string|min:3',
            'client.user_id' => 'nullable|numeric|exists:users,id',
            'promo_code' => 'nullable|string|exists:promo_codes,code',
        ]);
        return $this->add_order($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create2(Request $request)
    {
        $o = $request->input('o');
        $d = base64_decode($o);
        $e = json_decode($d, true);

        $data = Validator::make($e, [
            'products' => 'required|array|min:1',
            'products.*.quantity' => 'required|numeric|min:1',
            'products.*.product_id' => 'required|numeric|exists:products,id',
            'client.name' => 'required|string|min:3',
            'client.phone' => 'required|string',
            'client.province' => 'required|string|min:3',
            'client.address' => 'required|string|min:3',
            'client.notes' => 'nullable|string|min:3',
            'client.user_id' => 'nullable|numeric|exists:users,id',
            'promo_code' => 'nullable|string|exists:promo_codes,code',
        ])->validate();

        return $this->add_order($data);
    }

    private function add_order($data)
    {
        try {
            $data['status_id'] = OrderStatus::make(OrderStatus::pending, auth()->id())['id'];
            $data['client_id'] = ClientInformation::make($data['client'])['id'];

            if (array_key_exists('promo_code', $data) && $data['promo_code'] != null) {
                $data['promo_code_id'] = PromoCode::all()->where('code', '=', $data['promo_code'])->first()['id'];
            }

            $order = Order::create($data);
            $order->set_products($data['products']);

            if ($order == null) {
                Response::Error('Failed to create new order');
            }


            NotificationController::notify_all_admins([
                "title" => "New Order Submission",
                "body" => "Client '" . $data['client']['name'] . "' submitted new order (" . $order['id'] . ")",
                "payload" => $order['id'],
            ]);

            return Response::Ok($order, 'Order resource created successfully');
        } catch (\Exception $e) {
            return Response::Error('Failed to create new order');
        }
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
        $status = $order->status()->get()->first()['title'];
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
}
