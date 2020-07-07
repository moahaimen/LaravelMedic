<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\PromoCode;
use Illuminate\Http\Request;

class PromoCodeController extends Controller
{
    /**
     * Fetch a list of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get()
    {
        $promoCodes = PromoCode::all();

        return Response::Ok($promoCodes, 'Promo codes list fetched successfully');
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
            'type' => 'required|numeric|min:0|max:1', 
            'discount'=> 'required|numeric', 
            'start_at' => 'required|date', 
            'finish_at' => 'required|date'
        ]);

        $promoCode = PromoCode::create($data);

        if ($promoCode == null) {
            Response::Error('Failed to create new promoCode');
        }
        return Response::Ok($promoCode, 'Promo code resource created successfully');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PromoCode  $promoCode
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PromoCode $promoCode)
    {
        $data = $request->validate([
            'type' => 'nullable|numeric|min:0|max:1', 
            'discount'=> 'nullable|numeric', 
            'start_at' => 'nullable|date', 
            'finish_at' => 'nullable|date'
        ]);

        if($promoCode['start_at'] < $data['start_at'] || $promoCode['finish_at'] < $data['finish_at']) {
            return Response::Error('Failed to update promo code\'s [dates are invalid]');
        }
        
        if(array_key_exists('type', $data) || array_key_exists('discount', $data) && $promoCode->hasOrders()) {
            return Response::Error('Failed to update promo code\'s after there it is used');
        }

        if (!$promoCode->update($data)) {
            return Response::Error('Failed to update promoCode ' . $promoCode['id']);
        }
        return Response::Ok($promoCode, 'PromoCode resource updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PromoCode  $promoCode
     * @return \Illuminate\Http\Response
     */
    public function delete(PromoCode $promoCode)
    {
        if (!$promoCode->delete()) {
            return Response::Error('Failed to delete promoCode ' . $promoCode['id']);
        }
        return Response::Ok($promoCode, 'PromoCode ' . $promoCode['id'] . ' removed successfully');
    }
}
