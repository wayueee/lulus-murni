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
        :to="`/product-list/${categories.category}`"
        >Product List </nuxt-link
      ><span class="mx-1 mb-1">></span>
      <nuxt-link
        class="flex text-[12px] mt-1 text-[#F78012]"
        to="/product-detail"
        >Product Detail
      </nuxt-link>
    </div>
    <div v-if="categories">
      <div class="mb-[20px]">
        <img
          class="w-full h-full md:h-[500px] lg:h-[550px] rounded-lg bg-cover mb-[12px] mt-[20px]"
          :src="`${categories.image}`"
          alt=""
        />
      </div>
      <!-- All-VIew -->
      <div class="lg:grid lg:grid-cols-3">
        <div class="col-span-2 xl:mr-10">
          <h2 class="font-semibold text-[14px] py-[4px]">
            {{ categories.name }}
          </h2>
          <div class="flex gap-[8px] text-[14px]">
            <p class="text-[#0683C2] text-[14px] lg:text-[16px] font-semibold">
              Rp{{ formatPrice(categories.price || 0) }}
            </p>
            <div class="relative">
              <img
                class="absolute bottom-2"
                src="/lulus-murni/product-detail/vector.svg"
                alt=""
              />
              <span
                class="text-[#5F6C73] text-[12px] lg:text-[14px] font-medium"
                >Rp299.000</span
              >
            </div>
          </div>
          <hr class="mt-[8px]" />
          <h1 class="my-[8px] text-[12px] lg:text-[12px] font-medium">
            Pilih Paket
          </h1>
          <div v-if="product.length" class="flex flex-wrap gap-[12px]">
            <div
              class="flex flex-wrap"
              v-for="(pack, index) in product"
              :key="index"
            >
              <button
                class="after:border-[#F78012] hover:border-[#F78012] rounded-lg border p-[8px] text-[11px] hover:font-medium"
                :class="{
                  'font-medium border-[#F78012] text-[11px] lg:text-[12px]':
                    categories.name === pack.Name,
                }"
                @click="selectedChange(pack)"
              >
                <h4 class="text-[11px] lg:text-[12px]">{{ pack.Name }}</h4>
                <span class="text-[11px] lg:text-[12px]"
                  >Rp{{ formatPrice(pack.Price) }}</span
                >
              </button>
            </div>
          </div>
          <h1 class="text-[12px] lg:text-[12px] mt-[24px] font-medium mb-[8px]">
            Add-ons
          </h1>
          <div class="grid grid-cols-2 md:flex gap-[8px] mb-[36px]">
            <div
              class="md:pr-[8px] flex relative"
              v-for="(type, index) in addOns"
              :key="index"
            >
              <div class="mr-[8px]">
                <button
                  class="flex gap-[4px] text-[12px] lg:text-[12px] relative"
                  @click="typeDetail(type)"
                >
                  <img
                    class="absolute top-0"
                    :src="`/lulus-murni${
                      type.checked ? onClickCheckbox : checkbox
                    }`"
                    :alt="type.AddOn"
                  />
                  <span class="ml-[18px] text-[11px] lg:text-[12px]">
                    {{ type.AddOn }}
                  </span>
                </button>
              </div>
              <ShowModalTips
                :type="type"
                :activeId="activeId"
                @toggle="toggleTooltip"
              />
            </div>
          </div>
          <hr class="mb-[10px]" />
          <div class="flex border-b">
            <button
              class="pr-4 py-2 text-[12px] lg:text-[12px]"
              :class="
                tab === 'informasi'
                  ? 'border-b-2 border-[#F78012] lg:text-[14px] font-semibold'
                  : ''
              "
              @click="tab = 'informasi'"
            >
              Informasi Detail Ujian
            </button>
            <button
              class="px-4 py-2 text-[12px] lg:text-[12px]"
              :class="
                tab === 'benefit'
                  ? 'border-b-2 border-[#F78012] lg:text-[14px] font-semibold'
                  : ''
              "
              @click="tab = 'benefit'"
            >
              Benefit Paket
            </button>
            <button
              class="px-4 py-2 text-[12px] lg:text-[12px]"
              :class="
                tab === 'deskripsi'
                  ? 'border-b-2 border-[#F78012] lg:text-[14px] font-semibold'
                  : ''
              "
              @click="tab = 'deskripsi'"
            >
              Deskripsi
            </button>
          </div>

          <div
            class="mt-2 text-[12px] overflow-y-auto lg:overflow-visible lg:h-auto lg:mb-[150px] h-[80px]"
          >
            <div v-if="tab === 'informasi'">
              <p class="text-[12px] lg:text-[12px]">{{ informasiDetail }}</p>
              <br />
            </div>

            <div v-if="tab === 'benefit'">
              <ul class="">
                <div
                  v-for="(item, index) in benefits"
                  :key="index"
                  class="flex text-[12px] lg:text-[12px]"
                >
                  <img
                    class="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] mr-2 rounded-lg border-1"
                    src="/lulus-murni/category/ckeck-category.png"
                    alt="check"
                  />
                  <p class="mb-2">{{ item }}</p>
                </div>
              </ul>
            </div>

            <div v-if="tab === 'deskripsi'">
              <p class="text-[12px] lg:text-[12px]">{{ DetailTest }}</p>
              <br />
            </div>
          </div>

          <!-- Desktop-View -->
          <div class="lg:hidden">
            <div class="flex justify-between pt-2">
              <h1 class="text-[14px] md:text-[16px] font-semibold">TOTAL</h1>
              <h1 class="text-[14px] md:text-[16px] font-semibold">
                Rp{{ formatPrice(totalPrice) }}
              </h1>
            </div>
            <div class="flex justify-end pb-3">
              <button
                @click="isShowDetailPrice = !isShowDetailPrice"
                class="text-[12px] md:text-[14px] text-[#249CD9] underline underline-offset-3"
              >
                Lihat Rincian Harga
              </button>
              <div
                v-if="isShowDetailPrice"
                class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
              >
                <div
                  class="bg-white w-full max-w-[340px] rounded-[12px] shadow-lg px-5 py-4 relative"
                >
                  <!-- Header -->
                  <div class="flex justify-between items-center mb-4">
                    <h1 class="text-[#1385BF] text-[14px] font-bold">
                      Rincian Harga
                    </h1>
                    <button
                      @click="isShowDetailPrice = false"
                      class="text-[20px] text-gray-400 hover:text-gray-700 font-bold"
                    >
                      ×
                    </button>
                  </div>

                  <!-- Nama Paket -->
                  <div class="flex justify-between text-[12px] mb-1">
                    <p
                      class="text-[#2D2D2D] text-[11px] lg:text-[12px] font-medium"
                    >
                      Nama Paket
                    </p>
                    <p
                      class="text-right font-medium text-[11px] text-[#2D2D2D]"
                    >
                      {{ categories.name }}
                    </p>
                  </div>

                  <!-- Harga Paket -->
                  <div
                    class="flex justify-between items-center border-t border-gray-200 pt-2 text-[12px] font-medium text-gray-800 mb-3"
                  >
                    <p class="text-black/60 text-[11px] lg:text-[12px]">
                      Harga Paket
                    </p>
                    <p class="text-[11px] font-medium">
                      Rp{{ formatPrice(categories.price || 0) }}
                    </p>
                  </div>
                  <div
                    v-if="promoActive"
                    class="flex justify-between items-center border-t border-gray-200 pt-2 text-[12px] font-medium text-gray-800 mb-3"
                  >
                    <p class="text-black/60 text-[11px] lg:text-[12px]">
                      {{ promoActive }}
                    </p>
                    <p class="text-[11px] lg:text-[12px]">
                      Rp-{{ formatPrice(discount) }}
                    </p>
                  </div>

                  <!-- Add-Ons -->
                  <p
                    class="text-[11px] lg:text-[14px] font-semibold text-gray-800 mb-1"
                  >
                    Add-Ons
                  </p>
                  <div
                    v-for="addOns in selectedType"
                    :key="addOns"
                    class="flex justify-between text-[12px] lg:text-[12px] text-gray-700 mb-[2px]"
                  >
                    <p class="text-[11px] lg:text-[12px]">
                      • {{ addOns.AddOn }}
                    </p>
                    <span class="font-medium text-[11px] lg:text-[12px]"
                      >Rp{{ formatPrice(addOns.Price) }}</span
                    >
                  </div>

                  <!-- Total -->
                  <div
                    class="border-t border-gray-200 mt-3 pt-3 flex justify-between lg:text-[14px] font-semibold text-[13px]"
                  >
                    <p class="ltext-[11px] lg:text-[14px] font-semibold">
                      Total
                    </p>
                    <p class="text-[11px] lg:text-[14px] font-semibold">
                      Rp{{ formatPrice(totalPrice) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h4 class="text-[12px] md:text-[14px] pb-3">
              Kode Promo <span class="text-[#F78012]">(opsional)</span>
            </h4>
            <div class="mb-4">
              <div class="flex gap-[16px]">
                <input
                  class="border-2 pl-3 rounded-lg w-full py-2 text-[12px] lg:text-[12px]"
                  type="text"
                  placeholder="XYZ234"
                  v-model="codePromo"
                />
                <button
                  @click="applyPromo"
                  class="border text-[12px] border-[#249CD9] rounded-lg text-[#249CD9] px-5 lg:text-[14px] font-semibold"
                >
                  Apply
                </button>
              </div>
              <p
                class="mt-1 text-green-500 font-medium text-[12px] lg:text-[14px]"
                v-if="promoSuccess"
              >
                {{ promoSuccess }}
              </p>
              <p
                class="mt-1 text-[#FF6A6A] font-medium text-[12px] lg:text-[14px]"
                v-if="promoError"
              >
                <span class="px-1.5 bg-[#FF6A6A] text-white rounded-full mr-2">!</span
                >{{ promoError }}
              </p>
            </div>
            <button
              @click="toCheckoutPage(categories)"
              class="w-full bg-[#249CD9] text-white lg:text-[14px] font-semibold py-2 rounded-lg mb-5"
            >
              Pesan Sekarang
            </button>
          </div>
        </div>

        <!-- Mobile-View -->
        <div class="hidden lg:block">
          <div class="bg-[#F8F8F8] p-[20px] rounded-lg">
            <h1 class="font-semibold text-[14px] mb-[4px]">Rincian Harga</h1>
            <div class="flex gap-[20px] justify-between">
              <h1 class="text-[12px]">Nama Paket</h1>
              <h1 class="text-[12px] font-medium">{{ categories.name }}</h1>
            </div>
            <div>
              <div class="flex justify-between">
                <h1 class="text-[12px]">Harga Paket</h1>
                <div>
                  <span class="text-[12px]"
                    >Rp{{ formatPrice(categories.price || 0) }}</span
                  >
                </div>
              </div>
              <div v-if="promoActive" class="flex justify-between">
                <p class="text-[12px] text-[#FF6A6A]">{{ promoActive }}</p>
                <p class="text-[12px] text-[#FF6A6A]">Rp-{{ formatPrice(discount) }}</p>
              </div>
            </div>
            <h1 class="text-[14px] mt-2 font-semibold">Add ons</h1>
            <div v-for="addOns in selectedType" :key="addOns">
              <div class="flex justify-between">
                <p class="text-[12px]">{{ addOns.AddOn }}</p>
                <span class="text-[12px] font-medium"
                  >Rp{{ formatPrice(addOns.Price) }}</span
                >
              </div>
            </div>
          </div>
          <div class="hidden lg:block">
            <div class="flex justify-between font-semibold pt-5">
              <h1 class="text-[14px] font-semibold">TOTAL</h1>
              <h1 class="text-[14px] font-semibold">
                Rp{{ formatPrice(totalPrice) }}
              </h1>
            </div>
            <h4 class="font-medium text-[12px] md:text-[14px] py-3">
              Kode Promo <span class="text-[#F78012]">(opsional)</span>
            </h4>
            <div class="mb-4">
              <div class="flex gap-[16px]">
                <input
                  class="border-2 pl-3 rounded-lg w-full py-2 text-[12px] lg:text-[12px]"
                  type="text"
                  placeholder="XYZ234"
                  v-model="codePromo"
                />
                <button
                  @click="applyPromo"
                  class="border text-[12px] border-[#249CD9] rounded-lg text-[#249CD9] px-5 lg:text-[14px] font-semibold"
                >
                  Apply
                </button>
              </div>
              <p
                class="mt-1 text-green-500 font-medium text-[12px] lg:text-[14px]"
                v-if="promoSuccess"
              >
                {{ promoSuccess }}
              </p>
              <p
                class="mt-1 text-[#FF6A6A] font-medium text-[12px] lg:text-[14px]"
                v-if="promoError"
              >
                <span class="px-1.5 !text-white bg-[#FF6A6A] rounded-full mr-2">!</span
                >{{ promoError }}
              </p>
            </div>
            <button
              @click="toCheckoutPage(categories)"
              class="w-full bg-[#249CD9] text-white lg:text-[14px] font-semibold py-2 rounded-lg mb-5"
            >
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex justify-center">
      <p class="text-red-500">Produk tidak ditemukan</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isShowDetailPrice: false,
      codePromo: "",
      promoSuccess: "",
      discount: 0,
      promoActive: "",
      promoError: "",
      informasiDetail: "",
      checkbox: "/lulus-murni/product-detail/checkbox.svg",
      onClickCheckbox: "/lulus-murni/product-detail/onclick-checkbox.svg",
      activeIndex: null,
      activeIndexTryout: null,
      activeId: null,
      tab: "informasi",
      voucherList: [],
      selectedType: [],
      DetailTest: "",
      benefits: [],
      productList: [],
      addOns: [],
      categories: {
        name: "",
        image: "",
        price: 0,
        category: "",
        showModal: false,
      },
    };
  },
  computed: {
    product() {
      if (!this.categories.category || !this.productList.length) return [];
      return this.productList.filter(
        (item) =>
          (item.Category || "").trim().toLowerCase() ===
          this.categories.category.trim().toLowerCase()
      );
    },
    totalPrice() {
      return (
        Number(this.categories.price) +
        this.selectedType.reduce(
          (total, item) => total + Number(item.Price),
          0
        ) -
        Number(this.discount)
      );
    },
  },
  methods: {
    async getProductList() {
      try {
        const response = await axios.get("/api/productList");
        const data = response.data;
        if (data.success && data.data) {
          this.productList = data.data.data;
          const produc = this.productList.Category;
          // console.log("produck" + produc);
        } else {
          console.error("Gagal data product:", data.message);
        }
      } catch (err) {
        console.error("Gagal ambil data product:", err);
      } finally {
        this.loading = false;
      }
    },
    async getVoucherList() {
      try {
        const response = await axios.get("/api/voucher");
        const data = response.data;

        if (data.success && data.data) {
          this.voucherList = data.data.data;
          // console.log("voucher", this.voucherList);
        } else {
          console.error("Gagal data voucher:", data.message);
        }
      } catch (err) {
        console.error("Gagal ambil data voucher:", err);
      } finally {
        this.loading = false;
      }
    },
    async getAddons() {
      try {
        const response = await axios.get("/api/addons");
        const data = response.data;

        if (data.success && data.data) {
          this.addOns = data.data.data;
          // console.log("addOns", this.addOns);
        } else {
          console.error("Gagal data addOns:", data.message);
        }
      } catch (err) {
        console.error("Gagal ambil data addOns:", err);
      } finally {
        this.loading = false;
      }
    },
    toggleTooltip(AddOn) {
      this.activeId = this.activeId === AddOn ? null : AddOn;
      // console.log(AddOn);
    },
    toggleTab() {
      if (this.tab === "informasi") {
        this.tab = "benefit";
      } else if (this.tab === "benefit") {
        this.tab = "deskripsi";
      } else {
        this.tab = "informasi";
      }
    },
    selectedChange(pack) {
      Object.assign(this.categories, {
        name: pack.Name,
        price: Number(String(pack.Price).replace(/,/g, "")),
        image: pack.ImageURL,
      });
      this.informasiDetail = pack.Description;
      if (this.promoActive) {
        this.applyPromo();
      }
    },
    applyPromo() {
      const promo = this.codePromo.trim().toUpperCase();

      // Ambil daftar voucher yang sudah pernah digunakan
      const usedVouchers = JSON.parse(
        localStorage.getItem("usedVouchers") || "[]"
      );
      // if (usedVouchers.includes(promo)) {
      //   this.discount = 0;
      //   this.promoActive = "";
      //   this.promoSuccess = "";
      //   this.promoError = "Kode promo sudah pernah digunakan";
      //   return;
      // }

      // Cari voucher dari data list
      const voucher = this.voucherList.find(
        (item) => item.VoucherCode.toUpperCase() === promo
      );

      if (!voucher) {
        this.discount = 0;
        this.promoActive = "";
        this.promoSuccess = "";
        this.promoError = "Maaf, kode promo tidak valid";
        return;
      }

      // Cek apakah voucher aktif
      if (voucher.IsActive !== "1") {
        this.discount = 0;
        this.promoError = "Kode promo tidak aktif";
        return;
      }

      // Cek periode waktu voucher
      const today = new Date();
      const start = new Date(voucher.VoucherPeriodFrom);
      const end = new Date(voucher.VoucherPeriodTo);

      if (today < start || today > end) {
        this.discount = 0;
        this.promoError = "Kode promo sudah tidak berlaku";
        return;
      }

      // Hitung diskon berdasarkan persentase
      const discountPercentage = Number(voucher.VoucherPercentage);
      const discountValue = (this.categories.price * discountPercentage) / 100;

      this.discount = discountValue;
      this.promoActive = voucher.VoucherTitle;
      this.promoSuccess = `Selamat! Kamu mendapatkan potongan ${discountPercentage}%`;
      this.promoError = "";

      // Simpan ke localStorage supaya cuma bisa dipakai sekali
      usedVouchers.push(promo);
      localStorage.setItem("usedVouchers", JSON.stringify(usedVouchers));
    },
    typeDetail(type) {
      type.checked = !type.checked;

      const id = this.selectedType.findIndex(
        (item) => item.AddOn === type.AddOn
      );

      if (type.checked && id === -1) {
        this.selectedType.push(type);
      } else if (!type.checked && id !== -1) {
        this.selectedType.splice(id, 1);
      }
    },

    toCheckoutPage(categories) {
      const saved = {
        name: categories.name || "",
        image: categories.image || "",
        price: this.totalPrice || "",
        category: categories.category || "",
        addOns: this.selectedType || [],
        //   benefits: category.Benefits || [],
        //   DetailTest: category.DetailTest || "",
      };
      console.log(saved.addOns);

      localStorage.setItem("selectedCheckoutPage", JSON.stringify(saved));
      this.$router.push(`/checkout-page/${categories.category}`);
    },
    formatPrice(val) {
      return new Intl.NumberFormat("id-ID").format(val);
    },
  },
  async mounted() {
    await this.getProductList();
    this.getVoucherList();
    this.getAddons();

    const saved = localStorage.getItem("selectedProductList");
    if (saved) {
      const data = JSON.parse(saved);
      this.categories.name = data.name;
      this.categories.image = data.image;
      this.categories.price = Number(String(data.price).replace(/,/g, ""));
      this.categories.category = data.category;
      this.informasiDetail = data.description;
      this.benefits = data.benefits;
      this.DetailTest = data.DetailTest;
      // console.log(data.DetailTest);
    } else {
      console.error("Paket tidak ditemukan.");
    }
  },
};
</script>

<style></style>
