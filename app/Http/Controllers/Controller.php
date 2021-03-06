<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    protected function filter(Builder $builder, Request $request, array $fields): Builder
    {
        try {
            foreach ($fields as $i => $field) {
                $q = $request->input(str_replace('.', '_', $field));
                $queries = explode('.', $field);

                if (count($queries) == 2) {
                    $relation = $queries[0];
                    $column = $queries[1];

                    $builder = $builder->whereHas($relation, function ($query) use ($column, $q) {
                        return $query->where($column, 'ILIKE', "%{$q}%");
                    });

                } else {
                    $builder = $builder->where($field, 'ILIKE', "%{$q}%");
                }
            }
        } catch (\Exception $e) {
            throw $e;
        }
        return $builder;
    }
}
