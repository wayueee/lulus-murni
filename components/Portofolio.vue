<template>
  <div>
    <div
      class="hidden lg:block lg:h-[200px] xl:h-[270px] bg-cover overflow-hidden"
      style="
        background-image: url('/lulus-murni/lulus-murni/portofolio/background-portofolio-desktop.png');
      "
    >
      <div class="bg-[#01699E] h-[270px] bg-opacity-80">
        <div class="pt-[24px] container">
          <div class="grid grid-cols-4">
            <div
              class="mt-5 xl:mt-10 text-center  hidden lg:block"
              v-for="item in insight"
              :key="item"
            >
              <div class="">
                <img
                  class="xl:w-[89.51px] lg:w-[60px] my-2 h-auto mx-auto"
                  :class="item.name === '90%' ? 'ml-10' : ''"
                  :src="`/lulus-murni${item.image}`"
                  :alt="item.name"
                />
                <div class="flex flex-col text-white text-center">
                  <h1 class="xl:text-[22px] text-[18px] font-semibold"
                  :class="item.name === '90%' ? 'text-start ml-14 xl:ml-16' : ''">
                    {{ item.name }}
                  </h1>
                  <p class="text-[14px] leading-6"
                  :class="item.name === '90%' ? 'text-start' : ''">{{ item.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full lg:hidden bg-cover h-[390px]"
      style="
        background-image: url('/lulus-murni/lulus-murni/portofolio/background-portofolio-mobile.png');
      "
    >
      <div class="bg-[#01699E] h-[390px] grid grid-cols-2 bg-opacity-80">
        <div
          class="mt-5 container text-center flex justify-center lg:hidden"
          v-for="item in insight"
          :key="item"
        >
          <div class="">
            <img
              class="w-[57.47px] my-2 mx-auto h-auto"
              :src="`/lulus-murni${item.image}`"
              :alt="item.name"
            />
            <div class="flex flex-col text-white">
              <h1 class="text-[14px] font-semibold">{{ item.name }}</h1>
              <p class="text-[12px] leading-6">{{ item.title }}</p>
            </div>
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
      insight: [
        {
          image: "/lulus-murni/portofolio/star.png",
          name: "90%",
          title: "Tingkat Keberhasilan Alumni",
        },
        {
          image: "/lulus-murni/portofolio/people.png",
          name: "10.123K",
          title: "Total Peserta Tryout",
        },
        {
          image: "/lulus-murni/portofolio/book.png",
          name: "50",
          title: "Pilihan Paket Tryout",
        },
        {
          image: "/lulus-murni/portofolio/verified.png",
          name: "Standar Sertifikasi Nasional",
          title: "Ujian Prediktif & Akurat",
        },
      ],
    };
  },
};
</script>

<style></style>
