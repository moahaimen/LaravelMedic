<?php

use App\Models\UserStatus;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateUserStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_statuses', function (Blueprint $table) {
            $table->id();
            $table->enum('title', UserStatus::values())
                ->nullable(false)
                ->default(UserStatus::active);
            $table->timestamp('changed_at')
                ->nullable(false)
                ->default(DB::raw('current_timestamp'));
            $table->string('changed_by')
                ->nullable(false)
                ->default("<system>");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_statuses');
    }
}
