<template>
  <div class="bg-[#085278]">
    <div class="py-[32px] container text-white">
      <div class="lg:flex">
        <div class="lg:w-[362px] xl:w-[300px] lg:mr-[52px] xl:mr-[20%]">
          <img
            class="w-[150px] lg:w-[200px] h-auto"
            src="/lulus-murni/footer/lulus-murni-footer.png"
            alt="text-lulus-murni"
          />
          <p
            class="mb-[32px] mt-[12px] text-[12px] lg:text-[14px] lg:leading-[30px]"
          >
            Platform Ujian CAT/CBT, Tryout dan Sertifikasi berbasis Online untuk
            mendukung proses dan persiapanmu meraih impian.
          </p>
          <div class="hidden lg:block">
            <div class="gap-5 flex h-[auto]">
              <button>
                <img src="/lulus-murni/footer/facebook-icon.svg" alt="icon" />
              </button>
              <button>
                <img src="/lulus-murni/footer/instagram-icon.svg" alt="icon" />
              </button>
              <button>
                <img src="/lulus-murni/footer/twitter-icon.svg" alt="icon" />
              </button>
            </div>
          </div>
        </div>
        <div class="mb-[32px] grid grid-cols-2 gap-5 xl:h-[230px]">
          <div class="lg:w-[196px]">
            <h1 class="mb-[8px] text-[14px] font-semibold lg:text-[20px]">
              LulusMurni.com
            </h1>
            <div class="text-[12px] lg:text-[14px] flex flex-col">
              <a class="hover:text-black/70" href="">Program Kami</a>
              <a class="my-[12px] hover:text-black/70" href="">Liga TryOut</a>
              <a class="hover:text-black/70" href=""
                >Kalender Rekrutmen/Beasiswa</a
              >
              <a class="my-[12px] hover:text-black/70" href="">Promo</a>
              <a class="hover:text-black/70" href="">Mitra</a>
              <a class="mt-[12px] hover:text-black/70" href="">Partnership</a>
            </div>
          </div>
          <div class="xl:ml-[53px] xl:mr-[62px]">
            <h1 class="mb-[8px] text-[14px] font-semibold lg:text-[20px]">
              Tes Populer
            </h1>
            <div class="text-[12px] lg:text-[14px] flex flex-col">
              <router-link
                class="hover:text-black/70"
                :to="{ path: '/product-list/CPNS' }"
              >
                CPNS
              </router-link>

              <router-link
                class="hover:text-black/70 my-[12px]"
                :to="{ path: '/product-list/BUMN' }"
              >
                BUMN
              </router-link>

              <router-link
                class="hover:text-black/70"
                :to="{ path: '/product-list/PPPK' }"
              >
                PPPK
              </router-link>

              <router-link
                class="hover:text-black/70 mt-[12px]"
                :to="{ path: '/product-list/TOEFL' }"
              >
                TOEFL
              </router-link>
            </div>
          </div>
        </div>
        <div class="mt-[32px] lg:mt-0 mb-[8px] flex flex-col">
          <h1 class="font-semibold text-[14px] lg:text-[20px]">Hubungi Kami</h1>
          <div class="flex flex-col text-[12px] mt-[8px] lg:text-[14px]">
            <p>Kontak</p>
            <a class="hover:text-black/70 py-[4px]" href=""
              >Halo@lulusMurni.com</a
            >
            <a class="hover:text-black/70" href="">0822-1322-2085</a>
          </div>
          <div class="flex flex-col text-[12px] lg:text-[14px] mt-[12px]">
            <p>Jam Operasional</p>
            <p class="py-[4px]">Setiap Hari</p>
            <p>09.00 - 21.00</p>
          </div>
        </div>
      </div>
      <div class="hidden lg:block">
        <div
          class="flex justify-center pt-5 border-t-2 border-white/80 lg:mt-10"
        >
          <p>Copyright PT Cendikia Lentera Bangsa 2025 All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
