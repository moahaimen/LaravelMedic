<?php

namespace App\Services;

use App\Models\Exchange;

class ExchangeService extends Service
{
    public function latest(): Exchange
    {
        return Exchange::query()->orderBy('changed_at', 'DESC')->first();
    }
}
