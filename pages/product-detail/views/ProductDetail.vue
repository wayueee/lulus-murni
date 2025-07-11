<template>
  <div class="container">
    <div class="flex">
      <nuxt-link class="flex" to="/">
        <img
          class="w-[18px] h-auto"
          src="/lulus-murni/product-list/home.svg"
          alt=""
        />
        <span class="mx-1 mb-1">></span>
      </nuxt-link>
      <nuxt-link class="flex text-[12px] mt-1" to="/product-list"
        >Product List </nuxt-link
      ><span class="mx-1 mb-1">></span>
      <nuxt-link
        class="flex text-[12px] mt-1 text-[#F78012]"
        to="/product-detail"
        >Product Detail
      </nuxt-link>
    </div>
    <div v-if="product">
      <div class="mb-[20px]">
        <img
          class="w-full h-auto mb-[12px] mt-[20px]"
          :src="`/lulus-murni${product.image}`"
          alt=""
        />
      </div>
      <div class="lg:grid lg:grid-cols-3">
        <div class="col-span-2 lg:mr-10">
          <h2 class="font-semibold text-[14px] py-[4px]">{{ product.name }}</h2>
          <div class="flex gap-[8px] text-[14px]">
            <p class="text-[#0683C2] font-semibold">
              Rp.{{ (product.price  * selectedPack.number || 1).toFixed(3)  }}
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
          <div class="flex flex-wrap gap-[12px]" >
            <div class="" v-for="(pack, index) in product.pack" :key="index">
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
              class="md:pr-[8px]"
              v-for="(type, index) in product.types"
              :key="index"
            >
              <button
                class="flex gap-[4px] text-[12px]"
                :class="
                  type.name === 'PDF Soal + Jawaban'
                    ? 'gap-[1px] md:gap-[4px]'
                    : ''
                "
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

                <img src="/lulus-murni/product-detail/icon-info.svg" alt="" />
              </button>
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
              <h1 class="text-[14px] md:text-[16px]">TOTAL mobile</h1>
              <h1 class="text-[14px] md:text-[16px]">
                Rp.{{ (product.price  * selectedPack.number || 1).toFixed(3) }}
              </h1>
            </div>
            <div class="flex justify-end pb-3">
              <button
                class="text-[12px] md:text-[14px] text-[#249CD9] underline underline-offset-3"
              >
                Lihat Rincian Harga
              </button>
            </div>
            <h4 class="text-[12px] md:text-[14px] pb-3">
              Kode Promo <span class="text-[#F78012]">(opsional)</span>
            </h4>
            <div class="flex gap-[16px] mb-4">
              <input
                class="border-2 pl-3 rounded-lg w-full py-2"
                type="text"
                placeholder="XYZ234"
              />
              <button
                class="border-2 border-[#249CD9] rounded-lg text-[#249CD9] px-2 font-semibold"
              >
                Apply
              </button>
            </div>
            <button @click="toCheckoutPage()" 
              class="w-full bg-[#249CD9] text-white font-semibold py-2 rounded-lg mb-5"
            >
              Pesan Sekarang
            </button>
          </div>
        </div>

        <!-- <div v-else class="flex justify-center">
        <p class="text-red-500">Produk tidak ditemukan</p>
      </div> -->

        <div class="hidden lg:block">
          <div class="bg-black/20 p-[20px] rounded-lg">
            <h1 class="font-semibold text-[14px] mb-[4px]">Rincian Harga</h1>
            <div class="flex gap-[20px] justify-between">
              <h1 class="text-[12px]">Nama Paket</h1>
              <h1 class="text-[12px] font-medium">{{ product.name }}</h1>
            </div>
            <div>
              <div class="flex gap-1 justify-end">
                <p class="text-[12px] font-medium">{{ selectedPack.number }}</p>
                <span class="text-[12px] font-medium">{{ selectedPack.name }}</span>
                <h5 class="text-[12px] font-medium">{{ selectedPack.title }}</h5>
              </div>
              <div class="flex justify-between">
                <h1 class="text-[14px]">harga Paket</h1>
                <div >
                  <span>{{ (product.price  * selectedPack.number || 1).toFixed(3)  }}</span>
                </div>
              </div>
            </div>
            <h1 class="text-[14px] mt-2 font-semibold">Add ons</h1>
            <div  v-for="addOns in selectedType" :key="addOns">
              <div class="flex justify-between">
                <p class="text-[12px] grid grid-cols-2">{{ addOns.name }}</p>
                <span class="text-[12px] font-medium">{{ addOns.price.toFixed(3) }}</span>
              </div>
            </div>
          </div>
          <div class="hidden lg:block">
            <div class="flex justify-between font-semibold pt-5">
              <h1 class="text-[14px] font-semibold">TOTAL</h1>
              <h1 class="text-[14px] font-semibold">
                Rp.{{ totalPrice.toFixed(3) }}
              </h1>
            </div>
            <h4 class="font-medium text-[12px] md:text-[14px] py-3">
              Kode Promo <span class="text-[#F78012]">(opsional)</span>
            </h4>
            <div class="flex gap-[16px] mb-4">
              <input
                class="border-2 pl-3 rounded-lg w-full py-2"
                type="text"
                placeholder="XYZ234"
              />
              <button
                class="border-2 border-[#249CD9] rounded-lg text-[#249CD9] px-2 font-semibold"
              >
                Apply
              </button>
            </div>
            <button
              class="w-full bg-[#249CD9] text-white font-semibold py-2 rounded-lg mb-5"
            >
              Pesan Sekarang
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
      selectedType: [],
      selectedPack: {
              number: 1,
              isOpen : true,
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
      categories: [
        {
          image: "/lulus-murni/product-list/sekdin.png",
          name: "Paket Simulasi Premium All-in TOEFL ITP",
          pack: [
            {
              number: 1,
              isOpen : true,
              name: "Paket Tryout",
              title: "(Unlimited 1 tahun)",
            },
            {
              number: 2,
              isOpen : true,
              name: "Paket Tryout",
              title: "(Unlimited 1 tahun)",
            },
            {
              number: 5,
              isOpen : true,
              name: "Paket Tryout",
              title: "(Unlimited 1 tahun)",
            },
          ],
          types: [
            {
              name: "Retry",
              price: 50.0,
              checkbox: "/lulus-murni/product-detail/checkbox.svg",
              onClickCheckbox:
                "/lulus-murni/product-detail/onclick-checkbox.svg",
            },
            {
              name: "Pembahasan",
              price: 50.0,
              checkbox: "/lulus-murni/product-detail/checkbox.svg",
              onClickCheckbox:
                "/lulus-murni/product-detail/onclick-checkbox.svg",
            },
            {
              name: "Koreksi Otomatis",
              price: 50.0,
              checkbox: "/lulus-murni/product-detail/checkbox.svg",
              onClickCheckbox:
                "/lulus-murni/product-detail/onclick-checkbox.svg",
            },
            {
              name: "PDF Soal + Jawaban",
              price: 50.0,
              checkbox: "/lulus-murni/product-detail/checkbox.svg",
              onClickCheckbox:
                "/lulus-murni/product-detail/onclick-checkbox.svg",
            },
          ],
          price: 59.0,
          search: "TOEFL",
          description: {
            name: "Informasi Detail Ujian",
            benefit: [
              "Fitur Premium Tryout yang mencakup soal TWK, TIU, dan TKP dengan total 660 soal terakurat",
              "Lengkap dengan kunci jawaban & pembahasan setiap selesai tryout plus kamu bisa download soal dan jawabannya untuk belajar offline.",
              "Tersedia untuk berbagai sekolah kedinasan seperti POLTEKIP, POLTEKIM, STIS, STAN, IPDN, dan lainnya.",
              "Soal disusun sesuai aturan terbaru dengan jumlah 110 soal per paket (total 660 soal), waktu pengerjaan per paket 100 menit, serta menggunakan sistem CAT mirip ujian asli.",
              "Bobot soal sesuai aturan terbaru, raport nilai hasil tryout, dan sistem peringkat nasional, kamu juga bisa mengerjakannya berulang kali tanpa batas untuk hasil maksimal.",
              "Beli sekali untuk akses selamanya!",
            ],
          },
          showModal: false,
        },
        {
          image: "/lulus-murni/product-list/toefl.png",
          name: "Paket Simulasi Premium All-in TOEFL ITP",
                    pack: [
            {
              number: 1,
              isOpen : true,
              name: "Paket Tryout",
              title: "(Unlimited 1 tahun)",
            },
            {
              number: 2,
              isOpen : true,
              name: "Paket Tryout",
              title: "(Unlimited 1 tahun)",
            },
            {
              number: 5,
              isOpen : true,
              name: "Paket Tryout",
              title: "(Unlimited 1 tahun)",
            },
          ],
          types: [
            {
              name: "Retry",
              price: 50.0,
              checkbox: "/lulus-murni/product-detail/checkbox.svg",
              onClickCheckbox:
                "/lulus-murni/product-detail/onclick-checkbox.svg",
            },
            {
              name: "Pembahasan",
              price: 50.0,
              checkbox: "/lulus-murni/product-detail/checkbox.svg",
              onClickCheckbox:
                "/lulus-murni/product-detail/onclick-checkbox.svg",
            },
            {
              name: "Koreksi Otomatis",
              price: 50.0,
              checkbox: "/lulus-murni/product-detail/checkbox.svg",
              onClickCheckbox:
                "/lulus-murni/product-detail/onclick-checkbox.svg",
            },
            {
              name: "PDF Soal + Jawaban",
              price: 50.0,
              checkbox: "/lulus-murni/product-detail/checkbox.svg",
              onClickCheckbox:
                "/lulus-murni/product-detail/onclick-checkbox.svg",
            },
          ],
          price: 59.0,
          search: "SEKDIN",
          description: {
            benefit: [
              "Fitur Premium Tryout yang mencakup soal TWK, TIU, dan TKP dengan total 660 soal terakurat",
              "Lengkap dengan kunci jawaban & pembahasan setiap selesai tryout plus kamu bisa download soal dan jawabannya untuk belajar offline.",
              "Tersedia untuk berbagai sekolah kedinasan seperti POLTEKIP, POLTEKIM, STIS, STAN, IPDN, dan lainnya.",
              "Soal disusun sesuai aturan terbaru dengan jumlah 110 soal per paket (total 660 soal), waktu pengerjaan per paket 100 menit, serta menggunakan sistem CAT mirip ujian asli.",
              "Bobot soal sesuai aturan terbaru, raport nilai hasil tryout, dan sistem peringkat nasional, kamu juga bisa mengerjakannya berulang kali tanpa batas untuk hasil maksimal.",
              "Beli sekali untuk akses selamanya!",
            ],
            image: "/lulus-murni/product-list/toefl.png",
          },
          showModal: false,
        },
      ],
    };
  },
  computed: {
    product() {
      const search = this.$route.params.search;
      return this.categories.find((item) => item.search === search);
    },
    totalPrice() {
  return (this.product.price) * (this.selectedPack.number || 1) +
    this.selectedType.reduce((total, item) => total + item.price, 0);
}

  },
  methods: {
    toggleTab() {
      this.tab = this.tab === "informasi" ? "benefit" : "informasi";
    },
    dataDetail(value) {
      this.selectedPack = value;

      //hanya mengambil data di object pack
    },
    typeDetail(type) {
      type.checked = !type.checked; 
      //di image atas untuk checkbox

      const id = this.selectedType.findIndex((item) => item.name === type.name);
      //mencari data di dalam categories.type

      if (type.checked && id === -1) {
        //jika tidak ada cheked dan nama -1
        this.selectedType.push(type);
        // menjalankan push type
      } else if (!type.checked && id !== -1) {
        // artinya ( !checked ) itu adalah kebalikan contoh : { type.checked = !type.checked }
        this.selectedType.splice(id, 1);
        //jika !checked dan id tidak sama atau nama ada di dalam array berarti menjalankan ini
      }
    },
  },
};
</script>

<style></style>
