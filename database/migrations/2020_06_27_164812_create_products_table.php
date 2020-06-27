<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name')->nullable(false)->unique();

            $table->foreignId('brand_id')->nullable(false)->constrained('brands');
            $table->foreignId('category_id')->nullable(false)->constrained('categories');
            $table->foreignId('price_id')->nullable(false)->constrained('prices');

            $table->boolean('is_main')->nullable(false)->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (Schema::hasTable('products')) {
            Schema::table('products', function (Blueprint $table) {
                $table->dropForeign('products_brand_id_foreign');
                $table->dropForeign('products_category_id_foreign');
                $table->dropForeign('products_price_id_foreign');
                $table->drop();
            });
        }
    }
}
