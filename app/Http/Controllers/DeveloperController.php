<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\Order;
use App\Models\Price;
use App\Models\Product;
use App\Models\Province;
use App\Services\ExchangeService;
use App\Services\PriceService;
use Exception;
use Illuminate\Http\Request;

class DeveloperController extends Controller
{
    protected $exchange;
    protected $price;

    public function __construct(ExchangeService $exchange, PriceService $price)
    {
        $this->exchange = $exchange;
        $this->price = $price;
    }

    public function index(Request $request, string $name)
    {
        try {
            $password = $request->input('password');

            if ($password != 'mhd-nazeer-allahham') {
                throw new Exception('You are not authorized to access this method');
            }
            $result = $this->$name();
            return Response::Ok($result, 'Developer\'s function executed successfully');
        } catch (\Exception $e) {
            throw $e;
        }
    }

    private function refreshProductsData(): void
    {
        $latest = $this->exchange->latest();
        $products = Product::query()->with('price', 'price.previous')->get();

        foreach ($products as $product) {
            if ($product instanceof Product) {
                $data = [
                    // 'previous_id' => $product->price->id,
                    'previous_id' => null,
                    'exchange_id' => $latest->id,
                    'value' => $product->price->value / $latest->value,
                    'updated_at' => now(),
                    // 'is_discount' => $product->price->is_discount
                    'is_discount' => false
                ];
                $next = Price::create($data);
                $product->price_id = $next->id;
                $product->save();
            }
        }
    }

    private function refreshProvincesData(): void
    {
        $latest = $this->exchange->latest();
        $provinces = Province::query()->get();

        foreach ($provinces as $province) {
            if ($province instanceof Province) {
                $province->fees = $province->fees / $latest->value;
                $province->save();
            }
        }
    }
    
    private function getOrders()
    {
        return Order::all();
    }
}
