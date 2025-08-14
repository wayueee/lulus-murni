<template>
  <div class="bg-[#085278]">
    <div class="py-[32px] container text-white">
      <div class="lg:grid lg:grid-cols-2">
        <div class="lg:w-[362px] xl:w-[300px]">
          <img
            class="w-[150px] lg:w-[200px] h-auto"
            src="/lulus-murni/footer/lulus-murni-footer.png"
            alt="text-lulus-murni"
          />
          <p
            class="mb-[32px] mt-[12px] text-[12px] lg:text-[14px] w-[280px] lg:leading-[30px]"
          >
            Platform Ujian CAT/CBT, Tryout dan Sertifikasi berbasis Online untuk
            mendukung proses dan persiapanmu meraih impian.
          </p>
          <div class="hidden lg:block">
            <div class="gap-5 flex h-[auto]">
              <a href="">
                <img src="/lulus-murni/footer/facebook-icon.svg" alt="icon" />
              </a>
              <a
                href="https://www.instagram.com/lulusmurnidotcom/#"
                target="_blank"
              >
                <img src="/lulus-murni/footer/instagram-icon.svg" alt="icon" />
              </a>
              <a href="">
                <img src="/lulus-murni/footer/twitter-icon.svg" alt="icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="mb-[32px] grid grid-cols-2 md:grid-cols-3 gap-5 xl:h-[230px]">
          <div class="lg:w-[196px]">
            <h1 class="mb-[8px] text-[14px] font-semibold lg:text-[18px] xl:text-[20px]">
              LulusMurni.com
            </h1>
            <div class="text-[12px] lg:text-[14px] flex flex-col">
              <a class="hover:text-black/70 mb-[8px] text-[12px] lg:text-[14px]" href="#category"
                >Program Kami</a
              >
              <!-- <a class="my-[12px] hover:text-black/70" href="">Liga TryOut</a>
              <a class="hover:text-black/70" href=""
                >Kalender Rekrutmen/Beasiswa</a
              > -->
              <div class="text-[12px] lg:text-[14px] flex flex-col">
                <router-link
                  v-for="tag in tags"
                  :key="tag"
                  class="text-[12px] lg:text-[14px] hover:text-black/70 mb-[8px]"
                  @click="toPromo(tag)"
                  to="#"
                  >{{ tag }}</router-link
                >
              </div>
              <!-- <a class="hover:text-black/70" href="">Mitra</a>
              <a class="mt-[12px] hover:text-black/70" href="">Partnership</a> -->
            </div>
          </div>
          <div class="xl:ml-[10px] xl:mr-[62px]">
            <h1 class="mb-[8px] text-[14px] font-semibold lg:text-[18px] xl:text-[20px]">
              Tes Populer
            </h1>
            <div class="text-[12px] lg:text-[14px] flex flex-col">
              <router-link
                v-for="category in categories"
                :key="category"
                class="text-[12px] lg:text-[14px] hover:text-black/70 mb-[8px]"
                @click="checkTryout(category)"
                to="#"
              >
                {{ category }}
              </router-link>
            </div>
          </div>
      
        <div class=" lg:mt-0 mb-[8px] r flex flex-col">
          <h1 class="font-semibold text-[14px] lg:text-[19px] xl:text-[20px]">Hubungi Kami</h1>
          <div class="flex flex-col text-[12px] mt-[8px] lg:text-[14px]">
            <p>Kontak</p>
            <a
              class="hover:text-black/70 py-[4px] text-[12px] lg:text-[14px]"
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=Halo@lulusmurni.com"
              >halo@lulusmurni.com</a
            >
            <a
              class="hover:text-black/70 text-[12px] lg:text-[14px]"
              target="_blank"
              href="https://wa.me/6282213222085"
              >0822-1322-2085</a
            >
          </div>
          <div class="flex flex-col text-[12px] lg:text-[14px] mt-[12px]">
            <p class="text-[12px] lg:text-[14px] ">Jam Operasional</p>
            <p class="text-[12px] lg:text-[14px] py-[4px]">Setiap Hari</p>
            <p class="text-[12px] lg:text-[14px]">09.00 - 21.00</p>
          </div>
          <div class="lg:hidden my-[16px]">
            <div class="gap-5 flex h-[auto]">
              <a href="">
                <img
                  class="w-5"
                  src="/lulus-murni/footer/facebook-icon.svg"
                  alt="icon"
                />
              </a>
              <a
                href="https://www.instagram.com/lulusmurnidotcom/#"
                target="_blank"
              >
                <img
                  class="w-5"
                  src="/lulus-murni/footer/instagram-icon.svg"
                  alt="icon"
                />
              </a>
              <a href="">
                <img
                  class="w-5"
                  src="/lulus-murni/footer/twitter-icon.svg"
                  alt="icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
        </div>
      <div class="">
        <div
          class="flex justify-center pt-3 lg:pt-5 border-t-2 border-white/80 text-[12px] lg:mt-10"
        >
          <p>Copyright PT Cendikia Lentera Bangsa 2025 All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: ["Top Pick", "Promo"],
      categories: ["CPNS", "BUMN", "PPPK", "TOEFL"],
    };
  },
  methods: {
    toPromo(Tag) {
      const savedFilter = { tag: Tag || "", name: "" };
      localStorage.setItem("selectedName", JSON.stringify(savedFilter));
      this.$router.push(`/product-list/${Tag}`);
    },
    checkTryout(Name) {
      const savedFilter = { name: Name || "", tag: "" };
      localStorage.setItem("selectedName", JSON.stringify(savedFilter));
      this.$router.push(`/product-list/${Name}`);
    },
  },
};
</script>

<style></style>
