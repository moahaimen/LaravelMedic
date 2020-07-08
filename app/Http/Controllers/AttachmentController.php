<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\Attachment;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class AttachmentController extends Controller
{
    public function upload(Request $request)
    {
        $data = $request->validate([
            'type' => 'required|string|in:video,image',
            'image' => 'required_if:type,image|dimensions:ratio=3/2|mimes:jpeg,png',
            'video' => 'required_if:type,video|mimes:mp4'
        ]);

        $file = null;

        if ($data['type'] === 'video') {
            $file = $request->video;
            $data['type'] = Attachment::video;
        } else if ($data['type'] === 'image') {
            $file = $request->image;
            $data['type'] = Attachment::image;
        }

        $data['name'] = time() . '.' . $file->extension();
        $data['path'] = $data['type'] . '/' . $data['name'];
        $data['url'] = 'http://localhost:8000/api/attachments/download/' . $data['name'];

        $dir = storage_path('app') . '/' . $data['type'];

        if (!$file->move($dir, $data['name'])) {
            return Response::Error('Failed to save the attachment');
        }
        $attachment = Attachment::create($data);
        return Response::Ok($attachment, 'Attachment uploaded successfully');
    }

    public function download(string $name)
    {
        $attachment = Attachment::all()->where('name', '=', $name)->first();

        if ($attachment == null) {
            return Response::Error('Failed to download the attachment');
        }
        return Storage::download($attachment['path']);
    }
}
