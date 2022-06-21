<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Request;

class UserController extends Controller
{

    public static function show(string $email)
    {
        return User::findWithEmail('email', $email);
    }
}
