<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\Province;
use Illuminate\Http\Request;

class ProvinceController extends Controller
{
    /**
     * Fetch a list of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request)
    {
        $size = $request->input('all') == true ? -1 : 15;

        $provinces = Province::query();

        $provinces = $this->filter($provinces, $request, Province::filterable);
        $provinces = $provinces->paginate($size);
        return Response::Ok($provinces, 'Provinces list fetched successfully');
    }

    /**
     * Fetch a list of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getProvinces(Request $request)
    {
        $provinces = Province::query();

        $provinces = $this->filter($provinces, $request, Province::filterable);
        $provinces = $provinces->paginate($provinces->count());
        return Response::Ok($provinces, 'Provinces list fetched successfully');
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
            'en_name' => 'required|string|min:3|unique:provinces,en_name',
            'ar_name' => 'required|string|min:3|unique:provinces,ar_name',
            'fees' => 'required|numeric|min:0',
        ]);

        try {
            $province = Province::create($data);

            if ($province == null) {
                Response::Error('Failed to create new province');
            }
            return Response::Ok($province, 'Province resource created successfully');
        } catch (\Exception $e) {
            // throw $e;
            Response::Error('Failed to create new province');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Province  $province
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Province $province)
    {
        $data = $request->validate([
            'en_name' => 'nullable|string|min:3|unique:provinces,en_name,' . $province['id'],
            'ar_name' => 'nullable|string|min:3|unique:provinces,ar_name,' . $province['id'],
            'fees' => 'nullable|numeric|min:0',
        ]);

        try {
            if (!$province->update($data)) {
                return Response::Error('Failed to update province ' . $province['id']);
            }

            return Response::Ok($province, 'Province resource updated successfully');
        } catch (\Exception $e) {
            return Response::Error('Failed to update province' . $province['id']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Province  $province
     * @return \Illuminate\Http\Response
     */
    public function delete(Province $province)
    {
        // 1- Delete the entity
        if (!$province->delete()) {
            return Response::Error('Failed to delete province ' . $province['id']);
        }
        return Response::Ok($province, 'Province ' . $province['id'] . ' removed successfully');
    }
}
