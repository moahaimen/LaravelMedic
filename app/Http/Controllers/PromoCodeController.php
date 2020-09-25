<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\PromoCode;
use Illuminate\Http\Request;

class PromoCodeController extends Controller
{
    private static function getRandomCode()
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $code = '';

        for ($i = 0; $i < 8; $i++) {
            $index = rand(0, strlen($characters) - 1);
            $code .= $characters[$index];
        }

        return $code;
    }

    /**
     * Fetch a list of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request)
    {
        $promoCodes = PromoCode::query();

        $promoCodes = $this->filter($promoCodes, $request, PromoCode::filterable);
        $promoCodes = $promoCodes->paginate(15);

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
            'discount' => 'required|numeric',
            'start_at' => 'required|date',
            'finish_at' => 'required|date'
        ]);
        $data['code'] = PromoCodeController::getRandomCode();
        try {
            $promoCode = PromoCode::create($data);

            if ($promoCode == null) {
                Response::Error('Failed to create new promoCode');
            }
            return Response::Ok($promoCode, 'Promo code resource created successfully');
        } catch (\Throwable $th) {
            Response::Error('Failed to create new promoCode');
        }
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
            'discount' => 'nullable|numeric',
            'start_at' => 'nullable|date',
            'finish_at' => 'nullable|date'
        ]);

        try {
            if ($promoCode['start_at'] < $data['start_at'] || $promoCode['finish_at'] < $data['finish_at']) {
                return Response::Error('Failed to update promo code\'s [dates are invalid]');
            }

            if (array_key_exists('type', $data) || array_key_exists('discount', $data) && $promoCode->hasOrders()) {
                return Response::Error('Failed to update promo code\'s after there it is used');
            }

            if (!$promoCode->update($data)) {
                return Response::Error('Failed to update promoCode ' . $promoCode['id']);
            }
            return Response::Ok($promoCode, 'PromoCode resource updated successfully');
        } catch (\Throwable $th) {
            return Response::Error('Failed to update promoCode ' . $promoCode['id']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PromoCode  $promoCode
     * @return \Illuminate\Http\Response
     */
    public function delete(PromoCode $promoCode)
    {
        try {
            if ($promoCode->hasOrders()) {
                return Response::Error('Failed to delete promo code\'s after there it is used');
            }

            if (!$promoCode->delete()) {
                return Response::Error('Failed to delete promoCode ' . $promoCode['id']);
            }
            return Response::Ok($promoCode, 'PromoCode ' . $promoCode['id'] . ' removed successfully');
        } catch (\Throwable $th) {
            return Response::Error('Failed to delete promoCode ' . $promoCode['id']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PromoCode  $promoCode
     * @return \Illuminate\Http\Response
     */
    public function check_status(string $code)
    {
        $promoCode = PromoCode::all()->firstWhere('code', '=', $code);
        if ($promoCode == null) {
            return Response::Error('Code does not match any of our records');
        }
        return Response::Ok($promoCode, 'PromoCode fetched successfully');
    }
}
