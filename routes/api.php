<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('auth')->group(function () {

    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::post('resetPassword', 'AuthController@resetPassword');
    Route::post('logout', 'AuthController@logout')->middleware('auth:api');
    Route::get('me', 'AuthController@me')->middleware('auth:api');
});

Route::prefix('/brands')->group(function () {

    // fetch allowed to public
    Route::get('/', 'BrandController@get');

    // create, update and delete are allowed only for authenticated and authorized
    Route::middleware('auth:api')->post('/', 'BrandController@create');
    Route::middleware('auth:api')->put('/:id', 'BrandController@update');
    Route::middleware('auth:api')->delete('/:id', 'BrandController@delete');
});

Route::prefix('/categories')->group(function () {

    // fetch allowed to public
    Route::get('/', 'CategoryController@get');

    // create, update and delete are allowed only for authenticated and authorized
    Route::middleware('auth:api')->post('/', 'CategoryController@create');
    Route::middleware('auth:api')->put('/:id', 'CategoryController@update');
    Route::middleware('auth:api')->delete('/:id', 'CategoryController@delete');
});
