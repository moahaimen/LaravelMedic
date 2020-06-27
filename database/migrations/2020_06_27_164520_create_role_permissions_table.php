<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRolePermissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('role_permissions', function (Blueprint $table) {

            $table->foreignId('role_id')->nullable(false)->constrained('roles');
            $table->foreignId('permission_id')->nullable(false)->constrained('permissions');

            $table->primary(['role_id', 'permission_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (Schema::hasTable('role_permissions')) {
            Schema::table('role_permissions', function (Blueprint $table) {

                $table->dropForeign('role_permissions_role_id_foreign');
                $table->dropForeign('role_permissions_permission_id_foreign');
                $table->drop();
            });
        }
    }
}
