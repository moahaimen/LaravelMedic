<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    public const filterable = ['name',  'description'];

    protected $fillable = [
        'name',  'description'
    ];

    public function roles()
    {
        return $this->belongsToMany(Role::class, RolePermission::class, 'permission_id');
    }

    public function delete_roles()
    {
        return RolePermission::where('permission_id', '=', $this->id)->delete();
    }
}
