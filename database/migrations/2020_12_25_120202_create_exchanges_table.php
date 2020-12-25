<?php

use App\Models\Exchange;
use App\Models\OrderProduct;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateExchangesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exchanges', function (Blueprint $table) {
            $table->id();

            $table->integer('value')->nullable(false);
            $table->timestamp('changed_at', 0)->nullable(false);
        });

        $exchange = new Exchange;
        $exchange->value = 1460;
        $exchange->changed_at = now();
        $exchange->save();

        Schema::table('orders', function (Blueprint $table) {
            $table->foreignId('exchange_id')->nullable(true)->constrained('exchanges', 'id');
        });
        DB::statement('UPDATE public.orders SET exchange_id = ' . $exchange->id . ' WHERE true;');
        DB::statement('ALTER TABLE public.orders ALTER COLUMN exchange_id SET NOT NULL;');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('ALTER TABLE public.orders ALTER COLUMN exchange_id DROP NOT NULL;');
        DB::statement('UPDATE public.orders DROP COLUMN exchange_id;');

        Schema::dropIfExists('exchanges');
    }
}
