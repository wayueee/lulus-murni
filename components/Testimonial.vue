<template>
  <div class="bg-[#3B3D3E] ">
    <div class="relative container" >
      <div
      class=" mt-[30px] text-white pt-[52px] lg:pt-[146px] pb-[50px] "
      >
      <img  class="absolute hidden lg:block left-3 xl:left-[82px] top-[452px]" src="/lulus-murni/testimonial/icon.svg" alt="icon">
      <img  class="absolute hidden lg:block right-16 top-[73px] w-[110px] h-auto" src="/lulus-murni/testimonial/vector-book.svg" alt="vector-book">
      <img  class="absolute hidden lg:block right-8 top-[190px] xl:top-[173px] w-[78px] h-auto" src="/lulus-murni/testimonial/star-ballon.svg" alt="star">
      <img  class="absolute lg:hidden left-[24px] top-[30px] w-[12px] h-auto" src="/lulus-murni/testimonial/icon.svg" alt="icon">
      <img  class="absolute lg:hidden right-0 top-[108px] w-[53px] h-auto" src="/lulus-murni/testimonial/vector-book.svg" alt="vector-book">
      <div class="flex justify-center">
          <h1
            class="text-center text-[14px] lg:text-[24px] xl:w-[815px] xl:h-[80px] font-semibold"
          >
            Ratusan peserta sudah mengikuti
            <span class="text-[#21B0F9]">Tryout</span> di
            <span class="text-[#21B0F9]">Lulusmurni.com</span> dan lulus dengan
            hasil yang sangat memuaskan.
          </h1>
        </div>
        <div class="mt-[32px]">
          <div class="flex justify-between my-5 gap-1">
            <div class="flex">
              <h1 class="text-[14px] lg:text-[18px]">Kata mereka di</h1>
              <div>
                <img
                  class="ml-2 lg:mt-1"
                  src="/lulus-murni/testimonial/x-icon.svg"
                  alt="icon-x"
                />
              </div>
            </div>
            <div class="flex w-[50px] gap-[10px] md:w-[60px] h-auto">
              <button @click="previousTwiter">
                <img src="/lulus-murni/testimonial/previous.svg" alt="" />
              </button>
                <button @click="nextTwiter">
                <img src="/lulus-murni/testimonial/next.svg" alt="" />
              </button>
            </div>
          </div>
          <div ref="scrollTwitter"
            class="hide-scroll-bar overflow-auto whitespace-nowrap scroll-smooth"
          >
            <div class="flex w-[1000px] lg:w-[1200px] xl:w-[1500px]">
              <div class="mx-1" v-for="xPost in xPosts" :key="xPost">
                <img
                  class="h-[210px] lg:h-[260px] xl:h-[320px]"
                  :src="`/lulus-murni${xPost}`"
                  alt="icon-x"
                />
              </div>
            </div>
          </div>
          <div class="flex justify-between my-5 gap-1">
            <div class="flex">
              <h1 class="text-[14px] lg:text-[18px]">Kata mereka di</h1>
              <div>
                <img
                  class="ml-2 lg:mt-1"
                  src="/lulus-murni/testimonial/tiktok-icon.svg"
                  alt="icon-x"
                />
              </div>
            </div>
            <div class="flex w-[50px] gap-[10px] md:w-[60px] h-auto">
              <button @click="previousTiktok">
                <img src="/lulus-murni/testimonial/previous.svg" alt="" />
              </button>
              <button @click="nextTiktok">
                <img src="/lulus-murni/testimonial/next.svg" alt="" />
              </button>
            </div>
          </div>
          <div ref="scrollTiktok"
            class="hide-scroll-bar overflow-auto whitespace-nowrap scroll-smooth"
          >
            <div class="flex w-[1000px] lg:w-[1200px] xl:w-[1500px]">
              <div class="mx-1" v-for="tiktokPost in tiktokPosts" :key="tiktokPost">
                <div class="relative">
                  <img
                    class="h-[210px] lg:h-[260px] xl:h-[320px]"
                    :src="`/lulus-murni${tiktokPost}`"
                    alt="icon-x"
                  />
                  <div
                    class="flex rounded-full bg-black/50 w-[146px] h-[35px] absolute bottom-5 left-2 lg:left-7 xl:left-12 bg-opacity-50"
                  >
                    <button class="text-[12px] ml-3 font-semibold">
                      Lihat Postingan
                    </button>
                    <img
                      class="w-[20px] mx-auto h-auto"
                      src="/lulus-murni/testimonial/vector.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
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
      xPosts: [
        "/lulus-murni/testimonial/x-post.png",
        "/lulus-murni/testimonial/x-post.png",
        "/lulus-murni/testimonial/x-post.png",
        "/lulus-murni/testimonial/x-post.png",
        "/lulus-murni/testimonial/x-post.png",
        "/lulus-murni/testimonial/x-post.png",
      ],
      tiktokPosts: [
        "/lulus-murni/testimonial/tiktok-post.png",
        "/lulus-murni/testimonial/tiktok-post.png",
        "/lulus-murni/testimonial/tiktok-post.png",
        "/lulus-murni/testimonial/tiktok-post.png",
        "/lulus-murni/testimonial/tiktok-post.png",
        "/lulus-murni/testimonial/tiktok-post.png",
      ],
    };
  },
  methods: {
    nextTwiter (){
      const next = this.$refs.scrollTwitter
      next.scrollLeft += 200
    },
    previousTwiter (){
      const next = this.$refs.scrollTwitter
      next.scrollLeft -= 200
    },
    nextTiktok (){
      const next = this.$refs.scrollTiktok
      next.scrollLeft += 200
    },
    previousTiktok (){
      const next = this.$refs.scrollTiktok
      next.scrollLeft -= 200
    },
  },
};
</script>

<style>
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>
