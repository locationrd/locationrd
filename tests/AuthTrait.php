<?php

namespace Tests;

use App\User;

trait AuthTrait
{

    /**
     * iniciar session con usuario root
     */
    public function initResponseWithSessionRoot()
    {
        $user = User::find(1);
        $this->response = $this->actingAs($user);
    }

}