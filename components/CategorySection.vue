<template>
  <div class="bg-[#D7E6F0]">
    <div
      class="pt-[24px] container pb-10"
    >
      <div class="flex flex-col md:flex-row justify-between">
        <h1 class="text-14 lg:text-[24px] mb-2 lg:mb-[20px] font-semibold">
          Mulai Tryout Sekarang
        </h1>
        <select  v-model="selected" class="w-full md:w-[275px] xl:w-[268px] h-[43px] border-2 rounded-lg px-2">
          <option hidden value="">Pilih kategori</option>
          <option value="All">All</option>
          <option value="Trending Now">Trending Now</option>
          <option value="Promo">Promo</option>
          <option value="Top Pick">Top Pick</option>
        </select>
      </div>
      <div v-if="selected"
        class="bg-[#D7E6F0] gap-5 py-5 grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:gap-[20px] md:grid-cols-3 lg:grid-cols-4 "
      >
      <div
      v-for="category in categories.filter(category => selected === 'All' || category.promotion === selected).slice(0, showCount)"
      :key="category"
      >
      <div class="border-2 bg-white p-[12px] rounded-lg xl:w-[268px]">
          <div class="relative" >
            <h1
              class="absolute font-semibold w-[118px] py-1 text-center text-[12px] rounded-br-xl"
              :class="
                category.promotion === 'Trending Now'
                  ? 'border-r-2 border-b-2 bg-[#D1EFFF] text-[#249CD9] border-[#249CD9]'
                  : '' || category.promotion === 'Promo'
                  ? 'border-r-2 border-b-2 bg-[#FFE7D1] text-[#F78012] border-[#F78012]'
                  : '' || category.promotion === 'Top Pick'
                  ? 'border-r-2 border-b-2 bg-[#CBFFCD] text-[#0DBC16] border-[#0DBC16]'
                  : ''
              "
            >
              {{ category.promotion }}
            </h1>
            <h1 class="absolute right-2 top-1 text-[12px] xl:text-[14px]">
              {{ category.timePromo }}
            </h1>
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
            <div class="flex md:grid md:grid-cols-2 gap-5 md:gap-0 overflow-hidden">
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
                Lihat Deskripsi Paket  >
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
                class="bg-[#249CD9] font-semibold text-center w-full h-[45px] lg:h-[40px] rounded-lg text-white"
              >
                Beli Paket
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div class="flex justify-center py-3">
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
      selected: 'All',
      categories: [
        {
          image: "/lulus-murni/category-section/sekdin.png",
          name: "6 Paket Fokus Sekolah Kedinasan",
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
          promotion: "Trending Now",
          description: {
            info: [
              "Fitur Premium Tryout yang mencakup soal TWK, TIU, dan TKP dengan total 660 soal terakurat",
              "Lengkap dengan kunci jawaban & pembahasan setiap selesai tryout plus kamu bisa download soal dan jawabannya untuk belajar offline.",
              "Tersedia untuk berbagai sekolah kedinasan seperti POLTEKIP, POLTEKIM, STIS, STAN, IPDN, dan lainnya.",
              "Soal disusun sesuai aturan terbaru dengan jumlah 110 soal per paket (total 660 soal), waktu pengerjaan per paket 100 menit, serta menggunakan sistem CAT mirip ujian asli.",
              "Bobot soal sesuai aturan terbaru, raport nilai hasil tryout, dan sistem peringkat nasional, kamu juga bisa mengerjakannya berulang kali tanpa batas untuk hasil maksimal.",
              "Beli sekali untuk akses selamanya!",
            ],
            image: "/lulus-murni/category-section/modal-image-1.png",
          },
          timePromo: "",
          showModal: false,
        },
        {
          image: "/lulus-murni/category-section/toefl.png",
          name: "6 Paket Fokus Sekolah Kedinasan",
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
          promotion: "Promo",
          description: {
            info: [
              "Fitur Premium Tryout yang mencakup soal TWK, TIU, dan TKP dengan total 660 soal terakurat",
              "Lengkap dengan kunci jawaban & pembahasan setiap selesai tryout plus kamu bisa download soal dan jawabannya untuk belajar offline.",
              "Tersedia untuk berbagai sekolah kedinasan seperti POLTEKIP, POLTEKIM, STIS, STAN, IPDN, dan lainnya.",
              "Soal disusun sesuai aturan terbaru dengan jumlah 110 soal per paket (total 660 soal), waktu pengerjaan per paket 100 menit, serta menggunakan sistem CAT mirip ujian asli.",
              "Bobot soal sesuai aturan terbaru, raport nilai hasil tryout, dan sistem peringkat nasional, kamu juga bisa mengerjakannya berulang kali tanpa batas untuk hasil maksimal.",
              "Beli sekali untuk akses selamanya!",
            ],
            image: "/lulus-murni/category-section/modal-image-1.png",
          },
          timePromo: "02 : 30 : 05",
          showModal: false,
        },
        {
          image: "/lulus-murni/category-section/sekdin.png",
          name: "6 Paket Fokus Sekolah Kedinasan",
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
          promotion: "Promo",
          description: {
            info: [
              "Fitur Premium Tryout yang mencakup soal TWK, TIU, dan TKP dengan total 660 soal terakurat",
              "Lengkap dengan kunci jawaban & pembahasan setiap selesai tryout plus kamu bisa download soal dan jawabannya untuk belajar offline.",
              "Tersedia untuk berbagai sekolah kedinasan seperti POLTEKIP, POLTEKIM, STIS, STAN, IPDN, dan lainnya.",
              "Soal disusun sesuai aturan terbaru dengan jumlah 110 soal per paket (total 660 soal), waktu pengerjaan per paket 100 menit, serta menggunakan sistem CAT mirip ujian asli.",
              "Bobot soal sesuai aturan terbaru, raport nilai hasil tryout, dan sistem peringkat nasional, kamu juga bisa mengerjakannya berulang kali tanpa batas untuk hasil maksimal.",
              "Beli sekali untuk akses selamanya!",
            ],
            image: "/lulus-murni/category-section/modal-image-1.png",
          },
          timePromo: "02 : 30 : 05",
          showModal: false,
        },
        {
          image: "/lulus-murni/category-section/toefl.png",
          name: "6 Paket Fokus Sekolah Kedinasan",
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
          promotion: "Top Pick",
          description: {
            info: [
              "Fitur Premium Tryout yang mencakup soal TWK, TIU, dan TKP dengan total 660 soal terakurat",
              "Lengkap dengan kunci jawaban & pembahasan setiap selesai tryout plus kamu bisa download soal dan jawabannya untuk belajar offline.",
              "Tersedia untuk berbagai sekolah kedinasan seperti POLTEKIP, POLTEKIM, STIS, STAN, IPDN, dan lainnya.",
              "Soal disusun sesuai aturan terbaru dengan jumlah 110 soal per paket (total 660 soal), waktu pengerjaan per paket 100 menit, serta menggunakan sistem CAT mirip ujian asli.",
              "Bobot soal sesuai aturan terbaru, raport nilai hasil tryout, dan sistem peringkat nasional, kamu juga bisa mengerjakannya berulang kali tanpa batas untuk hasil maksimal.",
              "Beli sekali untuk akses selamanya!",
            ],
            image: "/lulus-murni/category-section/modal-image-1.png",
          },
          timePromo: "",
          showModal: false,
        },
        {
          image: "/lulus-murni/category-section/sekdin.png",
          name: "6 Paket Fokus Sekolah Kedinasan",
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
          promotion: "",
          description: {
            info: [
              "Fitur Premium Tryout yang mencakup soal TWK, TIU, dan TKP dengan total 660 soal terakurat",
              "Lengkap dengan kunci jawaban & pembahasan setiap selesai tryout plus kamu bisa download soal dan jawabannya untuk belajar offline.",
              "Tersedia untuk berbagai sekolah kedinasan seperti POLTEKIP, POLTEKIM, STIS, STAN, IPDN, dan lainnya.",
              "Soal disusun sesuai aturan terbaru dengan jumlah 110 soal per paket (total 660 soal), waktu pengerjaan per paket 100 menit, serta menggunakan sistem CAT mirip ujian asli.",
              "Bobot soal sesuai aturan terbaru, raport nilai hasil tryout, dan sistem peringkat nasional, kamu juga bisa mengerjakannya berulang kali tanpa batas untuk hasil maksimal.",
              "Beli sekali untuk akses selamanya!",
            ],
            image: "/lulus-murni/category-section/modal-image-1.png",
          },
          timePromo: "",
          showModal: false,
        },
        {
          image: "/lulus-murni/category-section/toefl.png",
          name: "6 Paket Fokus Sekolah Kedinasan",
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
          promotion: "Top Pick",
          description: {
            info: [
              "Fitur Premium Tryout yang mencakup soal TWK, TIU, dan TKP dengan total 660 soal terakurat",
              "Lengkap dengan kunci jawaban & pembahasan setiap selesai tryout plus kamu bisa download soal dan jawabannya untuk belajar offline.",
              "Tersedia untuk berbagai sekolah kedinasan seperti POLTEKIP, POLTEKIM, STIS, STAN, IPDN, dan lainnya.",
              "Soal disusun sesuai aturan terbaru dengan jumlah 110 soal per paket (total 660 soal), waktu pengerjaan per paket 100 menit, serta menggunakan sistem CAT mirip ujian asli.",
              "Bobot soal sesuai aturan terbaru, raport nilai hasil tryout, dan sistem peringkat nasional, kamu juga bisa mengerjakannya berulang kali tanpa batas untuk hasil maksimal.",
              "Beli sekali untuk akses selamanya!",
            ],
            image: "/lulus-murni/category-section/modal-image-1.png",
          },
          timePromo: "",
          showModal: false,
        },
        {
          image: "/lulus-murni/category-section/sekdin.png",
          name: "6 Paket Fokus Sekolah Kedinasan",
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
          promotion: "",
          description: {
            info: [
              "Fitur Premium Tryout yang mencakup soal TWK, TIU, dan TKP dengan total 660 soal terakurat",
              "Lengkap dengan kunci jawaban & pembahasan setiap selesai tryout plus kamu bisa download soal dan jawabannya untuk belajar offline.",
              "Tersedia untuk berbagai sekolah kedinasan seperti POLTEKIP, POLTEKIM, STIS, STAN, IPDN, dan lainnya.",
              "Soal disusun sesuai aturan terbaru dengan jumlah 110 soal per paket (total 660 soal), waktu pengerjaan per paket 100 menit, serta menggunakan sistem CAT mirip ujian asli.",
              "Bobot soal sesuai aturan terbaru, raport nilai hasil tryout, dan sistem peringkat nasional, kamu juga bisa mengerjakannya berulang kali tanpa batas untuk hasil maksimal.",
              "Beli sekali untuk akses selamanya!",
            ],
            image: "/lulus-murni/category-section/modal-image-1.png",
          },
          timePromo: "",
          showModal: false,
        },
        {
          image: "/lulus-murni/category-section/sekdin.png",
          name: "6 Paket Fokus Sekolah Kedinasan",
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
          promotion: "Trending Now",
          description: {
            info: [
              "Fitur Premium Tryout yang mencakup soal TWK, TIU, dan TKP dengan total 660 soal terakurat",
              "Lengkap dengan kunci jawaban & pembahasan setiap selesai tryout plus kamu bisa download soal dan jawabannya untuk belajar offline.",
              "Tersedia untuk berbagai sekolah kedinasan seperti POLTEKIP, POLTEKIM, STIS, STAN, IPDN, dan lainnya.",
              "Soal disusun sesuai aturan terbaru dengan jumlah 110 soal per paket (total 660 soal), waktu pengerjaan per paket 100 menit, serta menggunakan sistem CAT mirip ujian asli.",
              "Bobot soal sesuai aturan terbaru, raport nilai hasil tryout, dan sistem peringkat nasional, kamu juga bisa mengerjakannya berulang kali tanpa batas untuk hasil maksimal.",
              "Beli sekali untuk akses selamanya!",
            ],
            image: "/lulus-murni/category-section/modal-image-1.png",
          },
          timePromo: "",
          showModal: false,
        },
      ],
    };
  },
};
</script>

<style></style>
