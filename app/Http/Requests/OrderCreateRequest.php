<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
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
            'client.name' => 'required|string|min:3',
            'client.phone' => 'required|string',
            'client.province_id' => 'required|numeric|exists:provinces,id',
            'client.address' => 'required|string|min:3',
            'client.notes' => 'nullable|string|min:3',
            'user_id' => 'nullable|numeric|exists:users,id',
            'promo_code' => 'nullable|string|exists:promo_codes,code',
        ];
    }
}
