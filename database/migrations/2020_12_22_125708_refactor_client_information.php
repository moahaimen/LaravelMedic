<?php

use App\Models\ClientInformation;
use App\Models\Order;
use App\Models\Province;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class RefactorClientInformation extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('client_information', function (Blueprint $table) {
            $table->foreignId('province_id')->nullable()->constrained('provinces', 'id');
        });

        $clients = ClientInformation::query()->get();

        foreach ($clients as $i => $client) {
            $province = Province::query()
                ->where('en_name', '=', $client->province)
                ->orWhere('ar_name', '=', $client->province)
                ->first();

            if ($province == null) {
                $orders = Order::query()->where('client_id', '=', $client->id)->get();

                foreach ($orders as $j => $order) {
                    if (!$order->delete_products()) {
                        throw new Exception('Failed to delete order ' . $order['id'] . ' (1)');
                    }

                    if (!$order->delete()) {
                        throw new Exception('Failed to delete order ' . $order['id'] . ' (2)');
                    }
                }
                $client->delete();
            } else {
                $client->province = $province->id;
                $client->save();
            }
        }


        Schema::table('client_information', function (Blueprint $table) {
            $table->dropColumn('province');
            DB::statement('ALTER TABLE public.client_information ALTER COLUMN province_id SET NOT NULL;');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('client_information', function (Blueprint $table) {
            $table->dropColumn('province_id');
        });
    }
}
