<?php

namespace App\Http;

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
        return response()->json(null, 400, [
            'Message' => $message
        ]);
    }

    public static function UnAuthenticated(string $message = 'Un authenticated request.'): HttpResponse
    {
        return response()->json(null, 401, [
            'Message' => $message
        ]);
    }

    public static function UnAuthorized(string $message = 'Un authorized to operate this request.'): HttpResponse
    {
        return response()->json(null, 403, [
            'Message' => $message
        ]);
    }
}
