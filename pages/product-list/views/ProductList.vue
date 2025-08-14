<template>
  <div class="bg-[#ffffff]">
    <div class="pt-[24px] container">
      <div class="">
        <div class="flex">
          <nuxt-link class="flex" to="/">
            <img
              class="w-[18px] h-auto"
              src="/lulus-murni/product-list/home.svg"
              alt=""
            />
            <span class="mx-1 mb-1">></span>
          </nuxt-link>
          <nuxt-link
            class="flex text-[12px] mt-1 text-[#F78012]"
            to="/product-list"
            >Product List
          </nuxt-link>
        </div>
        <div class="flex flex-col md:flex-row justify-between mt-[16px]">
          <div class="flex md:flex-col gap-3 mb-[8px] md:mb-0 md:gap-0">
            <h1 class="text-14 md:text-[18px] lg:text-[24px] font-semibold">
              Daftar Product
            </h1>
            <h1 class="text-[#7B8C95] text-[14px] md:text-[16px]">
              {{ filteredList.length }} Paket Tersedia
            </h1>
          </div>
          <div
            class="flex flex-col md:flex-row gap-2 md:gap-[14px] lg:gap-[20px] md:mt-[8px]"
          >
            <select
              v-model="selected"
              @change="searchProduct"
              class="w-full text-sm cursor-pointer md:text-base md:w-[275px] xl:w-[268px] h-[40px] md:h-[43px] border-2 rounded-lg px-2"
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
              <option value="RETAIL">RETAIL</option>
            </select>
            <div class="flex gap-[12px] mb-[10px] h-[40px] md:h-[43px]">
              <input
                v-model="searchQuery"
                @keyup.enter="searchProduct"
                class="rounded-lg border w-full lg:w-[265px] px-3"
                placeholder="Cari paket yang sesuai"
                type="text"
              />
              <button
                @click="searchProduct"
                class="bg-[#249CD9] w-[48px] md:w-[55px] lg:w-[64px] rounded-lg"
              >
                <img
                  class="mx-auto"
                  src="/lulus-murni/product-list/search.svg"
                  alt="search"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="filteredList.length"
        class="gap-5 py-5 mb-[108px] grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:gap-[20px] md:grid-cols-3 lg:grid-cols-4 h-full"
      >
        <div v-for="category in filteredList" :key="category">
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
              <h1 class="font-semibold text-[14px] mt-3">
                {{ category.Name }}
              </h1>
            </div>
            <div>
              <div>
                <ShowModal :category="category" />
                <hr />
                <div class="flex justify-between my-2">
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
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selected: "",
      selectedByName: "",
      searchQuery: "",
      productList: [],
      filteredList: [],
      isShowModal: false,
      loading: true,
    };
  },
  methods: {
    async getProductList() {
      try {
        const { data } = await axios.get("/api/productList");
        if (data.success && data.data) {
          this.productList = data.data.data;
          this.filteredList = this.productList;
        } else {
          console.error("Gagal data product:", data.message);
        }
      } catch (err) {
        console.error("Gagal ambil data product:", err);
      } finally {
        this.loading = false;
      }
    },

    searchProduct() {
      const keyword = this.searchQuery.toLowerCase();
      this.filteredList = this.productList.filter((item) => {
        const matchCategory =
          this.selected === "All" ||
          this.selected === "" ||
          item.Category === this.selected ||
          item.Tag === this.selected
        const matchKeyword = item.Name.toLowerCase().includes(keyword);
        return matchCategory && matchKeyword;
      });
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
      localStorage.setItem("selectedProductList", JSON.stringify(saved));
      this.$router.push(`/product-detail/${category.Category}`);
    },

    setCategory(category) {
      this.selected = category;
      this.searchProduct();
      this.scrollToSelect();
    },

    handleHash(hash) {
      const cleanHash = hash.replace("#", "").toUpperCase();
      if (cleanHash) {
        this.selected = cleanHash;
        this.searchProduct();
      }
    },

    scrollToSelect() {
      this.$nextTick(() => {
        const selectEl = this.$el.querySelector("select");
        if (selectEl) {
          const yOffset = -window.innerHeight / 2 + 80; // Turunin sedikit
          const y =
            selectEl.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      });
    },

    formatPrice(val) {
      return new Intl.NumberFormat("id-ID").format(val);
    },
  },

  async mounted() {
    await this.getProductList();

    const name = localStorage.getItem("selectedName");
    if (name) {
      const data = JSON.parse(name);
      this.selectedByName = data.name || data.tag
      this.selected = data.name || data.tag
      this.searchProduct();
    }

    if (this.$route.hash) {
      this.handleHash(this.$route.hash);
      this.scrollToSelect();
    }
  },

  watch: {
    "$route.hash"(newHash) {
      this.handleHash(newHash);
      this.scrollToSelect();
    },
  },
};
</script>

<style></style>
