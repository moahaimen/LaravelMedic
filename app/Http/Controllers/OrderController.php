<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateAnonymousOrderRequest;
use App\Http\Requests\CreateOrderByUserRequest;
use App\Http\Requests\CreateOrderRequest;
use App\Http\Requests\OrderCreateForUserRequest;
use App\Http\Requests\OrderCreateRequest;
use App\Http\Requests\OrderUpdateRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Http\Response;
use App\Models\ClientInformation;
use App\Models\Order;
use App\Models\OrderStatus;
use App\Models\Province;
use App\Models\User;
use App\Services\NotificationService;
use App\Services\OrderService;
use Exception;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    protected $order;
    protected $notifier;

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
            // throw $e;
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
    public function create(CreateOrderRequest $request)
    {
        try {
            $order = $this->order->createOrder($request);
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
    public function createAnonymousOrder(CreateAnonymousOrderRequest $request)
    {
        try {
            $order = $this->order->createAnonymousOrder($request);
            return Response::Ok($order, 'Your order created successfully');

        } catch (\Exception $e) {
            return Response::Error($e->getMessage() ?? 'Failed to create new order');
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function createUserOrder(CreateOrderByUserRequest $request)
    {
        try {
            $user = auth()->user();

            if ($user instanceof User) {

                $order = $this->order->createUserOrder($user, $request);
                return Response::Ok($order, 'Your order created successfully');
            } else {
                throw new Exception("Failed to recognize identity");
            }
        } catch (\Exception $e) {
            return Response::Error($e->getMessage() ?? 'Failed to create new order');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOrderRequest $request, Order $order)
    {
        try {
            if ($order->statuses()->get()->first()->title != OrderStatus::pending) {
                throw new Exception('You cannot update the order after it is accepted');
            }
            $this->order->updateOrder($order, $request->all());

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
    public function updateStatus(Request $request, Order $order)
    {
        try {
            $status = $order->statuses()->title;
            if ($status == OrderStatus::canceled || $status == OrderStatus::rejected) {
                return Response::Error('Order status cannot be changed since it is canceled or rejected');
            }
            if ($status == OrderStatus::deliveried) {
                return Response::Error('Order status cannot be changed since it is deliveried');
            }

            $data = $request->validate([
                'status' => 'required|numeric|gt:' . $status,
            ]);

            $this->order->changeOrderStatus($order, $data['status']);

            return Response::Ok($order, 'Order\'s status updated successfully');
        } catch (\Throwable $th) {
            return Response::Error($th->getMessage() ?? 'Failed to update order status');
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
            $this->order->deleteOrder($order);
            return Response::Ok($order, 'Order ' . $order['id'] . ' removed successfully');
        } catch (\Exception $e) {
            return Response::Error('Failed to delete order ' . $order['id']);
        }
    }
}
