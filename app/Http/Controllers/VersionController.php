<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\Version;
use Illuminate\Http\Request;

class VersionController extends Controller
{
    public function get()
    {
        try {
            $versions = Version::query()->get();
            return Response::Ok($versions, 'Versions fetched successfully');
        } catch (\Throwable $th) {
            return Response::Error($th->getMessage());
        }
    }


    public function create(Request $request)
    {
        $data = $request->validate([
            'version' => 'required|string',
            'message' => 'required|string'
        ]);

        try {
            $version = Version::create($data);
            return Response::Ok($version, 'Version created successfully');
        } catch (\Throwable $th) {
            return Response::Error($th->getMessage());
        }
    }

    public function latest()
    {
        try {
            return Response::Ok(
                Version::query()->orderBy('changed_at', 'DESC')->first(),
                'Version created successfully'
            );
        } catch (\Throwable $th) {
            return Response::Error($th->getMessage());
        }
    }
}