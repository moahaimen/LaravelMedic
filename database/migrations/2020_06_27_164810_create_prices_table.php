<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreatePricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prices', function (Blueprint $table) {
            $table->id();
            $table->decimal('value')->nullable(false);
            $table->timestamp('updated_at')->nullable(false)->default(DB::raw('current_timestamp'));

            $table->foreignId('previous_id')->nullable(true)->constrained('prices');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (Schema::hasTable('prices')) {
            Schema::table('prices', function (Blueprint $table) {
                $table->dropForeign('prices_previous_id_foreign');
                $table->drop();
            });
        }
    }
}
