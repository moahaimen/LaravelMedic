<?php

namespace App\Http\Controllers;

use App\Http\Response;
use App\Models\ContactUs;
use Illuminate\Http\Request;

class ContactUsController extends Controller
{
/**
     * Fetch a list of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get()
    {
        $c = ContactUs::all();
        return Response::Ok($c, 'ContactUs list fetched successfully');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $data = $request->validate([
            'en_value' => 'required|string|min:3',
            'ar_value' => 'required|string|min:3',
            'section' => 'required|string|min:3',
            'key' => 'required|string|min:3',
            'url' => 'nullable|string',
        ]);

        try {
            $c = ContactUs::create($data);

            if ($c == null) {
                Response::Error('Failed to create new contactUs');
            }
            return Response::Ok($c, 'ContactUs resource created successfully');
        } catch (\Exception $e) {
            // throw $e;
            Response::Error('Failed to create new contactUs');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ContactUs  $c
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ContactUs $c)
    {
        $data = $request->validate([
            'section' => 'nullable|string|min:3',
            'key' => 'nullable|string|min:3',
            'en_value' => 'nullable|string|min:3',
            'ar_value' => 'nullable|string|min:3',
            'url' => 'nullable|string',
        ]);

        try {
            if (!$c->update($data)) {
                return Response::Error('Failed to update contactUs ' . $c['id']);
            }
            return Response::Ok($c, 'ContactUs resource updated successfully');
        } catch (\Exception $e) {
            // throw $e;
            return Response::Error('Failed to update contactUs ' . $c['id']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ContactUs  $c
     * @return \Illuminate\Http\Response
     */
    public function delete(ContactUs $c)
    {
        try {
            // 1- Delete the entity
            if (!ContactUs::where('id', '=', $c['id'])->delete()) {
                return Response::Error('Failed to delete contactUs ' . $c['id']);
            }
            return Response::Ok($c, 'ContactUs ' . $c['id'] . ' removed successfully');
        }
        catch(\Exception $e) {
            throw $e;
        }
    }
}
