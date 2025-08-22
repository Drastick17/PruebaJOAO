<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Client extends Model
{
    use HasApiTokens;
    
    protected $fillable = [
        'nombre',
        'email',
        'telefono',
    ];

}
