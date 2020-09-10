<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class LogoutController extends Controller
{
    //
    function logoutUser(Request $request){
        $request->validate([
            'user_id' => ['required']
        ]);

        // Revoke all tokens...
        //$user->tokens()->delete();
        // Revoke a specific token...
        try {
            //code...
            $user = User::find($request->user_id);
            $user->tokens()->delete();
            return response()->json(['message' => "Logged out Please come back again!!",'status' => 200]);
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()]);
        }        
    }
}
