<template>
  <div class="relative">
    <div
      class="hidden md:block md:h-[180px] lg:h-[200px] xl:h-[270px] bg-cover overflow-hidden"
      style="
        background-image: url('/lulus-murni/lulus-murni/payment-method/background-desktop.png');
      "
    >
      <div class="bg-[#01699E] h-[270px] bg-opacity-80">
        <div class="container">
             <div class="text-center py-[30px] lg:py-[35px] xl:py-[50px] px-[42px] text-white">
          <h1 class="font-semibold text-[18px] lg:text-[20px] xl:text-[22px] mb-[6px]">Metode Pembayaran</h1>
          <p class="text-[14px] xl:text-[16px]">
            Berikut ini metode pembayaran yang dapat kamu gunakan.
          </p>
        </div>
        </div>
      </div>
    </div>
    <div
      class="w-full md:hidden bg-cover"
      style="
        background-image: url('/lulus-murni/lulus-murni/payment-method/background-mobile.png');
      "
    >
      <div class="bg-[#01699E] h-[154px] bg-opacity-80 relative">
        <div class="text-center py-[40px] px-[42px] text-white">
          <h1 class="font-semibold text-[14px] mb-[4px]">Metode Pembayaran</h1>
          <p class="text-[12px]">
            Berikut ini metode pembayaran yang dapat kamu gunakan.
          </p>
        </div>
      </div>
    </div>
    <div class="bg-[#01699E] md:bg-white mb-[204px] md:mb-[30px] h-[104px] bg-opacity-80">
      <div
        class="absolute md:top-[110px] lg:top-[130px] xl:top-[180px] flex flex-wrap gap-[10px] lg:gap-[14px] shadow-md justify-center mx-[20px] md:mx-[40px] lg:mx-[100px] xl:mx-[250px] px-[7px] lg:px-[20px] py-5 rounded-lg bg-white"
        
      >
        <div v-for="image in images" :key="image" class="">
          <img class="w-[80px] md:w-[100px] lg:w-[110px] xl:w-[120px]" :src="`/lulus-murni${image}`" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/lulus-murni/payment-method/qris.png",
        "/lulus-murni/payment-method/dana.png",
        "/lulus-murni/payment-method/ovo.png",
        "/lulus-murni/payment-method/gopay.png",
        "/lulus-murni/payment-method/shopepay.png",
        "/lulus-murni/payment-method/linkaja.png",
        "/lulus-murni/payment-method/bri.png",
        "/lulus-murni/payment-method/bca.png",
        "/lulus-murni/payment-method/bni.png",
        "/lulus-murni/payment-method/mandiri.png",
      ],
    };
  },
};
</script>

<style></style>
