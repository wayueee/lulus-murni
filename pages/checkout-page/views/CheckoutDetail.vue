<template>
  <div class="container">
    <div class="flex mb-[16px]">
      <nuxt-link class="flex" to="/">
        <img
          class="w-[18px] h-auto"
          src="/lulus-murni/product-list/home.svg"
          alt=""
        />
        <span class="mx-1 mb-1">></span>
      </nuxt-link>
      <nuxt-link
        class="flex text-[12px] mt-1"
        :to="`/product-list/${product.search}`"
        >Product List </nuxt-link
      ><span class="mx-1 mb-1">></span>
      <nuxt-link
        class="flex text-[12px] mt-1"
        :to="`/product-detail/${product.search}`"
        >Product Detail
      </nuxt-link>
      <span class="mx-1 mb-1">></span>
      <nuxt-link
        class="flex text-[12px] mt-1 text-[#F78012]"
        to="/product-detail"
        >Checkout
      </nuxt-link>
    </div>
    <div class="md:grid grid-cols-2 shadow-md p-[10px] rounded-lg mb-[22px]" v-if="product">
        <div class=" flex-col border-b-2 md:border-b-0 md:border-r-2 md:p-[12px]  flex gap-[10px]">
            <div>
                <h1 class="font-bold text-[14px] lg:text-[16px] mb-[8px]">Detail Pesanan</h1>
            </div>
            <div class="flex gap-[10px] lg:gap-[20px] md:p-[10px] md:rounded-lg md:mr-[5px] lg:mr-[14px] md:border-2">
                <div>
              <img
                class="w-[120px] lg:w-[200px]"
                :src="`/lulus-murni/${product.image}`"
                alt=""
              />
            </div>
            <div class="mb-[20px] md:mb-0">
              <h1
                class=" mr-10 text-center text-[12px] lg:text-[14px] text-[#249CD9] bg-[#DCF3FF] font-medium border rounded-full py-1 mb-[4px]"
              >
                ORD123457891011
              </h1>
              <h1 class="text-[12px] font-medium mb-[4px] md:text-[14px] lg:text-[16px]">{{ product.name }}</h1>
              <div v-if="selectedPack" class="mb-[4px]">
                <h1 class="font-semibold text-[14px] lg:text-[16px]">
                  Rp{{ (product.price * selectedPack.number || 1).toFixed(3) }} /
                  <span class="font-normal text-[10px] lg:text-[14px]"
                    >{{ selectedPack.number }} Paket Unlimited 1 Tahun</span
                  >
                </h1>
              </div>
              <div class="" v-if="selectedType.length">
                  <h1 class="text-[#F78012] text-[11px] lg:text-[14px]">Add-Ons:</h1>
                  <ul class="list-disc ml-5">
                  <li  class="mb-1 text-[11px] lg:text-[14px]" v-for="addon in selectedType" :key="addon.name">
                    <div class="flex justify-between">
                        <h1>{{ addon.name }}</h1> 
                        <h1>Rp{{ addon.price.toFixed(3) }}</h1>
                    </div>
                  </li>
                </ul>
              </div>
              <h1 class="text-[#F78012] text-[11px]" v-else>Add-Ons: <span class="font-semibold text-black">-</span></h1>
            </div>
            </div>
    </div>
    <div class="mt-[20px] md:mx-[16px] lg:mx-[22px]">
        <div class="flex flex-col justify-between">
            <h1 class="text-[14px] mb-[8px] lg:text-[16px] font-bold">Detail Pemesan</h1>
            <div>
                <h1 class="text-[12px] lg:text-[16px] ">Nama Lengkap</h1>
                <input class="border w-full text-[14px] rounded-lg py-1.5 pl-2 my-2" type="text" name="name" placeholder="Masukkan Nama Lengkap">
            </div>
            <div>
                <h1 class="text-[12px] lg:text-[16px] ">Email</h1>
                <input class="border w-full text-[14px] rounded-lg py-1.5 pl-2 my-2" type="email" name="email" placeholder="Masukkan Email Kamu">
            </div>
            <div>
                <h1 class="text-[12px] lg:text-[16px] ">No. Handphone</h1>
                <input class="border w-full text-[14px] rounded-lg py-1.5 pl-2 my-2" type="number" name="number" placeholder="Masukkan Nomor Handphone Kamu">
            </div>
            <div>
                <button class="text-white font-semibold text-[14px] lg:text-[16px] w-full bg-[#249CD9] py-2 text-center my-[8px] rounded-lg">Lanjutkan Pembayaran</button>
            </div>
        </div>
    </div>
    
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedPack: null,
      selectedType: [],
      categories: [
        {
          name: "Paket Simulasi Premium All-in TOEFL ITP",
          image: "/lulus-murni/product-list/toefl.png",
          search: "TOEFL",
          price: 59.0,
          pack: [
            { number: 1, name: "Paket Tryout", title: "Unlimited 1 tahun" },
            { number: 2, name: "Paket Tryout", title: "Unlimited 1 tahun" },
          ],
          types: [
            { name: "Retry", price: 50.0 },
            { name: "Pembahasan", price: 50.0 },
          ],
        },
        {
          name: "Paket Simulasi Premium All-in SEKDIN",
          image: "/lulus-murni/product-list/sekdin.png",
          search: "SEKDIN",
          price: 59.0,
          pack: [
            { number: 1, name: "Paket Tryout", title: "Unlimited 1 tahun" },
          ],
          types: [{ name: "PDF Soal + Jawaban", price: 50.0 }],
        },
      ],
    };
  },
  computed: {
    product() {
      const search = this.$route.params.search;
      return this.categories.find((item) => item.search === search) || null;
    },
    totalPrice() {
      if (!this.product || !this.selectedPack) return 0;
      const basePrice = this.product.price * (this.selectedPack.number || 1);
      const addonsPrice = this.selectedType.reduce(
        (price, item) => price + item.price,
        0
      );
      return basePrice + addonsPrice;
    },
  },
  mounted() {
    const routeData = this.$route.query.data;

    if (routeData) {
      try {
        const parsed = JSON.parse(decodeURIComponent(routeData));
        this.selectedPack = parsed.pack || null;
        this.selectedType = parsed.addons || [];
      } catch (err) {
        console.error("Gagal parsing data:", err);
      }
    } else {
      console.warn("Query data tidak ditemukan");
    }
  },
};
</script>
