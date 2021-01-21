<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
            'first_name' => 'nullable|string|min:3',
            'last_name' => 'nullable|string|min:3',
            'province_id' => 'nullable|numeric|exists:provinces,id',
            'address' => 'nullable|string',
            'phone_number' => 'nullable|string',
        ];
    }
}
