<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    public const filterable = ['name', 'description'];

    protected $fillable = [
        'name',  'description'
    ];


    public function permissions()
    {
        return $this->belongsToMany(Permission::class, RolePermission::class, 'role_id');
    }

    public function delete_permissions()
    {
        return RolePermission::where('role_id', '=', $this->id)->delete();
    }
}
