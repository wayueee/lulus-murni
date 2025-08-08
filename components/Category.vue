<template>
  <div class="container">
    <h1
      class="lg:text-[22px] text-[14px] md:text-[16px] mt-5 mb-2 font-semibold"
    >
      Kategori
    </h1>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[12px] lg:gap-[16px] xl:gap-[20px]"
    >
      <div
        class="xl:w-[265px] flex flex-col justify-between relative w-full h-auto mb-2 lg:w-[220px] border-2 p-2 lg:p-[10px] rounded-lg"
        v-for="card in data.slice(0, showCount)"
        :key="card"
      >
        <img
          class="w-full h-auto bg-cover rounded-md"
          :src="`${card.ImageURL}`"
          :alt="card.Name"
        />

        <div class="relative w-full h-full pt-[8px] ">
          <h1 class="font-bold text-[12px] lg:text-14">{{ card.Name }}</h1>
          <div class="lg:flex mb-3 justify-between">
            <p class="text-[10px] font-light lg:text-[11px]">
              {{ card.Packages }} Paket Tersedia
            </p>
            <p class="text-[11px] lg:text-[12px] text-[#0DBC16]">
              Mulai dari <span class="font-bold">{{ card.Price }}</span>
            </p>
          </div>
          <div
            class="flex my-1"
            v-for="benefit in card.Benefits"
            :key="benefit"
          >
            <img
              class="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] mr-1 rounded-lg border-1"
              src="/lulus-murni/category/ckeck-category.png"
              alt="check"
            />
            <h1 class="text-[10px] font-semibold lg:text-[12px]">
              {{ benefit }}
            </h1>
          </div>
        </div>
        <div class="">
          <button
            @click="checkTryout(card.Name)"
            class="w-full sm:w-full text-[14px] mt-1 xl:mb-2 rounded-lg h-[34px] lg:h-[30px] xl:h-[40px] font-semibold bg-[#249CD9] text-white"
          >
            Lihat Tryout
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-center my-5 lg:my-10">
      <button
        v-if="showCount < data.length"
        @click="showCount = data.length"
        class="flex text-[#249CD9] font-semibold text-[12px] lg:text-[14px]"
      >
        Tampilkan semua
        <img
          class="w-[14px] lg:w-[20px] h-auto mx-1"
          src="/lulus-murni/category/chevron-up-line.png"
          alt=""
        />
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showCount: 4,
      categories: [],
      data: [],
      // cards: [
      //   {
      //     image: "/lulus-murni/category/toefl.png",
      //     name: "TOEFL",
      //     price: "Rp.0",
      //     paket: "2 Paket Tersedia",
      //     benefits: ["Pembahasan Lengkap", "Dilengkapi Skor Prediksi & Ulasan"],
      //   },
      //   {
      //     image: "/lulus-murni/category/bumn.png",
      //     name: "BUMN",
      //     price: "Rp.30.000",
      //     paket: "2 Paket Tersedia",
      //     benefits: [
      //       "Simulasi Real-time + Pembahasan",
      //       "Hasil Instan & Download Soal",
      //     ],
      //   },
      //   {
      //     image: "/lulus-murni/category/polri.png",
      //     name: "POLRI",
      //     price: "Rp.99.000",
      //     paket: "2 Paket Tersedia",
      //     benefits: [
      //       "Soal Prediktif Kisi-kisi Terbaru",
      //       "Dilengkapi Skor Prediksi & Ulasan",
      //     ],
      //   },
      //   {
      //     image: "/lulus-murni/category/cpns.png",
      //     name: "CPNS",
      //     price: "Rp.0",
      //     paket: "4 Paket Tersedia",
      //     benefits: ["Soal Akurat Standar BKN", "Simulasi Jitu + Pembahasan"],
      //   },
      //   {
      //     image: "/lulus-murni/category/pppk.png",
      //     name: "PPPK",
      //     price: "Rp.0",
      //     paket: "4 Paket Tersedia",
      //     benefits: ["Soal Akurat Standar BKN", "Simulasi Jitu + Pembahasan"],
      //   },
      //   {
      //     image: "/lulus-murni/category/sekdin.png",
      //     name: "SEKDIN",
      //     price: "Rp.0",
      //     paket: "4 Paket Tersedia",
      //     benefits: ["Soal Akurat Standar BKN", "Simulasi Jitu + Pembahasan"],
      //   },
      // ],
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    checkTryout(Name) {
      const savedName = {
        name: Name || "",
        
      };
      console.log(savedName);
      localStorage.setItem("selectedName", JSON.stringify(savedName));
      this.$router.push(`/product-list/${Name}`);
    },

    async getCategories() {
      try {
        const response = await axios.get("/api/categories");
        const data = response.data;
        if (data.success && data.data) {
          this.categories = data.data;
          this.data = this.categories.data;
          // console.log(this.data);
        } else {
          console.error("Gagal:", data.message);
        }
      } catch (err) {
        console.error("Gagal ambil data:", err);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style></style>
