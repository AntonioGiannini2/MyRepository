<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class TestController extends Controller
{
    public static function routes() {
        Route::get('/pippo', [self::class, 'pippo']);
    }

    public function pippo(){
        echo 'Hello world!!';
    }
}
