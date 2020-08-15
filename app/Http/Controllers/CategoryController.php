<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Fetch a list of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get()
    {
        $categories = Category::all();

        return Response::Ok($categories, 'Categoryies list fetched successfully');
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
            'en_name' => 'required|string|min:3|unique:categories,en_name',
            'ar_name' => 'required|string|min:3|unique:categories,ar_name',
            'en_description' => 'required|string|min:3',
            'ar_description' => 'required|string|min:3',
            'icon' => 'required|string',
        ]);

        try {
            $category = Category::create($data);

            if ($category == null) {
                Response::Error('Failed to create new category');
            }
            return Response::Ok($category, 'Category resource created successfully');
        } catch (\Throwable $th) {
            Response::Error('Failed to create new category');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $data = $request->validate([
            'en_name' => 'nullable|string|min:3|unique:categories,en_name,' . $category['id'],
            'ar_name' => 'nullable|string|min:3|unique:categories,ar_name,' . $category['id'],
            'en_description' => 'nullable|string|min:3',
            'ar_description' => 'nullable|string|min:3',
            'icon' => 'nullable|string',
        ]);

        try {
            if (!$category->update($data)) {
                return Response::Error('Failed to update category ' . $category['id']);
            }
            return Response::Ok($category, 'Category resource updated successfully');
        } catch (\Throwable $th) {
            return Response::Error('Failed to update category ' . $category['id']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function delete(Category $category)
    {
        try {
            if (!$category->delete()) {
                return Response::Error('Failed to delete category ' . $category['id']);
            }
            return Response::Ok($category, 'Category ' . $category['id'] . ' removed successfully');
        } catch (\Throwable $th) {
            return Response::Error('Failed to delete category ' . $category['id']);
        }
    }
}
