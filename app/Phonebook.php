<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Phonebook extends Model
{
    protected $hidden = [
        'create_at', 'update_at',
    ];
}
