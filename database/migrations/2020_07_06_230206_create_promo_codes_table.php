<?php

use App\Models\PromoCode;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreatePromoCodesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('promo_codes', function (Blueprint $table) {
            $table->id();

            $table->string('code')->nullable(false);
            $table->enum('type', PromoCode::discountTypes())->nullable(false);
            $table->unsignedDecimal('discount')->nullable(false);
            $table->timestamps();
            $table->timestamp('start_at')->nullable(false)->default(DB::raw('current_timestamp'));
            $table->timestamp('finish_at')->nullable(false)->default(DB::raw('current_timestamp'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('promo_codes');
    }
}
