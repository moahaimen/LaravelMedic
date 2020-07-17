<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    protected $fillable = [
        'name',  'description'
    ];

    public function roles()
    {
        return $this->belongsToMany(Role::class, RolePermission::class, 'permission_id');
    }

    public function delete_roles()
    {
        return RolePermission::all()->where('permission_id', '=', $this->id)->delete();
    }
}
