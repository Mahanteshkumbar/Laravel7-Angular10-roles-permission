<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\User;

class LoginController extends Controller
{
    //
    function loginUser(Request $request){
        $request->validate([
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'string', 'min:4'],
        ]);

        try{
    
        $user = User::where('email', $request->email)->first();
    
        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        //send token to the register user
        $token = $user->createToken('Laravel-Sanctum')->plainTextToken;
            
        return response()->json([
            'status_code' => 200,
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => $user,
            'role' => $user->getRoleNames()
            ]);
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()]);
        }       

    }    
}
