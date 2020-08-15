<?php

use App\Http\Controllers\NotificationController;
use App\Models\User;
use App\Notifications\PushOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
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

Route::prefix('/auth')->group(function () {

    Route::post('/register', 'AuthController@register');
    Route::post('/login', 'AuthController@login');
    Route::post('/resetPassword', 'AuthController@resetPassword');

    Route::middleware('auth:api')
        ->prefix('/me')
        ->group(function () {
            Route::get('/', 'AuthController@me');

            Route::get('/logout', 'AuthController@logout');

            Route::post('/fcmToken', 'UserFcmTokenController@add');

            Route::prefix('/orders')->group(function () {
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

    Route::get('/migrate', 'AttachmentController@migrate_attachments_urls');
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


Route::prefix('/orders')->group(function () {
    Route::post('/', 'OrderController@create');

    Route::middleware('auth:api')->get('/', 'OrderController@get');
    Route::middleware('auth:api')->put('/{order}', 'OrderController@update');
    Route::middleware('auth:api')->put('/{order}/status', 'OrderController@update_status');
    Route::middleware('auth:api')->delete('/{order}', 'OrderController@delete');
});

Route::prefix('/orders2')->group(function () {
    Route::get('/', 'OrderController@create2');
});

Route::prefix('/promocodes')->group(function () {

    Route::middleware('auth:api')->get('/', 'PromoCodeController@get');
    Route::middleware('auth:api')->post('/', 'PromoCodeController@create');
    Route::middleware('auth:api')->put('/{promoCode}', 'PromoCodeController@update');
    Route::middleware('auth:api')->delete('/{promoCode}', 'PromoCodeController@delete');
    Route::get('/{code}', 'PromoCodeController@check_status');
});

Route::prefix('/notifications')->group(function () {

    Route::middleware('auth:api')->post('/', 'NotificationController@push');
    Route::post('/test', 'NotificationController@test');
    Route::middleware('auth:api')->post('/resetFcmTokens', 'UserFcmTokenController@reset');
});

Route::prefix('/provinces')->group(function () {

    Route::get('/', 'ProvinceController@get');
    Route::middleware('auth:api')->post('/', 'ProvinceController@create');
    Route::middleware('auth:api')->put('/{province}', 'ProvinceController@update');
    Route::middleware('auth:api')->delete('/{province}', 'ProvinceController@delete');
});

Route::prefix('/contactUs')->group(function () {

    Route::get('/', 'ContactUsController@get');
    Route::middleware('auth:api')->post('/', 'ContactUsController@create');
    Route::middleware('auth:api')->put('/{contactUs}', 'ContactUsController@update');
    Route::middleware('auth:api')->delete('/{contactUs}', 'ContactUsController@delete');
});
