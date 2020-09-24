<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    //
    protected $fillable = [
        'path','file_name','user_id'
    ];

    public function user(){
        return $this->hasOne('App\User');
    }
}
