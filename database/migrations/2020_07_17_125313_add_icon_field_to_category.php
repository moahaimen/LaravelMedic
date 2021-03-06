<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIconFieldToCategory extends Migration
{
    public function up()
    {
        Schema::table('categories', function (Blueprint $table) {
            // Code is encoded in Hex (Material Icons)
            // But we sotre it in int decimal 10-base 
            $table->integer('icon')->nullable(false)->default(58270);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('categories', function (Blueprint $table) {
            $table->dropColumn('icon');
        });
    }
}
