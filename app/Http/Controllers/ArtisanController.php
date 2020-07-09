<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Input;
use Symfony\Component\Console\Output\BufferedOutput;

class ArtisanController extends Controller
{
    function command(Request $request)
    {
        $output = new BufferedOutput;

        $q = request()->input('q');

        $exitCode = Artisan::call($q, array(), $output);
        return '<h1>' . $q . ' - ' . $exitCode . '</h1><p>' . $output->fetch() . '</p>';
    }

    function migrate()
    {
        $exitCode = Artisan::call('migrate:fresh --seed');
        return '<h1> migrate:fresh --seed ' . $exitCode . '</h1>';
    }

    function clear_cache()
    {
        $exitCode = Artisan::call('cache:clear');
        return '<h1>Cache facade value cleared</h1>';
    }

    //Reoptimized class loader:
    function optimize()
    {
        $exitCode = Artisan::call('optimize');
        return '<h1>Reoptimized class loader</h1>';
    }

    //Route cache:
    function route_cache()
    {
        $exitCode = Artisan::call('route:cache');
        return '<h1>Routes cached</h1>';
    }

    //Clear Route cache:
    function route_clear()
    {
        $exitCode = Artisan::call('route:clear');
        return '<h1>Route cache cleared</h1>';
    }

    //Clear View cache:
    function view_clear()
    {
        $exitCode = Artisan::call('view:clear');
        return '<h1>View cache cleared</h1>';
    }

    //Clear Config cache:
    function config_cache()
    {
        $exitCode = Artisan::call('config:cache');
        return '<h1>Clear Config cleared</h1>';
    }
}
