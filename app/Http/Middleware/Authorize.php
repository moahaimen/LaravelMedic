<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Exception;

class Authorize
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     *
     * @throws \Symfony\Component\HttpKernel\Exception\HttpException
     * @throws \Illuminate\Foundation\Http\Exceptions\MaintenanceModeException
     */
    public function handle($request, Closure $next, string $roleName)
    {
        $user = $request->user();

        if($user instanceof User) {
            
            $role = $user->role()->first();
            if ($role->name != $roleName) {
                throw new Exception('Unauthorized exception');
            }
        }
        return $next($request);
    }
}
