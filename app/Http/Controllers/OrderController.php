<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\Order;
use App\Models\OrderStatus;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Fetch a list of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get()
    {
        $orders = Order::all();

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
            'client_id' => 'required|numeric|exists:users,id',
        ]);
        $data['status_id'] = OrderStatus::make(OrderStatus::pending, auth()->id())['id'];

        $order = Order::create($data);
        $order->setProducts($data['products']);

        if ($order == null) {
            Response::Error('Failed to create new order');
        }
        return Response::Ok($order, 'Order resource created successfully');
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
        $data = $request->validate([
            'status' => 'nullable|numeric|min:' . $order->status()['title'],
            'products' => 'nullable|array|min:1',
            'products.*.quantity' => 'nullable|numeric|min:1',
            'products.*.product_id' => 'nullable|numeric|exists:products,id',
        ]);

        if (array_key_exists('status', $data)) {
            $data['status_id'] = OrderStatus::make(
                OrderStatus::pending,
                auth()->id(),
                $order->status()
            )['id'];
        }

        if (array_key_exists('products', $data)) {
            $order->setProducts($data['products']);
        }

        if (!$order->update($data)) {
            return Response::Error('Failed to update order ' . $order['id']);
        }
        return Response::Ok($order, 'Order resource updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function delete(Order $order)
    {
        if (!$order->delete()) {
            return Response::Error('Failed to delete order ' . $order['id']);
        }
        return Response::Ok($order, 'Order ' . $order['id'] . ' removed successfully');
    }
}
