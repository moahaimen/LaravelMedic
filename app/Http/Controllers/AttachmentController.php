<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\Attachment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AttachmentController extends Controller
{
    public function upload(Request $request)
    {
        $file = $request->file('file');

        $type = Attachment::typeFromMimeType($file->getMimeType());
        $path = $file->store($type);

        $attachment = Attachment::create([
            'type' => $type,
            'url' => '/api/attachments/download/filename=' . $path,
            'path' => 'files/' . $path,
            'code' => ''
        ]);

        return Response::Ok($attachment, 'Attachment uploaded successfully');
    }

    public function download(Attachment $attachment)
    {
        // return Storage::download($attachment['path']);
        return Storage::download('files/6WrsYihc6MHnlyKfOGZyMsh2IUqQY2y300EpCFyv.png');
    }
}
