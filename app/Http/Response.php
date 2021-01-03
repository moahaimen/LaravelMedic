<?php

namespace App\Http;

use Exception;
use Illuminate\Http\JsonResponse as HttpResponse;

class Response
{
    /**
     * Make response object
     *
     * @param  mixed $result
     * @param  string $message
     *
     * @return HttpResponse
     */
    public static function Ok($result, string $message = 'Done.'): HttpResponse
    {
        return response()->json($result, 200, [
            'Message' => $message
        ]);
    }

    public static function Error(string $message = 'Failed.'): HttpResponse
    {
        $arr = [];
        return response()->json($arr, 400, [
            'Message' => $message
        ]);
    }

    public static function InternalServerError(Exception $e): HttpResponse
    {
        $data = [
            'exception' => clone($e)
        ];
        $headers = [
            'Message' => $e->getMessage()
        ];
        return response()->json($data, 400, $headers);
    }

    public static function UnAuthenticated(string $message = 'Un authenticated request.'): HttpResponse
    {
        $arr = [];
        return response()->json($arr, 401, [
            'Message' => $message
        ]);
    }

    public static function UnAuthorized(string $message = 'Un authorized to operate this request.'): HttpResponse
    {
        $arr = [];
        return response()->json($arr, 403, [
            'Message' => $message
        ]);
    }
}
