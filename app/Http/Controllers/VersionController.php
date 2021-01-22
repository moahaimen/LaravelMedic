<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\Version;
use Illuminate\Http\Request;

class VersionController extends Controller
{
    public function get(Request $request)
    {
        $versions = Version::query();

        $versions = $this->filter($versions, $request, Version::filterable);
        $versions = $versions->paginate();
        return Response::Ok($versions, 'Versions fetched successfully');
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
                Version::query()->orderBy('updated_at', 'DESC')->first(),
                'Version created successfully'
            );
        } catch (\Throwable $th) {
            return Response::Error($th->getMessage());
        }
    }
}
