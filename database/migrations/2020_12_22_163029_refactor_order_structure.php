<?php

use App\Models\ClientInformation;
use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\OrderStatus;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RefactorOrderStructure extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // 
        ClientInformation::query()->delete();
        OrderStatus::query()->delete();
        OrderProduct::query()->delete();
        Order::query()->delete();
        // 

        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('status_id');
            $table->dropColumn('client_id');

            $table->foreignId('user_id')->nullable()->constrained('users', 'id');
        });

        Schema::table('order_statuses', function (Blueprint $table) {
            $table->foreignId('order_id')->nullable(false)->constrained('orders', 'id');
        });

        Schema::table('client_information', function (Blueprint $table) {
            $table->foreignId('order_id')->nullable(false)->constrained('orders', 'id');
        });

        Schema::table('users', function (Blueprint $table) {
            
            $table->string('address')->nullable();
            $table->string('phone_number')->nullable();
            $table->foreignId('province_id')->nullable()->constrained('provinces', 'id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
