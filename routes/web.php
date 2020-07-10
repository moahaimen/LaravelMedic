<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/command', 'ArtisanController@command');
Route::get('/migrate', 'ArtisanController@migrate');
Route::get('/clear-cache', 'ArtisanController@clear_cache');
Route::get('/optimize', 'ArtisanController@optimize');
Route::get('/route-cache', 'ArtisanController@route_cache');
Route::get('/route-clear', 'ArtisanController@route_clear');
Route::get('/view-clear', 'ArtisanController@view_clear');
Route::get('/config-cache', 'ArtisanController@config_cache');

Route::fallback('IndexController@index');
