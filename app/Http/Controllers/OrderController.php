<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\ClientInformation;
use App\Models\Order;
use App\Models\OrderStatus;
use App\Models\PromoCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    /**
     * Fetch a list of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get()
    {
        $orders = Order::with([
            'status',
            'products',
            'products.price',
            'promo_code',
            'client',
        ])->get();

        return Response::Ok($orders, 'Orders list fetched successfully');
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
            'client.email' => 'required|email',
            'client.phone' => 'required',
            'client.province' => 'required|string|min:3',
            'client.address' => 'required|string|min:3',
            'client.notes' => 'nullable|string|min:3',
            'client.user_id' => 'nullable|numeric|exists:users,id',
            'promo_code' => 'nullable|numeric|exists:promo_codes,code',
        ]);
        try {
            $data['status_id'] = OrderStatus::make(OrderStatus::pending, auth()->id())['id'];
            $data['client_id'] = ClientInformation::make($data['client'])['id'];

            if (array_key_exists('promo_code', $data) && $data['promo_code'] != null) {
                $data['promo_code_id'] = PromoCode::all()->where('code', '=', $data['promo_code'])->first()['id'];
            }

            $order = Order::create($data);
            $order->setProducts($data['products']);

            if ($order == null) {
                Response::Error('Failed to create new order');
            }
            return Response::Ok($order, 'Order resource created successfully');
        } catch (\Exception $e) {
            Response::Error('Failed to create new order');
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
            'client.email' => 'nullable|email',
            'client.phone' => 'nullable|phone',
            'client.province' => 'nullable|string|min:3',
            'client.address' => 'nullable|string|min:3',
            'client.notes' => 'nullable|string|min:3',
            'client.user_id' => 'nullable|numeric|exists:users,id',
            'promo_code_id' => 'nullable|numeric|exists:promo_codes,id',
        ]);

        try {
            if (array_key_exists('products', $data)) {
                $order->setProducts($data['products']);
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
            return Response::Error('You cannot update order status since it is canceled or rejected');
        }

        $data = $request->validate([
            'status' => 'required|numeric|min:' . $status,
        ]);

        $order['status_id'] = OrderStatus::make($data['status'], auth()->id())['id'];
        $order->save();

        return Response::Ok('Order\'s status updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function delete(Order $order)
    {
        DB::beginTransaction();
        try {
            DB::table('order_products')
                ->where('order_id', '=', $order['id'])
                ->delete();

            DB::table('client_information')
                ->where('id', $order['client_id'])
                ->delete();

            DB::table('orders')->delete($order['id']);
            return Response::Ok($order, 'Order ' . $order['id'] . ' removed successfully');
        } catch (\Exception $e) {
            DB::rollBack();
            return Response::Error('Failed to delete order ' . $order['id']);
        }
    }
}
