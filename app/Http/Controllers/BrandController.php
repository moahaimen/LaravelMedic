<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\Brand;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    /**
     * Fetch a list of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get()
    {
        $brands = Brand::all();

        return Response::Ok($brands, 'Brands list fetched successfully');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required|min:3|unique',
            // 'description' => '', 
            'attachment_id' => 'required|exists:attachments'
        ]);

        $brand = Brand::create($request->all());

        if ($brand == null) {
            Response::Error('Failed to create new brand');
        }
        return Response::Ok($brand, 'Brand resource created successfully');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Brand  $brand
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Brand $brand)
    {
        $request->validate([
            'name' => 'nullable|min:3|unique,',
            'attachment_id' => 'nullable|exists:attachments'
        ]);

        $brand->update($request->all());

        if ($brand == null) {
            Response::Error('Failed to update brand ' + $brand['id']);
        }
        return Response::Ok($brand, 'Brand resource updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Brand  $brand
     * @return \Illuminate\Http\Response
     */
    public function delete(Brand $brand)
    {
        if (!$brand->delete()) {
            return Response::Error('Failed to delete brand ' + $brand['id']);
        }
        return Response::Ok($brand, 'Brand ' + $brand['id'] + ' removed successfully');
    }
}
