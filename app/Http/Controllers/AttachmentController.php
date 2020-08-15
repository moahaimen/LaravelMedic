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
            // 'file' => 'required|dimensions:ratio=3/2|mimes:jpeg,png,mp4',
            'file' => 'required|mimes:jpeg,png,mp4',
        ]);

        $data['type'] = $data['type'] == 'video' ? Attachment::video : Attachment::image;
        $data['name'] = time() . '.' . $data['file']->extension();
        $data['path'] = $data['type'] . '/' . $data['name'];
        $data['url'] = 'https://molardentalmaterials.com/images/' . $data['name'];

        $dir = 'public_html'. '/' .'images' . '/' . $data['type'];

        if (!$data['file']->move($dir, $data['name'])) {
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

    public function migrate_attachments_urls()
    {
        $attachments = Attachment::all();

        foreach ($attachments as $i => $a) {
            $a->update(['url' => 'https://molardentalmaterials.com/images/' . $a['name']]);
        }
    }
}
