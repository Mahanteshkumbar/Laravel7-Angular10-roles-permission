<?php

namespace App\Providers\App\Listeners;

use App\Events\EventExample;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

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
    }
}
