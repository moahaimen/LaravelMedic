<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderCreateForUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'products' => 'required|array|min:1',
            'products.*.quantity' => 'required|numeric|min:1',
            'products.*.product_id' => 'required|numeric|exists:products,id',
            'client.name' => 'nullable|string|min:3',
            'client.phone' => 'nullable|string',
            'client.province_id' => 'nullable|numeric|exists:provinces,id',
            'client.address' => 'nullable|string|min:3',
            'client.notes' => 'nullable|string|min:3',
            'promo_code' => 'nullable|string|exists:promo_codes,code'
        ];
    }
}
