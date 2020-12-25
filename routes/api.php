<?php

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
        });
});

Route::middleware(array('auth:api', 'authorize:administrator'))->prefix('/users')->group(function () {
    Route::get('/', 'UserController@get');
    Route::post('/', 'UserController@create');
    Route::put('/{user}', 'UserController@update');
    Route::delete('/{user}', 'UserController@delete');
});

Route::middleware(array('auth:api', 'authorize:administrator'))->prefix('/roles')->group(function () {

    Route::get('/', 'RoleController@get');
    Route::post('/', 'RoleController@create');

    Route::prefix('/{role}')->group(function () {

        Route::put('/', 'RoleController@update');
        Route::delete('/', 'RoleController@delete');

        Route::prefix('/permissions')->group(function () {
            Route::get('/', 'RolePermissionController@fetch');
            Route::put('/', 'RolePermissionController@assign');
        });
    });
});

Route::middleware(array('auth:api', 'authorize:administrator'))->prefix('/permissions')->group(function () {

    Route::get('/', 'PermissionController@get');
    Route::post('/', 'PermissionController@create');
    Route::put('/{permission}', 'PermissionController@update');
    Route::delete('/{permission}', 'PermissionController@delete');
});


Route::prefix('/attachments')->group(function () {

    Route::get('/download/{name}', 'AttachmentController@download');
    Route::middleware('auth:api')->post('/upload', 'AttachmentController@upload');
});

Route::prefix('/brands')->group(function () {

    // fetch allowed to public
    Route::get('/', 'BrandController@get');

    // create, update and delete are allowed only for authenticated and authorized
    Route::middleware(array('auth:api', 'authorize:administrator'))->group(function () {
        Route::post('/', 'BrandController@create');
        Route::put('/{brand}', 'BrandController@update');
        Route::delete('/{brand}', 'BrandController@delete');
    });
});

Route::prefix('/categories')->group(function () {

    // fetch allowed to public
    Route::get('/', 'CategoryController@get');

    // create, update and delete are allowed only for authenticated and authorized
    Route::middleware(array('auth:api', 'authorize:administrator'))->group(function () {
        Route::post('/', 'CategoryController@create');
        Route::put('/{category}', 'CategoryController@update');
        Route::delete('/{category}', 'CategoryController@delete');
    });
});

Route::prefix('/products')->group(function () {

    // fetch allowed to public
    Route::get('/', 'ProductController@get');
    Route::get('/cart', 'ProductController@getCartProducts');

    // create, update and delete are allowed only for authenticated and authorized
    Route::middleware(array('auth:api', 'authorize:administrator'))->group(function () {
        Route::post('/', 'ProductController@create');
        Route::put('/{product}', 'ProductController@update');
        Route::delete('/{product}', 'ProductController@delete');
    });
});


Route::prefix('/orders')->group(function () {

    Route::middleware(array('auth:api', 'authorize:administrator'))->group(function () {
        Route::post('/', 'OrderController@create');

        Route::get('/', 'OrderController@get');
        Route::put('/{order}', 'OrderController@update');
        Route::put('/{order}/status', 'OrderController@update_status');
        Route::delete('/{order}', 'OrderController@delete');
    });

    Route::middleware(array('auth:api', 'authorize:client'))
        ->prefix('/me')
        ->group(function () {

            Route::get('/', 'OrderController@getUserOrders');
            Route::post('/', 'OrderController@createUserOrder');
        });
});

Route::prefix('/promocodes')->group(function () {

    Route::middleware('auth:api')->get('/', 'PromoCodeController@get');
    Route::middleware('auth:api')->post('/', 'PromoCodeController@create');
    Route::middleware('auth:api')->put('/{promoCode}', 'PromoCodeController@update');
    Route::middleware('auth:api')->delete('/{promoCode}', 'PromoCodeController@delete');
    Route::get('/{code}', 'PromoCodeController@check_status');
});

Route::middleware(array('auth:api', 'authorize:administrator'))
    ->prefix('/notifications')
    ->group(function () {

        Route::post('/', 'NotificationController@push');
        Route::post('/{username}', 'NotificationController@push_to_user');
        Route::post('/test', 'NotificationController@test');
        Route::post('/resetFcmTokens', 'UserFcmTokenController@reset');
    });

Route::prefix('/provinces')->group(function () {

    Route::get('/', 'ProvinceController@get');

    Route::middleware(array('auth:api', 'authorize:administrator'))->group(function () {
        Route::post('/', 'ProvinceController@create');
        Route::put('/{province}', 'ProvinceController@update');
        Route::delete('/{province}', 'ProvinceController@delete');
    });
});

Route::middleware(array('auth:api', 'authorize:administrator'))
    ->prefix('/exchange')
    ->group(function () {

        Route::get('/', 'ExchangeController@get');
        Route::post('/', 'ExchangeController@create');
        Route::delete('/{exchange}', 'ExchangeController@delete');
    });

Route::prefix('/contactUs')->group(function () {

    Route::get('/', 'ContactUsController@get');

    Route::middleware(array('auth:api', 'authorize:administrator'))->group(function () {
        Route::post('/', 'ContactUsController@create');
        Route::put('/{contactUs}', 'ContactUsController@update');
        Route::delete('/{contactUs}', 'ContactUsController@delete');
    });
});
