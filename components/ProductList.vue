<template>
  <div class="bg-[#D7E6F0]">
    <div class="pt-[24px] container pb-10">
      <div class="flex flex-col md:flex-row justify-between">
        <h1 class="text-14 lg:text-[24px] mb-2 lg:mb-[20px] font-semibold">
          Mulai Tryout Sekarang
        </h1>
        <select
          v-model="selected"
          class="w-full md:w-[275px] cursor-pointer xl:w-[268px] h-[43px] border-2 rounded-lg px-2"
        >
          <option hidden value="">Pilih kategori</option>
          <option value="All">All</option>
          <option value="Top Pick">Top Pick</option>
          <option value="Promo">Promo</option>
          <option value="SEKOLAH KEDINASAN">SEKOLAH KEDINASAN</option>
          <option value="CPNS">CPNS</option>
          <option value="PPPK">PPPK</option>
          <option value="BUMN">BUMN</option>
          <option value="POLRI">POLRI</option>
          <option value="TOEFL">TOEFL</option>
          <option value="PSIKOTES">PSIKOTES</option>
        </select>
      </div>
      <div
        v-if="filteredList.length"
        class="bg-[#D7E6F0] gap-5 py-5 grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:gap-[20px] md:grid-cols-3 lg:grid-cols-4 h-full"
      >
        <div
          v-for="category in filteredList.slice(0, showCount)"
          :key="category"
        >
          <div
            class="border-2 bg-white p-[12px] rounded-lg xl:w-[268px] flex flex-col justify-between h-full"
          >
            <div class="relative">
              <h1
                class="absolute font-semibold w-[118px] py-1 text-center text-[12px] rounded-br-xl"
                :class="
                  category.Tag === 'Trending Now'
                    ? 'border-r-2 border-b-2 bg-[#D1EFFF] text-[#249CD9] border-[#249CD9]'
                    : '' || category.Tag === 'Promo'
                    ? 'border-r-2 border-b-2 bg-[#FFE7D1] text-[#F78012] border-[#F78012]'
                    : '' || category.Tag === 'Top Pick'
                    ? 'border-r-2 border-b-2 bg-[#CBFFCD] text-[#0DBC16] border-[#0DBC16]'
                    : ''
                "
              >
                {{ category.Tag }}
              </h1>
              <h1 class="absolute right-2 top-1 text-[12px] xl:text-[14px]">
                {{ category.timePromo }}
              </h1>
              <img
                class="w-full h-auto rounded-lg border-2 border-[#D7E6F0]"
                :src="`${category.ImageURL}`"
                :alt="category.Name"
              />
            </div>
            <div>
              <h1 class="font-semibold text-[14px] mt-2">
                {{ category.Name }}
              </h1>
            </div>
            <div>
              <!-- <div
                class="flex md:grid md:grid-cols-2 gap-5 md:gap-0 overflow-hidden"
              >
                <div
                  class="flex gap-1 text-[11px] my-1"
                  v-for="type in category.types"
                  :key="type"
                >
                  <img :src="`${type.ImageURL}`" :alt="type.Name" />
                  <h1>{{ type.Name }}</h1>
                </div>
              </div> -->
              <div>
                <ShowModal :category="category" />
                <hr />
                <div class="flex justify-between my-3">
                  <p class="text-sm">Harga</p>
                  <p class="font-semibold">
                    Rp{{ formatPrice(category.Price) }}
                  </p>
                </div>
                <div class="my-1">
                  <button
                    @click="ToProductDetail(category)"
                    class="bg-[#249CD9] font-semibold text-center w-full h-[45px] lg:h-[40px] rounded-lg text-white"
                  >
                    Beli Paket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center py-3">
        <button
          v-if="showCount < productList.length"
          @click="showCount = productList.length"
          class="flex text-[#249CD9] font-semibold text-[12px] lg:text-[14px]"
        >
          Tampilkan paket lainnya
          <img
            class="w-[14px] lg:w-[20px] h-auto mx-1"
            src="/lulus-murni/category/chevron-up-line.png"
            alt=""
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showCount: 4,
      selected: "",
      productList: [],
      isShowModal: false,
    };
  },
  methods: {
    async getProductList() {
      try {
        const response = await axios.get("/api/productList");
        const data = response.data;
        if (data.success && data.data) {
          this.productList = data.data.data;
          // console.log("data product" + this.productList);
        } else {
          console.error("Gagal data product:", data.message);
        }
      } catch (err) {
        console.error("Gagal ambil data product:", err);
      } finally {
        this.loading = false;
      }
    },
    ToProductDetail(category) {
      const saved = {
        name: category.Name || "",
        image: category.ImageURL || "",
        price: category.Price || "",
        category: category.Category || "",
        description: category.Description || "",
        benefits: category.Benefits || [],
        DetailTest: category.DetailTest || "",
      };
      // console.log(saved.description);
      localStorage.setItem("selectedProductList", JSON.stringify(saved));
      this.$router.push(`/product-detail/${category.Category}`);
    },
    formatPrice(val) {
      return new Intl.NumberFormat("id-ID").format(val);
    },
  },
  async mounted() {
    await this.getProductList();
    if (this.$route.hash) {
      this.selected = this.$route.hash.replace("#", "").toUpperCase();
    }
  },
  watch: {
    "$route.hash"(newHash) {
      this.selected = newHash.replace("#", "").toUpperCase();
    },
  },
  computed: {
    filteredList() {
      if (this.selected === "" || this.selected === "All") {
        return this.productList;
      } else {
        return this.productList.filter(
          (item) => item.Category === this.selected || item.Tag === this.selected
        );
      }
    },
  },
};
</script>

<style></style>
