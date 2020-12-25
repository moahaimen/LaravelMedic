<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderUpdateRequest extends FormRequest
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
        ];
    }
}
