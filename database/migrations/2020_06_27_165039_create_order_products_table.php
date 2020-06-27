<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_products', function (Blueprint $table) {
            $table->foreignId('order_id')->nullable(false)->constrained('orders');
            $table->foreignId('product_id')->nullable(false)->constrained('products');

            $table->primary(['order_id', 'product_id']);

            $table->decimal('quantity')->nullable(false);
            $table->foreignId('price_id')->nullable(false)->constrained('prices'); // product.price()
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (Schema::hasTable('order_products')) {
            Schema::table('order_products', function (Blueprint $table) {
                $table->dropForeign('order_products_order_id_foreign');
                $table->dropForeign('order_products_product_id_foreign');
                $table->dropForeign('order_products_price_id_foreign');
                $table->drop();
            });
        }
    }
}
