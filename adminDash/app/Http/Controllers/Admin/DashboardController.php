<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\User;
use App\Profile;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json(['data' => 'Logged in as:- ',
                                 'role' => Auth::user()->getRoleNames(),
                                 'logs' => Auth::user()->userlog()->paginate(2),
                                 'profile' => Auth::user()->profile,
                                 'user' => Auth::user()->name
                                ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'image' => ['required','mimes:jpg,png,JPEG,jpeg']
        ]);
      
        if ($request->hasFile('image')){
            try {
                //code...
                $filename = date('His').'-'.$request->file('image')->getClientOriginalName();
                $path = $request->file('image')
                        ->storeAs('public\profile',$filename);
            
                Profile::updateOrCreate(['user_id' => Auth::user()->id],['path' => $path,'file_name' => $filename,'user_id' => Auth::user()->id]);
                
                return response()->json(["message" => "Image Uploaded Succesfully","file name" => $filename,"path" => $path]);
            } catch (\Exception $e) {
                abort(response()->json(["message" => $e->getMessage(), $e->getCode()]));
            }            
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
