<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddArabicFieldsToBrands extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('brands', function (Blueprint $table) {
            $table->renameColumn('name', 'en_name');
            $table->string('ar_name')->nullable(false)->default('');

            $table->renameColumn('description', 'en_description');
            $table->string('ar_description')->nullable(false)->default('');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('brands', function (Blueprint $table) {
            $table->renameColumn('en_name', 'name');
            $table->dropColumn('ar_name');

            $table->renameColumn('en_description', 'description');
            $table->dropColumn('ar_description');
        });
    }
}
