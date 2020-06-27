<?php

use App\Models\OrderStatus;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateOrderStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_statuses', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->enum('title', OrderStatus::values())->nullable(false)->default(OrderStatus::pending);

            $table->timestamp('changed_at')->nullable(false)->default(DB::raw('current_timestamp'));
            $table->foreignId('changed_by')->nullable(false)->constrained('users', 'id');
            $table->foreignId('previous_id')->nullable(true)->constrained('order_statuses');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (Schema::hasTable('order_statuses')) {
            Schema::table('order_statuses', function (Blueprint $table) {
                $table->dropForeign('order_statuses_changed_by_foreign');
                $table->dropForeign('order_statuses_previous_id_foreign');
                $table->drop();
            });
        }
    }
}
