<template>
  <div class="container">
    <div class="flex mb-[16px] md:mb-[30px]">
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
        :to="`/product-list/${categories.category}`"
        >Product List </nuxt-link
      ><span class="mx-1 mb-1">></span>
      <nuxt-link
        class="flex text-[12px] mt-1"
        :to="`/product-detail/${categories.category}`"
        >Product Detail
      </nuxt-link>
      <span class="mx-1 mb-1">></span>
      <nuxt-link
        class="flex text-[12px] mt-1 text-[#F78012]"
        to="/product-detail"
        >Checkout
      </nuxt-link>
    </div>
    <div
      class="md:grid grid-cols-2 shadow-lg border-t-2 md:py-[24px] rounded-lg mb-[22px] lg:mb-[99px] md:mx-[70px]"
    >
      <div
        class="flex-col max-md:mb-[20px] border-b max-md:m-[12px] md:border-b-0 md:border-r-2 md:px-[24px] flex gap-[10px]"
      >
        <div>
          <h1 class="font-bold text-[14px] lg:text-[16px] mb-[12px]">
            Detail Pesanan
          </h1>
        </div>
        <div
          class="flex gap-[10px] lg:gap-[20px] md:p-[10px] md:rounded-lg md:mr-[5px] lg:mr-[14px] md:border-2"
        >
          <div>
            <img
              class="w-[120px] lg:w-[200px]"
              :src="`${categories.image}`"
              alt=""
            />
          </div>
          <div class="mb-[20px] md:mb-0">
            <h1
              class="mr-20 text-center text-[12px] md:text-[11px] text-[#249CD9] bg-[#DCF3FF] font-medium border rounded-full py-1 md:mb-[15px] mb-[11px]"
            >
              ORD123457891011
            </h1>
            <h1
              class="text-[12px] font-medium mb-[4px] md:mb-[8px] md:text-[14px]"
            >
              {{ categories.name }}
            </h1>
            <div class="mb-[4px] md:mb-[12px]">
              <h1 class="font-semibold text-[14px] lg:text-[16px]">
                Rp{{ formatPrice(categories.price || 0) }}
                /
                <span class="font-normal text-[10px] lg:text-[14px]"
                  >1 Paket {{ categories.name }}
                </span>
              </h1>
            </div>
            <div class="" v-if="types.length">
              <h1 class="text-[#F78012] text-[11px] lg:text-[12px]">
                Add-Ons:
              </h1>
              <ul class="list-disc ml-5">
                <li
                  class="mb-1 text-[11px] lg:text-[12px]"
                  v-for="addon in types"
                  :key="addon.AddOn"
                >
                  <div class="flex justify-between">
                    <h1 class="text-[11px] lg:text-[12px]">
                      {{ addon.AddOn }}
                    </h1>
                    <h1 class="text-[11px] lg:text-[12px]">
                      Rp{{ formatPrice(addon.Price) }}
                    </h1>
                  </div>
                </li>
              </ul>
            </div>
            <h1 class="text-[#F78012] text-[11px] lg:text-[12px]" v-else>
              Add-Ons: <span class="font-semibold text-black">-</span>
            </h1>
          </div>
        </div>
      </div>
      <div class="max-md:mt-[20px] md:mx-[16px] lg:mx-[22px] max-md:m-[12px]">
        <div class="flex flex-col justify-between">
          <h1 class="text-[14px] mb-[12px] lg:text-[16px] font-bold">
            Detail Pemesan
          </h1>
          <div class="mb-[12px] md:mb-[20px]">
            <h1 class="text-[12px] lg:text-[14px] mb-[8px]">Nama Lengkap</h1>
            <input
              class="border w-full text-[14px] rounded-lg py-1.5 pl-2 my-2"
              type="text"
              v-model="form.username"
              name="name"
              placeholder="Masukkan Nama Lengkap"
            />
          </div>
          <div class="mb-[12px] md:mb-[20px]">
            <h1 class="text-[12px] lg:text-[14px] mb-[8px]">Email</h1>
            <input
              class="border w-full text-[14px] rounded-lg py-1.5 pl-2 my-2"
              type="email"
              v-model="form.email"
              name="email"
              placeholder="Masukkan Email Kamu"
            />
          </div>
          <div class="mb-[12px] md:mb-[20px]">
            <h1 class="text-[12px] lg:text-[14px] mb-[8px]">No. Handphone</h1>
            <input
              class="border w-full text-[14px] rounded-lg py-1.5 pl-2 my-2"
              type="number"
              v-model="form.phone"
              name="number"
              placeholder="Masukkan Nomor Handphone Kamu"
            />
          </div>
          <div>
            <button
              class="text-white font-semibold text-[14px] lg:text-[14px] w-full bg-[#249CD9] py-2 text-center mb-[12px] rounded-lg"
            >
              Lanjutkan Pembayaran
            </button>
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
      form: {
        username: "",
        email: "",
        phone: "",
      },
      categories: {
        name: "Paket Simulasi Premium All-in TOEFL ITP",
        image: "/lulus-murni/product-list/toefl.png",
        category: "TOEFL",
        price: 59.0,
      },
      pack: [
        // { number: 1, name: "Paket Tryout", title: "Unlimited 1 tahun" },
        // { number: 2, name: "Paket Tryout", title: "Unlimited 1 tahun" },
      ],
      types: [],
    };
  },
  methods: {
    formatPrice(val) {
      return new Intl.NumberFormat("id-ID").format(val);
    },
  },
  computed: {
    totalPrice() {
      if (!this.product || !this.selectedPack) return 0;
      const basePrice = this.categories.price * (this.selectedPack.number || 1);
      const addonsPrice = this.selectedType.reduce(
        (price, item) => price + item.price,
        0
      );
      return basePrice + addonsPrice;
    },
  },
  mounted() {
    const saved = localStorage.getItem("selectedCheckoutPage");
    if (saved) {
      const data = JSON.parse(saved);
      this.categories.name = data.name;
      this.categories.price = data.price;
      this.categories.image = data.image;
      this.categories.category = data.category;
      this.types = data.addOns;

      console.log(data.addOns);
    } else {
      console.error("Paket tidak ditemukan.");
    }
  },
};
</script>
