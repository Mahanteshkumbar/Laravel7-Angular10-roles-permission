<?php

namespace App\Listeners;

use App\Events\EventExample;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\userLogs;

class ListenerExample
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  EventExample  $event
     * @return void
     */
    public function handle(EventExample $event)
    {
        //
        //dd($event);
        $user = userLogs::create([
            'message' => 'Logged in as user with mail id '.$event->user->email,
            'ip_address' => $_SERVER['REMOTE_ADDR'],
            'user_id' => $event->user->id
        ]);

        //return response()->json([$event]);
    }
}
