<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\Exchange;
use Exception;
use Illuminate\Http\Request;

class ExchangeController extends Controller
{
    /**
     * Fetch a list of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request)
    {
        $exchanges = Exchange::query();

        $exchanges = $this->filter($exchanges, $request, Exchange::filterable);
        $exchanges = $exchanges->paginate();
        return Response::Ok($exchanges, 'Exchanges fetched successfully');
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
            'value' => 'required|numeric'
        ]);

        try {
            $data['changed_at'] = now();
            $exchange = Exchange::create($data);

            if ($exchange == null) {
                Response::Error('Failed to create new exchange');
            }
            return Response::Ok($exchange, 'Exchange resource created successfully');
        } catch (\Throwable $th) {
            Response::Error('Failed to create new exchange');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Exchange  $exchange
     * @return \Illuminate\Http\Response
     */
    public function delete(Exchange $exchange)
    {
        try {
            if (!$exchange->delete()) {
                throw new Exception('Failed to delete exchange ' . $exchange['id']);
            }
            return Response::Ok($exchange, 'Exchange ' . $exchange['id'] . ' removed successfully');
        } catch (\Throwable $th) {
            return Response::Error($th->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Exchange  $exchange
     * @return \Illuminate\Http\Response
     */
    public function latest()
    {
        try {
            $exchange = Exchange::query()->orderBy('changed_at', 'DESC')->first();
            return Response::Ok($exchange, 'Current exchange fetched successfully');
        } catch (\Throwable $th) {
            return Response::Error($th->getMessage());
        }
    }
}
