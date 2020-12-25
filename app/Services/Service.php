<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

abstract class Service
{
    protected function filter(Builder $builder, Request $request, array $fields): Builder
    {
        try {
            foreach ($fields as $field) {
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
