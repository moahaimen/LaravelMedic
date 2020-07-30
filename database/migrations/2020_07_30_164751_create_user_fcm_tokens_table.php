<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserFcmTokensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('fcm_token');
        });

        Schema::create('user_fcm_tokens', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->foreignId('user_id')->references('id')->on('users');
            $table->string('token');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_fcm_tokens');
    }
}
