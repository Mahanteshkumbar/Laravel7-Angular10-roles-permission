<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class userLogs extends Model
{
    //
    protected $fillable = ['message','ip_address','user_id'];

    public function user(){
        return $this->belongsTo('App\User');
    }
}
