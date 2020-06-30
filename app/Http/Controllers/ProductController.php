<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\Price;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Fetch a list of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get()
    {
        $products = Product::all();

        return Response::Ok($products, 'Products list fetched successfully');
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
            'name' => 'required|string|min:3|unique:products,name',
            'brand_id' => 'required|numeric|exists:brands,id',
            'category_id' => 'required|numeric|exists:categories,id',
            'is_main' => 'required|boolean',
            'price' => 'required|numeric'
        ]);
        $data['price_id'] = Price::make($data['price'])['id'];

        $product = Product::create($data);

        if ($product == null) {
            Response::Error('Failed to create new product');
        }
        return Response::Ok($product, 'Product resource created successfully');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            'name' => 'nullable|string|min:3|unique:products,name',
            'brand_id' => 'nullable|numeric|exists:brands,id',
            'category_id' => 'nullable|numeric|exists:categories,id',
            'is_main' => 'nullable|boolean',
            'price' => 'nullable|numeric'
        ]);

        if (array_key_exists('price', $data)) {
            $data['price_id'] = Price::make($data['price'], $product->price())['id'];
        }

        if (!$product->update($data)) {

            return Response::Error('Failed to update product ' . $product['id']);
        }
        return Response::Ok($product, 'Product resource updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function delete(Product $product)
    {
        if (!$product->delete()) {
            return Response::Error('Failed to delete product ' . $product['id']);
        }
        return Response::Ok($product, 'Product ' . $product['id'] . ' removed successfully');
    }
}
