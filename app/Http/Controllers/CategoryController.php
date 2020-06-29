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

        return Response::Ok($categories, 'Categories list fetched successfully');
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
        ]);

        $category = Category::create($request->all());

        if ($category == null) {
            Response::Error('Failed to create new category');
        }
        return Response::Ok($category, 'Category resource created successfully');
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
        $request->validate([
            'name' => 'nullable|min:3|unique,',
        ]);

        $category->update($request->all());

        if ($category == null) {
            Response::Error('Failed to update category ' + $category['id']);
        }
        return Response::Ok($category, 'Category resource updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function delete(Category $category)
    {
        if (!$category->delete()) {
            return Response::Error('Failed to delete category ' + $category['id']);
        }
        return Response::Ok($category, 'Category ' + $category['id'] + ' removed successfully');
    }
}
