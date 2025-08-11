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
        :to="`/product-list/${categories.search}`"
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
          class="w-full h-auto mb-[12px] mt-[20px]"
          :src="`${categories.image}`"
          alt=""
        />
      </div>
      <div class="lg:grid lg:grid-cols-3">
        <div class="col-span-2 lg:mr-10">
          <h2 class="font-semibold text-[14px] py-[4px]">
            {{ categories.name }}
          </h2>
          <div class="flex gap-[8px] text-[14px]">
            <p class="text-[#0683C2] font-semibold">
              Rp{{ formatPrice(categories.price * selectedPack.number || 1) }}
            </p>
            <div class="relative">
              <img
                class="absolute bottom-2"
                src="/lulus-murni/product-detail/vector.svg"
                alt=""
              />
              <span class="text-[#5F6C73] font-medium">Rp299.000</span>
            </div>
          </div>
          <hr class="mt-[8px]" />
          <h1 class="my-[8px] text-[12px] font-medium">Pilih Paket</h1>
          <div class="flex flex-wrap gap-[12px]">
            <div class="" v-for="(pack, index) in packs" :key="index">
              <button
                class="after:border-[#F78012] hover:border-[#F78012] rounded-lg border p-[8px] text-[11px] hover:font-medium"
                :class="{
                  'font-medium border-[#F78012]':
                    selectedPack.number === pack.number,
                }"
                @click="dataDetail(pack, index)"
              >
                <h4>{{ pack.number }} {{ pack.name }}</h4>
                <span>{{ pack.title }}</span>
              </button>
            </div>
          </div>
          <h1 class="text-[12px] mt-[24px] font-medium mb-[8px]">Add-ons</h1>
          <div class="grid grid-cols-2 md:flex gap-[8px] mb-[36px]">
            <div
              class="md:pr-[8px] flex relative"
              v-for="(type, index) in types"
              :key="index"
            >
              <div class="mr-[5px]">
                <button
                  class="flex gap-[4px] text-[12px]"
                  @click="typeDetail(type)"
                >
                  <img
                    :src="`/lulus-murni${
                      type.checked ? type.onClickCheckbox : type.checkbox
                    }`"
                    :alt="type.name"
                  />
                  <span>
                    {{ type.name }}
                  </span>
                </button>
              </div>
              <div class="relative">
                <button class="" @click="isShowTooltip(type.name)">
                  <img
                    class="pb-[2px]"
                    src="/lulus-murni/product-detail/icon-info.svg"
                    alt="icon-info"
                  />
                </button>

                <div
                  v-if="type.isShowTips"
                  class="absolute -left-3 md:-left-8 lg:-left-10 bottom-6 w-[100px] md:w-[200px] lg:w-[300px] h-auto"
                  :class="
                    type.name === 'Pembahasan'
                      ? ''
                      : '' || type.name === 'PDF Soal + Jawaban'
                      ? ''
                      : ''
                  "
                >
                  <img
                    class=""
                    :src="`/lulus-murni${type.toolTipsImage}`"
                    :alt="type.name"
                  />
                </div>
              </div>
              <div
                v-if="type.isShowTips"
                class="absolute -left-4 -top-14 md:-top-16 lg:-top-[70px] bg-black/70 border rounded-lg py-2 pl-2 w-[200px] md:w-[220px] lg:w-[250px]"
                :class="
                  type.name === 'Pembahasan'
                    ? ''
                    : '' || type.name === 'PDF Soal + Jawaban'
                    ? ''
                    : ''
                "
              >
                <h1
                  class="text-white text-[11px] md:text-[12px] lg:text-[14px]"
                >
                  Kamu bebas ulang paket tryout yang kamu beli, unlimited selama
                  1 tahun.
                </h1>
              </div>
            </div>
          </div>
          <hr class="mb-[10px]" />
          <div class="flex border-b text-[12px] lg:text-[14px]">
            <button
              class="pr-4 py-2"
              :class="
                tab === 'informasi'
                  ? 'border-b-2 border-[#F78012] font-semibold'
                  : ''
              "
              @click="tab = 'informasi'"
            >
              Informasi Detail Ujian
            </button>
            <button
              class="px-4 py-2 lg:text-[14px]"
              :class="
                tab === 'benefit'
                  ? 'border-b-2 border-[#F78012] font-semibold'
                  : ''
              "
              @click="tab = 'benefit'"
            >
              Benefit Paket
            </button>
          </div>

          <div
            class="mt-4 text-[12px] overflow-y-auto lg:overflow-visible lg:h-auto lg:mb-[150px] h-[100px]"
          >
            <div v-if="tab === 'informasi'">
              <p>{{ informasiDetail }}</p>
              <br />
              <p class="mb-2">
                Contoh sekolah kedinasan populer di Indonesia beserta instansi
                pengelolanya:
              </p>
              <ul class="list-disc ml-5">
                <li class="mb-2" v-for="list in informasiList" :key="list">
                  {{ list }}
                </li>
              </ul>
            </div>

            <div v-if="tab === 'benefit'">
              <ul class="">
                <div
                  v-for="(item, index) in benefitPaket"
                  :key="index"
                  class="flex"
                >
                  <img
                    class="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] mt-1 mr-2 rounded-lg border-1"
                    src="/lulus-murni/category/ckeck-category.png"
                    alt="check"
                  />
                  <p class="mb-2">{{ item }}</p>
                </div>
              </ul>
            </div>
          </div>

          <div class="lg:hidden">
            <div
              class="flex justify-between font-semibold pt-2 text-[14px] md:text-[16px]"
            >
              <h1 class="text-[14px] md:text-[16px]">TOTAL</h1>
              <h1 class="text-[14px] md:text-[16px]">
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
                  class="bg-white w-full max-w-[340px] rounded-[12px] shadow-lg p-5 relative"
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
                    <p class="text-black/60 font-medium">Nama Paket</p>
                    <p class="text-right font-medium text-gray-800">
                      {{ categories.name }}
                    </p>
                  </div>

                  <!-- Detail Pack -->
                  <div
                    class="flex gap-1 justify-end mb-2 text-[12px] text-gray-700"
                  >
                    <p class="font-medium">{{ selectedPack.number }}</p>
                    <span class="font-medium">{{ selectedPack.name }}</span>
                    <span class="font-medium">{{ selectedPack.title }}</span>
                  </div>

                  <!-- Harga Paket -->
                  <div
                    class="flex justify-between items-center border-t border-gray-200 pt-2 text-[12px] font-medium text-gray-800 mb-3"
                  >
                    <p class="text-black/60">Harga Paket</p>
                    <p>
                      Rp{{
                        formatPrice(categories.price * selectedPack.number || 1)
                      }}
                    </p>
                  </div>
                  <div
                    v-if="promoActive"
                    class="flex justify-between items-center border-t border-gray-200 pt-2 text-[12px] font-medium text-gray-800 mb-3"
                  >
                    <p class="text-black/60">{{ promoActive }}</p>
                    <p>Rp{{ formatPrice(discount) }}</p>
                  </div>

                  <!-- Add-Ons -->
                  <p class="text-[12px] font-semibold text-gray-800 mb-1">
                    Add-Ons
                  </p>
                  <div
                    v-for="addOns in selectedType"
                    :key="addOns"
                    class="flex justify-between text-[12px] text-gray-700 mb-[2px]"
                  >
                    <p>• {{ addOns.name }}</p>
                    <span class="font-medium"
                      >Rp{{ formatPrice(addOns.price) }}</span
                    >
                  </div>

                  <!-- Total -->
                  <div
                    class="border-t border-gray-200 mt-3 pt-3 flex justify-between font-semibold text-[13px]"
                  >
                    <p>Total</p>
                    <p>Rp{{ formatPrice(totalPrice) }}</p>
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
                  class="border-2 pl-3 rounded-lg w-full py-2"
                  type="text"
                  placeholder="XYZ234"
                  v-model="codePromo"
                />
                <button
                  @click="applyPromo"
                  class="border-2 border-[#249CD9] rounded-lg text-[#249CD9] px-2 font-semibold"
                >
                  Apply
                </button>
              </div>
              <p class="mt-1 text-green-500 text-[12px] lg:text-[14px]" v-if="promoSuccess">
                {{ promoSuccess }} <span class="font-semibold"> Rp{{ discount }}</span>
              </p>
            </div>
            <button
              @click="toCheckoutPage(categories.search)"
              class="w-full bg-[#249CD9] text-white font-semibold py-2 rounded-lg mb-5"
            >
              Pesan Sekarang
            </button>
          </div>
        </div>

        <div class="hidden lg:block">
          <div class="bg-black/20 p-[20px] rounded-lg">
            <h1 class="font-semibold text-[14px] mb-[4px]">Rincian Harga</h1>
            <div class="flex gap-[20px] justify-between">
              <h1 class="text-[12px]">Nama Paket</h1>
              <h1 class="text-[12px] font-medium">{{ categories.name }}</h1>
            </div>
            <div>
              <div class="flex gap-1 justify-end">
                <p class="text-[12px] font-medium">{{ selectedPack.number }}</p>
                <span class="text-[12px] font-medium">{{
                  selectedPack.name
                }}</span>
                <h5 class="text-[12px] font-medium">
                  {{ selectedPack.title }}
                </h5>
              </div>
              <div class="flex justify-between">
                <h1 class="text-[14px]">harga Paket</h1>
                <div>
                  <span>Rp{{
                    formatPrice(categories.price * selectedPack.number || 1)
                  }}</span>
                </div>
              </div>
              <div
                v-if="promoActive"
                class="flex justify-between"
              >
                <p class="text-[14px]">{{ promoActive }}</p>
                <p>Rp{{ formatPrice(discount) }}</p>
              </div>
            </div>
            <h1 class="text-[14px] mt-2 font-semibold">Add ons</h1>
            <div v-for="addOns in selectedType" :key="addOns">
              <div class="flex justify-between">
                <p class="text-[12px] grid grid-cols-2">{{ addOns.name }}</p>
                <span class="text-[12px] font-medium">{{
                  formatPrice(addOns.price)
                }}</span>
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
                  class="border-2 pl-3 rounded-lg w-full py-2"
                  type="text"
                  placeholder="XYZ234"
                  v-model="codePromo"
                />
                <button
                  @click="applyPromo"
                  class="border-2 border-[#249CD9] rounded-lg text-[#249CD9] px-2 font-semibold"
                >
                  Apply
                </button>
              </div>
              <p class="mt-1 text-green-500 text-[12px] lg:text-[14px]" v-if="promoSuccess">
                {{ promoSuccess }} <span class="font-semibold"> Rp{{ discount }}</span>
              </p>
            </div>
            <button
              @click="toCheckoutPage(categories.search)"
              class="w-full bg-[#249CD9] text-white font-semibold py-2 rounded-lg mb-5"
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
export default {
  data() {
    return {
      isShowDetailPrice: false,
      codePromo: "",
      promoSuccess: "",
      discount: 0,
      promoActive: "",
      promoError: "",
      selectedType: [],
      selectedPack: {
        number: 1,
        isOpen: true,
        name: "Paket Tryout",
        title: "(Unlimited 1 tahun)",
      },
      activeIndex: null,
      activeIndexTryout: null,
      tab: "informasi",
      informasiDetail: `Sekdin adalah singkatan dari Sekolah Kedinasan, yaitu perguruan tinggi yang dikelola oleh instansi pemerintah dengan tujuan utama mendidik calon pegawai negeri sipil (PNS). Berbeda dengan kampus pada umumnya, lulusan Sekdin akan langsung diangkat menjadi CPNS setelah menyelesaikan pendidikan, sesuai dengan kebutuhan instansi yang menaunginya.`,
      informasiList: [
        "PKN STAN (Politeknik Keuangan Negara STAN) – dikelola oleh Kementerian Keuangan, fokus pada bidang akuntansi, perpajakan, dan keuangan negara.",
        "STIS (Politeknik Statistika STIS) – berada di bawah Badan Pusat Statistik (BPS), mendidik mahasiswa di bidang statistika dan komputasi statistik.",
        "IPDN (Institut Pemerintahan Dalam Negeri) – dikelola oleh Kementerian Dalam Negeri, mencetak calon pemimpin pemerintahan tingkat daerah.",
        "STSN (Sekolah Tinggi Sandi Negara) – di bawah Badan Siber dan Sandi Negara (BSSN), fokus pada keamanan informasi dan kriptografi.",
        "STMKG (Sekolah Tinggi Meteorologi Klimatologi dan Geofisika) – dikelola oleh BMKG, mencetak ahli cuaca, iklim, dan geofisika.",
        "Poltekim dan Poltekip – dikelola oleh Kementerian Hukum dan HAM, masing-masing fokus pada bidang keimigrasian dan pemasyarakatan.",
        "STTD dan Politeknik Transportasi lainnya – di bawah Kementerian Perhubungan, mendidik mahasiswa untuk menjadi tenaga profesional di bidang transportasi darat, laut, dan udara.",
      ],
      benefitPaket: [
        "Fitur Premium Tryout yang mencakup soal TWK, TIU, dan TKP dengan total 660 soal terakurat",
        "Lengkap dengan kunci jawaban & pembahasan setiap selesai tryout plus kamu bisa download soal dan jawabannya untuk belajar offline.",
        "Tersedia untuk berbagai sekolah kedinasan seperti POLTEKIP, POLTEKIM, STIS, STAN, IPDN, dan lainnya.",
        "Soal disusun sesuai aturan terbaru dengan jumlah 110 soal per paket (total 660 soal), waktu pengerjaan per paket 100 menit, serta menggunakan sistem CAT mirip ujian asli.",
        "Bobot soal sesuai aturan terbaru, raport nilai hasil tryout, dan sistem peringkat nasional, kamu juga bisa mengerjakannya berulang kali tanpa batas untuk hasil maksimal.",
        "Beli sekali untuk akses selamanya!",
      ],
      categories: {
        name: "",
        image: "",
        price: 0,
        category: "",
        showModal: false,
      },
      packs: [
        {
          number: 1,
          isOpen: true,
          name: "Paket Tryout",
          title: "(Unlimited 1 tahun)",
        },
        {
          number: 2,
          isOpen: true,
          name: "Paket Tryout",
          title: "(Unlimited 1 tahun)",
        },
        {
          number: 5,
          isOpen: true,
          name: "Paket Tryout",
          title: "(Unlimited 1 tahun)",
        },
      ],
      types: [
        {
          name: "Retry",
          price: 50000,
          toolTipsImage: "/lulus-murni/product-detail/toolTip.png",
          isShowTips: false,
          checkbox: "/lulus-murni/product-detail/checkbox.svg",
          onClickCheckbox: "/lulus-murni/product-detail/onclick-checkbox.svg",
        },
        {
          name: "Pembahasan",
          price: 50000,
          toolTipsImage: "/lulus-murni/product-detail/toolTip.png",
          isShowTips: false,
          checkbox: "/lulus-murni/product-detail/checkbox.svg",
          onClickCheckbox: "/lulus-murni/product-detail/onclick-checkbox.svg",
        },
        {
          name: "Koreksi Otomatis",
          price: 50000,
          toolTipsImage: "/lulus-murni/product-detail/toolTip.png",
          isShowTips: false,
          checkbox: "/lulus-murni/product-detail/checkbox.svg",
          onClickCheckbox: "/lulus-murni/product-detail/onclick-checkbox.svg",
        },
        {
          name: "PDF Soal + Jawaban",
          price: 50000,
          toolTipsImage: "/lulus-murni/product-detail/toolTip.png",
          isShowTips: false,
          checkbox: "/lulus-murni/product-detail/checkbox.svg",
          onClickCheckbox: "/lulus-murni/product-detail/onclick-checkbox.svg",
        },
      ],
    };
  },
  computed: {
    totalPrice() {
      return (
        this.categories.price * (this.selectedPack.number || 1) +
        this.selectedType.reduce((total, item) => total + item.price, 0) -
        this.discount
      );
    },
  },
  methods: {
    toggleTab() {
      this.tab = this.tab === "informasi" ? "benefit" : "informasi";
    },
    dataDetail(value) {
      this.selectedPack = value;
      //hanya mengambil data di object pack
    },
    applyPromo() {
      const promo = this.codePromo.trim().toLocaleUpperCase();

      if (promo === "LULUSMURNI") {
        this.discount = 20000;
        this.promoActive = "Potongan harga";
        this.promoSuccess =
          "Selamat! Kamu telah mendapatkan potongan harga sebesar";
        this.promoError = "";
        console.log(promo);
      } else {
        this.discount = 0;
        this.promoActive = "";
        this.promoSuccess = "";
        this.promoError = "Maaf, kode promo tidak valid";
      }
    },
    typeDetail(type) {
      type.checked = !type.checked;

      const id = this.selectedType.findIndex((item) => item.name === type.name);

      if (type.checked && id === -1) {
        this.selectedType.push(type);
      } else if (!type.checked && id !== -1) {
        this.selectedType.splice(id, 1);
      }
    },
    isShowTooltip(name) {
      this.types = this.types.map((type) => ({
        ...type,
        isShowTips: type.name === name ? !type.isShowTips : false,
      }));
    },
    toCheckoutPage(value) {
      const data = {
        pack: this.selectedPack,
        addons: this.selectedType,
      };
      console.log(data);
      this.$router.push({
        path: `/checkout-page/${value}`,
        query: {
          data: encodeURIComponent(JSON.stringify(data)),
        },
      });
    },
    formatPrice(val) {
      return new Intl.NumberFormat("id-ID").format(val);
    },
  },
  mounted() {
    const saved = localStorage.getItem("selectedProductList");
    if (saved) {
      const data = JSON.parse(saved);
      this.categories.name = data.name;
      this.categories.image = data.image;
      this.categories.price = Number(String(data.price).replace(/,/g, ""));
      this.categories.category = data.category;
      console.log(this.categories.price);
    } else {
      console.error("Paket tidak ditemukan.");
    }
  },
};
</script>

<style></style>
