<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Passport extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('oauth_access_tokens', function (Blueprint $table) {
            $table->string('id')->nullable(false);
            $table->bigInteger('user_id')->nullable(false)->index();
            $table->bigInteger('client_id')->nullable(false);

            $table->string('name')->nullable();
            $table->text('scopes')->nullable();
            $table->boolean('revoked')->nullable(false);

            $table->timestamp('created_at', 0);
            $table->timestamp('updated_at', 0);
            $table->timestamp('expires_at', 0);
        });

        Schema::create('oauth_auth_codes', function (Blueprint $table) {
            $table->string('id')->nullable(false);
            $table->bigInteger('user_id')->nullable(false)->index();
            $table->bigInteger('client_id')->nullable(false);

            $table->text('scopes')->nullable();
            $table->boolean('revoked')->nullable(false);

            $table->timestamp('expires_at', 0);
        });

        Schema::create('oauth_clients', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->nullable();

            $table->string('name')->nullable(false);
            $table->string('secret')->nullable();
            $table->string('provider')->nullable();
            $table->text('redirect')->nullable(false);
            $table->boolean('personal_access_client')->nullable(false);
            $table->boolean('password_client')->nullable(false);
            $table->boolean('revoked')->nullable(false);

            $table->timestamp('created_at', 0);
            $table->timestamp('updated_at', 0);
        });

        Schema::create('oauth_personal_access_clients', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('client_id')->nullable(false);

            $table->timestamp('created_at', 0);
            $table->timestamp('updated_at', 0);
        });

        Schema::create('oauth_refresh_tokens', function (Blueprint $table) {
            $table->string('id')->nullable(false);
            $table->string('access_token_id')->nullable(false);

            $table->boolean('revoked')->nullable(false);
            $table->timestamp('updated_at', 0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('oauth_access_tokens');
        Schema::dropIfExists('oauth_auth_codes');
        Schema::dropIfExists('oauth_clients');
        Schema::dropIfExists('oauth_personal_access_clients');
        Schema::dropIfExists('oauth_refresh_tokens');
    }
}
