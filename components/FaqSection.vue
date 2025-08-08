<template>
  <div class="container">
    <div class="text-center">
      <h1 class="mt-[32px] font-semibold text-[16px] md:text-[18px] lg:text-[22px]">
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
    <div class="mt-2 lg:mt-10 md:grid md:grid-cols-2 ">
        <div>
            <img
           class="hidden md:block w-[310px] lg:w-[400px] xl:w-[500px] h-auto"
           src="/lulus-murni/faq-section/faq-background.png"
           alt="background"
         />
        </div>
        <div>
            <div
              v-for="item in faqs"
              :key="item"
              class="border rounded-md mb-[16px] text-[#249CD9] bg-white shadow-md"
            >
              <div
                class="flex justify-between items-center p-2 px-3 lg:p-4 cursor-pointer"
                @click="item.isOpen = !item.isOpen"
              >
                <h3 class="font-semibold text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
                  {{ item.question }}
                </h3>
      
                <div
                  class="text-[#249CD9] transform transition-transform duration-300"
                  :class="{ 'rotate-90': item.isOpen }"
                >
                  >
                </div>
              </div>
              <div v-if="item.isOpen" class="px-4 pb-4 text-[11px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-[#2d2d2d]">
                {{ item.answer }}
              </div>
            </div>
            <div class="hidden md:block">
                <div class="flex justify-center h-auto my-5">
                    <img src="/lulus-murni/faq-section/previous.svg" alt="icon">
                    <img class="pl-5" src="/lulus-murni/faq-section/next.svg" alt="icon">
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
          question: "Apakah soal di Lulusmurni.com sesuai dengan kisi-kisi terbaru? ",
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
          answer:
            "Tentu! Kamu bisa ulang tryout sepuasnya.",
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
};
</script>

<style></style>
