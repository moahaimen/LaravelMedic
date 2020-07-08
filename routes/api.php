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

Route::prefix('/auth')->group(function () {

    Route::post('/register', 'AuthController@register');
    Route::post('/login', 'AuthController@login');
    Route::post('/resetPassword', 'AuthController@resetPassword');
    Route::post('/logout', 'AuthController@logout')->middleware('auth:api');

    Route::middleware('auth:api')
        ->prefix('/me')
        ->group(function () {
            Route::get('/', 'AuthController@me');

            Route::prefix('/orders')->group(function() {
                Route::get('/', 'OrderController@get');
                Route::post('/', 'OrderController@create');
                Route::put('/{order}', 'OrderController@update');
            });
        });
});

Route::middleware('auth:api')->prefix('/users')->group(function () {
    Route::get('/', 'UserController@get');
    Route::post('/', 'UserController@create');
    Route::put('/{user}', 'UserController@update');
    Route::delete('/{user}', 'UserController@delete');
});

Route::prefix('/roles')->group(function () {

    // fetch allowed to public
    Route::get('/', 'RoleController@get');

    // create, update and delete are allowed only for authenticated and authorized
    Route::middleware('auth:api')->post('/', 'RoleController@create');

    Route::prefix('/{role}')
        ->middleware('auth:api')
        ->group(function () {

            Route::put('/', 'RoleController@update');
            Route::delete('/', 'RoleController@delete');

            Route::prefix('/permissions')->group(function () {
                Route::get('/', 'RolePermissionController@fetch');
                Route::put('/', 'RolePermissionController@assign');
            });
        });
});

Route::prefix('/permissions')->group(function () {

    // fetch allowed to public
    Route::get('/', 'PermissionController@get');

    // create, update and delete are allowed only for authenticated and authorized
    Route::middleware('auth:api')->post('/', 'PermissionController@create');
    Route::middleware('auth:api')->put('/{permission}', 'PermissionController@update');
    Route::middleware('auth:api')->delete('/{permission}', 'PermissionController@delete');
});


Route::prefix('/attachments')->group(function () {

    Route::get('/download/{name}', 'AttachmentController@download');
    Route::middleware('auth:api')->post('/upload', 'AttachmentController@upload');
});

Route::prefix('/brands')->group(function () {

    // fetch allowed to public
    Route::get('/', 'BrandController@get');

    // create, update and delete are allowed only for authenticated and authorized
    Route::middleware('auth:api')->post('/', 'BrandController@create');
    Route::middleware('auth:api')->put('/{brand}', 'BrandController@update');
    Route::middleware('auth:api')->delete('/{brand}', 'BrandController@delete');
});

Route::prefix('/categories')->group(function () {

    // fetch allowed to public
    Route::get('/', 'CategoryController@get');

    // create, update and delete are allowed only for authenticated and authorized
    Route::middleware('auth:api')->post('/', 'CategoryController@create');
    Route::middleware('auth:api')->put('/{category}', 'CategoryController@update');
    Route::middleware('auth:api')->delete('/{category}', 'CategoryController@delete');
});

Route::prefix('/products')->group(function () {

    // fetch allowed to public
    Route::get('/', 'ProductController@get');

    // create, update and delete are allowed only for authenticated and authorized
    Route::middleware('auth:api')->post('/', 'ProductController@create');
    Route::middleware('auth:api')->put('/{product}', 'ProductController@update');
    Route::middleware('auth:api')->delete('/{product}', 'ProductController@delete');
});

Route::middleware('auth:api')->prefix('/orders')->group(function () {

    Route::get('/', 'OrderController@get');
    Route::post('/', 'OrderController@create');
    Route::put('/{order}', 'OrderController@update');
    Route::put('/{order}/status', 'OrderController@update_status');
    // Route::delete('/{order}', 'OrderController@delete');
});

Route::middleware('auth:api')->prefix('/promocodes')->group(function () {

    Route::get('/', 'PromoCodeController@get');
    Route::post('/', 'PromoCodeController@create');
    Route::put('/{promoCode}', 'PromoCodeController@update');
    Route::delete('/{promoCode}', 'PromoCodeController@delete');
});
