<template>
  <div class="container">
    <div class="text-center">
      <h1
        class="mt-[32px] font-semibold text-[16px] md:text-[18px] lg:text-[22px]"
      >
        Frequently Asked Questions
      </h1>
      <p class="text-[12px] mt-1 mx-6 md:text-[14px] lg:text-[18px]">
        Berikut ini beberapa pertanyaan yang sering ditanyakan.
      </p>
      <img
        class="md:hidden mx-auto my-5 w-[301px] h-auto"
        src="/lulus-murni/faq-section/faq-background.png"
        alt="background"
      />
    </div>
    <div class="mt-2 lg:my-10 md:grid md:grid-cols-2">
      <div>
        <img
          class="hidden md:block w-[310px] lg:w-[400px] xl:w-[500px] h-auto"
          src="/lulus-murni/faq-section/faq-background.png"
          alt="background"
        />
      </div>
      <div class="flex flex-col justify-between">
        <div>
          <div
            v-for="(item, index) in paginatedFaqs"
            :key="index"
            class="border mt-[10px] rounded-md mb-[16px]  bg-white shadow-md"
          >
            <div
              class="flex justify-between items-center p-2 px-3 cursor-pointer"
              @click="toggle(index)"
            >
              <h3  :class="isOpen === index ? 'text-[#249CD9]': ''" class="font-semibold text-[12px] md:text-[14px]">
                {{ item.question }}
              </h3>
              <div
                class="text-[#249CD9] transform transition-transform duration-300"
                :class="{ 'rotate-90': isOpen === index }"
              >
                >
              </div>
            </div>
            <div
              v-show="isOpen === index"
              class="mb-2 px-3 text-black text-[12px] md:text-[14px]"
            >
              {{ item.answer }}
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="flex justify-center gap-2 h-auto my-5">
            <button @click="prevPage" :disabled="currentPage === 0">
              <img  :class="currentPage === 0 ? 'opacity-60 cursor-not-allowed' : ''"
                src="/lulus-murni/faq-section/next.svg"
                alt="prev"
                class="rotate-180"
              />
            </button>
            <button @click="nextPage" :disabled="endIndex >= faqs.length">
              <img  :class="endIndex >= faqs.length ? 'opacity-60 cursor-not-allowed' : ''" src="/lulus-murni/faq-section/next.svg" alt="next" />
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
      isOpen: null,
      isSwipe: false,
      currentPage: 0,
      itemsPerPage: 5,
      faqs: [
        {
          question: "Apa itu LulusMurni.com?",
          answer:
            "LulusMurni.com adalah platform online yang menyediakan layanan simulasi tryout, latihan soal, dan persiapan tes seperti TOEFL, CPNS, PPPK, dan lainnya untuk membantu pengguna lulus seleksi akademik maupun pekerjaan.",
        },
        {
          question: "Apakah tryout bisa diakses tanpa login?",
          answer:
            "Kamu bisa mulai tryout dengan mendaftar akun atau langsung checkout paket Tryout yang kamu inginkan di halaman Utama lulusmurni.com!",
        },
        {
          question:
            "Apakah soal di Lulusmurni.com sesuai dengan kisi-kisi terbaru? ",
          answer:
            "Ya, semua soal dibuat berdasarkan referensi terbaru dan disusun oleh tim akademisi berpengalaman agar sesuai dengan kisi-kisi resmi dan tren soal tahun berjalan.",
        },
        {
          question: "Bagaimana cara mengerjakan tryout?",
          answer:
            "Setelah membeli paket tryout, kamu bisa langsung login dan mulai ujian. Kamu bisa mengerjakan tryout dari laptop atau smartphone kapan saja & dimana saja.",
        },
        {
          question: "Apakah Tryout-nya bisa diulang?",
          answer: "Tentu! Kamu bisa ulang tryout sepuasnya.",
        },
        {
          question: "Apakah hasil tryout bisa diunduh?",
          answer:
            "Ya, soal, pembahasan & kunci jawaban bisa kamu unduh dalam format PDF untuk bahan belajar mandiri. ",
        },
        {
          question: "Bagaimana cara melakukan pembayaran?",
          answer:
            "Pembayaran bisa dilakukan melalui QRIS, transfer bank, e-wallet (OVO, Dana, GoPay, Shopeepay, LinkAja), dan payment gateway yang kami sediakan. Proses konfirmasi cepat dan otomatis. ",
        },
        {
          question: "Jika ada kendala teknis, siapa yang bisa dihubungi?",
          answer:
            "Kamu bisa menghubungi tim support kami melalui WhatsApp atau email ke support@lulusmurni.com. Kami siap membantu.",
        },
      ],
    };
  },
  computed: {
    startIndex() {
      return this.currentPage * this.itemsPerPage;
    },
    endIndex() {
      return this.startIndex + this.itemsPerPage;
    },
    paginatedFaqs() {
      return this.faqs.slice(this.startIndex, this.endIndex);
    },
  },
  methods: {
    toggle(index) {
      this.isOpen = this.isOpen === index ? null : index;
    },
    nextPage() {
      if (this.endIndex < this.faqs.length) {
        this.currentPage++;
        this.isOpen = null;
      }
    },
    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
        this.isOpen = null;
      }
    },
  },
};
</script>

<style></style>
