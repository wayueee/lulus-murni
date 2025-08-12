<template>
  <div class="relative w-full overflow-hidden">
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="flex-shrink-0 w-full md:h-[400px]"
      >
        <img class="w-full h-auto" :src="slide" alt="background" />
      </div>
    </div>

    <button
      @click="prevSlide"
      class="absolute text-[16px] lg:text-[20px] left-4 top-1/2 -translate-y-1/2 "
    >
      <img class="rotate-180 w-8 lg:w-12" src="public/lulus-murni/intro-section/next.svg" alt="" />
    </button>

    <button
      @click="nextSlide"
      class="absolute text-[16px] lg:text-[20px] right-4 top-1/2 -translate-y-1/2 "
    >
      <img class="w-8 lg:w-12" src="public/lulus-murni/intro-section/next.svg" alt="" />
    </button>

    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full cursor-pointer"
        :class="currentSlide === index ? 'bg-white' : 'bg-white/50'"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        "https://lulusmurni.com/assets/media/image/kategori/pppk.jpg",
        "https://lulusmurni.com/assets/media/image/kategori/bumn.jpg",
        "https://lulusmurni.com/assets/media/image/kategori/cpns.jpg",
      ],
    };
  },
  methods: {
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
  },
};
</script>
