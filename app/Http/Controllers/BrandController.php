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
        $brands = Brand::with('attachment')->get();

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
        $data = $request->validate([
            'en_name' => 'required|min:3|unique:brands,en_name',
            'en_description' => 'required|min:3',
            'ar_name' => 'required|min:3|unique:brands,ar_name',
            'ar_description' => 'required|min:3',
            'attachment_id' => 'required|exists:attachments,id'
        ]);

        try {
            $brand = Brand::create($data);

            if ($brand == null) {
                Response::Error('Failed to create new brand');
            }
            return Response::Ok($brand, 'Brand resource created successfully');
        } catch (\Throwable $th) {
            Response::Error('Failed to create new brand');
        }
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
        $data = $request->validate([
            'en_name' => 'nullable|min:3|unique:brands,en_name,' . $brand['id'],
            'en_description' => 'nullable|min:3',
            'ar_name' => 'nullable|min:3|unique:brands,ar_name,' . $brand['id'],
            'ar_description' => 'nullable|min:3',
            'attachment_id' => 'nullable|exists:attachments,id'
        ]);

        try {
            if (!$brand->update($data)) {
                return Response::Error('Failed to update brand ' . $brand['id']);
            }
            return Response::Ok($brand, 'Brand resource updated successfully');
        } catch (\Throwable $th) {
            return Response::Error('Failed to update brand ' . $brand['id']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Brand  $brand
     * @return \Illuminate\Http\Response
     */
    public function delete(Brand $brand)
    {
        try {
            // 1- Delete the attachment
            $attachment = $brand->attachment();
            // 2- Delete entity's record
            if (!$brand->delete()) {
                return Response::Error('Failed to delete brand ' . $brand['id']);
            }
            if (!$attachment->delete()) {
                return Response::Error('Failed to delete brand ' . $brand['id']);
            }

            return Response::Ok($brand, 'Brand ' . $brand['id'] . ' removed successfully');
        } catch (\Throwable $th) {
            return Response::Error('Failed to delete brand ' . $brand['id']);
        }
    }
}
