<template>
  <div class="bg-[#ffffff]">
    <div class="pt-[24px] container">
      <div class="flex flex-col md:flex-row justify-between">
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
          <h1
            class="text-14 mt-[16px] md:text-[18px] lg:text-[24px] mb-2 lg:mb-[20px] font-semibold"
          >
            Daftar Product
          </h1>
          <div class="flex flex-col md:flex-row md:gap-[14px] lg:gap-[20px]">
            <select
              v-model="selected"
              class="w-full md:w-[275px] mb-[10px] xl:w-[268px] h-[43px] border-2 rounded-lg px-2"
            >
              <option hidden value="">Pilih kategori</option>
              <option value="All">All</option>
              <option value="CPNS">CPNS</option>
              <option value="TOEFL">TOEFL</option>
              <option value="SEKDIN">Sekolah Kedinasan</option>
            </select>
            <div class="flex gap-[12px] mb-[10px] h-[43px]">
              <input
                class="rounded-lg border w-full lg:w-[265px] px-3"
                placeholder="Cari paket yang sesuai"
                type="text"
                name=""
                id=""
              />
              <button
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
        v-if="selected"
        class="bg-[#ffffff] gap-5 py-5 grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:gap-[20px] md:grid-cols-3 lg:grid-cols-4"
      >
        <div v-for="(category, index) in filteredCategories" :key="index">
          <div class="border-2 bg-white p-[12px] rounded-lg xl:w-[268px]">
            <div class="relative">
              <img
                class="w-full h-auto"
                :src="`/lulus-murni${category.image}`"
                :alt="category.name"
              />
            </div>
            <div>
              <h1 class="font-semibold text-[14px] mt-2">
                All-in: {{ category.name }}
              </h1>
              <div
                class="flex md:grid md:grid-cols-2 gap-5 md:gap-0 overflow-hidden"
              >
                <div
                  class="flex gap-1 text-[11px] my-1"
                  v-for="type in category.types"
                  :key="type"
                >
                  <img :src="`/lulus-murni${type.image}`" :alt="type.name" />
                  <h1>{{ type.name }}</h1>
                </div>
              </div>
              <div class="my-1">
                <button
                  @click="category.showModal = true"
                  class="text-[12px] font-semibold text-[#249CD9]"
                >
                  Lihat Deskripsi Paket >
                </button>
              </div>
              <div v-if="category.showModal" class="relative z-10">
                <div
                  class="fixed inset-0 bg-gray-500/75 transition-opacity"
                  @click="category.showModal = false"
                ></div>

                <div class="fixed inset-0 z-10 overflow-y-auto">
                  <div class="flex justify-center mt-10 p-4">
                    <div
                      class="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-8 w-full xl:max-w-4xl"
                    >
                      <div class="bg-white p-[12px] w-full h-auto">
                        <div>
                          <div class="flex gap-2 justify-between">
                            <h3 class="text-[14px] font-bold text-[#1385BF]">
                              {{ category.name }}
                            </h3>
                            <button @click="category.showModal = false">
                              <img
                                src="/lulus-murni/category-section/close-modal.svg"
                                alt=""
                              />
                            </button>
                          </div>
                          <div class="flex gap-5">
                            <div class="mt-2">
                              <p class="text-[12px] lg:text-[14px]">
                                Benefit yang akan kamu dapatkan:
                              </p>
                              <div
                                class="flex my-2"
                                v-for="information in category.description.info"
                                :key="information"
                              >
                                <img
                                  class="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] mt-1 mr-2 rounded-lg border-1"
                                  src="/lulus-murni/category/ckeck-category.png"
                                  alt="check"
                                />
                                <p class="text-[12px] lg:text-[14px]">
                                  {{ information }}
                                </p>
                              </div>
                              <img
                                class="my-3 w-full h-auto md:hidden"
                                :src="`/lulus-murni${category.description.image}`"
                                :alt="category.name"
                              />
                            </div>
                            <div>
                              <img
                                class="my-3 w-full h-auto hidden md:block"
                                :src="`/lulus-murni${category.description.image}`"
                                :alt="category.name"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="flex justify-between my-2">
                <p>Harga</p>
                <p class="font-semibold">{{ category.price }}</p>
              </div>
              <div class="my-1">
                <button
                  @click="productDetail(category)"
                  class="bg-[#249CD9] font-semibold text-center w-full h-[45px] lg:h-[40px] rounded-lg text-white"
                >
                  Beli Paket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <button
          v-if="showCount < categories.length"
          @click="showCount = categories.length"
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
export default {
  data() {
    return {
      showCount: 4,
      selected: "All",
      categories: [
        {
          image: "/lulus-murni/product-list/toefl.png",
          name: "TOEFL ITP Premium (All In)",
          types: [
            {
              image: "/lulus-murni/category-section/device.svg",
              name: "Online",
            },
            {
              image: "/lulus-murni/category-section/clock.svg",
              name: "Lifetime",
            },
            {
              image: "/lulus-murni/category-section/retry.svg",
              name: "Retry",
            },
            {
              image: "/lulus-murni/category-section/people.svg",
              name: "Group",
            },
          ],
          price: "Rp50.000",
          search: "TOEFL",
          description: {
            info: [
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
        {
          image: "/lulus-murni/product-list/sekdin.png",
          name: "TOEFL ITP Premium (All In)",
          types: [
            {
              image: "/lulus-murni/category-section/device.svg",
              name: "Online",
            },
            {
              image: "/lulus-murni/category-section/clock.svg",
              name: "Lifetime",
            },
            {
              image: "/lulus-murni/category-section/retry.svg",
              name: "Retry",
            },
            {
              image: "/lulus-murni/category-section/people.svg",
              name: "Group",
            },
          ],
          price: "Rp50.000",
          search: "SEKDIN",
          description: {
            info: [
              "Fitur Premium Tryout yang mencakup soal TWK, TIU, dan TKP dengan total 660 soal terakurat",
              "Lengkap dengan kunci jawaban & pembahasan setiap selesai tryout plus kamu bisa download soal dan jawabannya untuk belajar offline.",
              "Tersedia untuk berbagai sekolah kedinasan seperti POLTEKIP, POLTEKIM, STIS, STAN, IPDN, dan lainnya.",
              "Soal disusun sesuai aturan terbaru dengan jumlah 110 soal per paket (total 660 soal), waktu pengerjaan per paket 100 menit, serta menggunakan sistem CAT mirip ujian asli.",
              "Bobot soal sesuai aturan terbaru, raport nilai hasil tryout, dan sistem peringkat nasional, kamu juga bisa mengerjakannya berulang kali tanpa batas untuk hasil maksimal.",
              "Beli sekali untuk akses selamanya!",
            ],
            image: "/lulus-murni/product-list/sekdin.png",
          },
          showModal: false,
        },
      ],
    };
  },
  computed: {
    filteredCategories() {
      return this.categories
        .filter(
          (category) =>
            this.selected === 'All' || category.search === this.selected
        )
        .slice(0, this.showCount);
    },
  },
  methods: {
    productDetail(value) {
      this.$router.push(`/product-detail/${value.search}`);
    },
  },
};
</script>

<style></style>
