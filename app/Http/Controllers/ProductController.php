<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\Price;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Fetch a list of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request)
    {
        $products = Product::with(['brand', 'category', 'price', 'price.previous', 'attachments']);

        foreach (Product::filterable as $i => $field) {
            $q = $request->input($field);

            if($q != null)
            {
                $products = $products->where($field, 'LIKE', "%{$q}%");
            }
        }
        $products = $products->paginate(15);
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
            'en_name' => 'required|string|min:3|unique:products,en_name',
            'ar_name' => 'required|string|min:3|unique:products,ar_name',
            'en_description' => 'required|max:750',
            'ar_description' => 'required|max:750',
            'brand_id' => 'required|numeric|exists:brands,id',
            'category_id' => 'required|numeric|exists:categories,id',
            'available' => 'required|boolean',
            'is_main' => 'required|boolean',
            'price' => 'required|numeric|min:1',
            // 'price_is_discount' => 'required_with:price|boolean',
            'attachments' => 'required|array|min:1|max:4',
            'attachments.*' => 'required|numeric|exists:attachments,id',
        ]);

        // dd($data);

        try {
            $data['price_id'] = Price::make($data['price'], false)['id'];

            $product = Product::create($data);
            $product->set_attachments($data['attachments']);

            if ($product == null) {
                Response::Error('Failed to create new product');
            }
            return Response::Ok($product, 'Product resource created successfully');
        } catch (\Exception $e) {
            // throw $e;
            Response::Error('Failed to create new product');
        }
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
            'en_name' => 'nullable|string|min:3|unique:products,en_name,' . $product['id'],
            'ar_name' => 'nullable|string|min:3|unique:products,ar_name,' . $product['id'],
            'en_description' => 'nullable|string|min:3',
            'ar_description' => 'nullable|string|min:3',
            'brand_id' => 'nullable|numeric|exists:brands,id',
            'category_id' => 'nullable|numeric|exists:categories,id',
            'available' => 'nullable|boolean',
            'is_main' => 'nullable|boolean',
            'price' => 'nullable|numeric|min:1',
            'price_is_discount' => 'required_with:price|boolean',
            'attachments' => 'nullable|array|min:1|max:4',
            'attachments.*' => 'nullable|numeric|exists:attachments,id',
        ]);

        try {
            if (array_key_exists('attachments', $data)) {
                $product->set_attachments($data['attachments']);
            }

            $price = $product->price()->get()->first();
            if ($price instanceof Price && array_key_exists('price', $data)) {
                if ($price['value'] != $data['price']) {
                    $data['price_id'] = Price::make($data['price'], $data['price_is_discount'], $price)['id'];
                } else if (array_key_exists('price_is_discount', $data) && $price->previous()->get()->first() instanceof Price) {
                    $price->update(['is_discount' => $data['price_is_discount']]);
                } else return Response::Error("To mark price as Discount you must change it first");
            }

            if (!$product->update($data)) {
                return Response::Error('Failed to update product ' . $product['id']);
            }
            return Response::Ok($product, 'Product resource updated successfully');
        } catch (\Exception $e) {
            // throw $e;
            return Response::Error('Failed to update product xx ' . $product['id']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function delete(Product $product)
    {
        try {
            // 1- Delete attachments related to
            $product->delete_attachments();
            // 2- Delete the entity
            if (!$product->delete()) {
                return Response::Error('Failed to delete product ' . $product['id']);
            }
            return Response::Ok($product, 'Product ' . $product['id'] . ' removed successfully');
        } catch (\Throwable $th) {
            // throw $th
            return Response::Error('Failed to delete product ' . $product['id'] . ', Product already ordered and cannot be removed');
        }
    }
}
