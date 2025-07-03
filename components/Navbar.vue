<template>
  <div class="sticky top-0 z-20 bg-white">
    <div class="container mt-[12px] pt-2 md:flex justify-between items-center">
      <div class="flex items-center">
        <img
          class="w-[165px] mb-5 h-[28px]"
          src="/lulus-murni/navbar/navbar-desktop.png"
          alt="navbar"
        />
      </div>

      <button
        class="absolute lg:hidden right-2 sm:right-10 top-2.5 cursor-pointer"
        @click="isOpen = !isOpen"
      >
        <div
          class="relative flex overflow-hidden items-center justify-center w-[40px] h-[40px] transform bg-white hover: duration-300"
        >
          <div
            class="flex flex-col justify-between w-[20px] h-[20px] transform duration-300 overflow-hidden"
          >
            <div
              class="bg-black/50 h-[1.5px] w-7 transform duration-300"
              :class="[isOpen ? 'translate-x-5' : '']"
            ></div>
            <div
              class="bg-black/50 h-[1.5px] w-7 rounded transform duration-300 delay-60"
              :class="[isOpen ? 'translate-x-5' : '']"
            ></div>
            <div
              class="bg-black/50 h-[1.5px] w-7 transform duration-300 delay-150"
              :class="[isOpen ? 'translate-x-5' : '']"
            ></div>
            <div
              class="absolute items-center justify-between transform duration-500 top-2.5 flex w-0"
              :class="[isOpen ? 'translate-x-0' : '-translate-x-10']"
            >
              <div
                class="absolute bg-black/50 h-[1.5px] w-5 transform duration-500 delay-300"
                :class="[isOpen ? 'rotate-45' : 'rotate-0']"
              ></div>
              <div
                class="absolute bg-black/50 h-[1.5px] w-5 transform duration-500 delay-300"
                :class="[isOpen ? '-rotate-45' : '-rotate-0']"
              ></div>
            </div>
          </div>
        </div>
      </button>

      <div
        class="lg:flex xl:gap-7 lg:items-center lg:px-0 px-5 md:px-14 lg:pb-0 pb-10 lg:static bg-white absolute lg:w-auto w-full top-14 duration-700 ease-in z-20"
        :class="[isOpen ? 'right-0' : 'right-[100%]']"
      >
        <div
          v-for="item in faqs"
          :key="item"
          class="bg-white pb-[16px] lg:px-[8px] xl:px-[4px]"
        >
          <div
            class="flex justify-between items-center cursor-pointer"
            @click="item.isOpen = !item.isOpen"
          >
            <h3
              class="text-[14px] lg:text-[13px] xl:text-[14px] font-semibold text-[#2D2D2D] hover:text-black/50 cursor-pointer"
            >
              {{ item.name }}
            </h3>
            <div
              v-if="item.name === 'Program Kami' || item.name === 'Partnership'"
              class="pl-1 transform transition-transform duration-300"
              :class="{ 'rotate-180': item.isOpen }"
            >
              <img src="/lulus-murni/navbar/chevron-down.svg" alt="vector" />
            </div>
          </div>
          <div
            v-if="item.isOpen"
            class="px-4 pb-4 text-[12px] lg:text-[14px] xl:text-[16px] text-[#47626F] lg:hidden"
          >
            <div
              class="font-semibold text-[14px]"
              v-for="option in item.title"
              :key="option"
            >
              <div v-if="item.name === 'Partnership'" class="flex gap-2 pt-2">
                <img :src="`/lulus-murni${option.image}`" :alt="option.name" />
                <a :href="option.link">{{ option.nameLink }}</a>
              </div>
              <div @click="option.isOpen = !option.isOpen">
                <div class="flex gap-2 pt-2">
                  <h1 class="cursor-pointer">{{ option.name }}</h1>
                </div>
                <div class="px-4" v-if="option.isOpen">
                  <div
                    class="flex gap-2 pb-2"
                    v-for="itemOption in option.option"
                    :key="itemOption"
                  >
                    <img :src="`/lulus-murni${itemOption.imageMobile}`" :alt="itemOption.name" />
                    <h1 class="mt-1 cursor-pointer">{{ itemOption.name }}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <div class="shadow-md">
              <div
                class="hidden lg:block top-14 rounded-lg absolute"
                v-if="item.isOpen"
                :class="
                  item.name === 'Program Kami'
                    ? 'left-0 bg-white h-[310px] w-full'
                    : ''
                "
              >
                <div
                  class="container duration-700 ease-in z-20"
                  :class="
                    item.name === 'Partnership'
                      ? 'px-5 pt-3 pb-1 bg-white rounded-lg mt-2'
                      : ''
                  "
                >
                  <div
                    class="font-semibold text-[14px]"
                    v-for="option in item.title"
                    :key="option"
                  >
                    <div v-if="item.name === 'Partnership'" class="flex gap-2">
                      <img :src="`/lulus-murni${option.image}`" :alt="option.name" />
                      <a :href="option.link">{{ option.nameLink }}</a>
                    </div>
                    <div class="relative" @click="option.isOpen = !option.isOpen">
                      <div
                        class="flex gap-2 mb-[16px] relative"
                        :class="item.name === 'Program Kami' ? 'pt-2' : ''"
                      >
                        <h1
                          class="cursor-pointer lg:text-[12px] xl:text-[14px] hover:text-[#249CD9] focus:text-[#249CD9]"
                        >
                          {{ option.name }}
                        </h1>
                        <div
                          v-if="item.name === 'Program Kami'"
                          class="hover:text-[#249CD9] focus:text-[#249CD9] transform transition-transform duration-300"
                          :class="{ 'rotate-90': option.isOpen }"
                        >
                          <img
                            src="/lulus-murni/navbar/chevron-up.svg"
                            alt="vector"
                          />
                        </div>
                        <div class="relative">
                          <div
                            class="flex border-l-2 absolute ml-[48px] pl-[32px] "
                            v-if="option.isOpen"
                          >
                            <div
                            class="px-[12px] lg:w-[190px] xl:w-[244px]"
                              :class="option.name === 'Tryout' ? 'mb-[68px]' : ''"
                              v-for="itemOption in option.option"
                              :key="itemOption"
                            >
                              <img
                                :src="`/lulus-murni${itemOption.imageDesktop}`"
                                :alt="itemOption.name"
                              />
                              <p class="py-2">{{ itemOption.name }}</p>
                              <p class="text-[12px] font-normal">
                                {{ itemOption.description }}
                              </p>
                            </div>
                            <div
                              v-if="option.name === 'Tryout'"
                              class="border-2 flex p-2 gap-5 absolute bottom-0 border-[#249CD9] rounded-lg"
                            >
                              <button class="text-[14px] text-[#249CD9]">
                                Lihat Semua Program
                              </button>
                              <img
                                class="w-[20px] h-[20px]"
                                src="/lulus-murni/navbar/arrow.svg"
                                alt="image"
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
          </div>
          <a
            :href="item.link"
            class="text-[14px] lg:text-[13px] xl:text-[14px] font-semibold text-[#2D2D2D] hover:text-black/50"
            >{{ item.nameLink }}</a
          >
        </div>
        <button
          class="text-[14px] lg:w-[90px] mb-2 xl:mb-3 lg:h-[30px] xl:w-[100px] xl:h-[40px] hidden lg:block bg-[#249CD9] hover:bg-blue-500 duration-300 font-semibold text-white rounded"
        >
          Login
        </button>
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
          name: "Program Kami",
          title: [
            {
              name: "Tryout",
              option: [
                {
                  name: "Kedinasan",
                  description:
                    "Lorem ipsum dolor sit amet consectetur. Eu et suspendisse in pulvinar amet nisi purus in justo. ",
                  imageDesktop: "/lulus-murni/navbar/frame-tryout.png",
                  imageMobile: "/lulus-murni/navbar/kedinasan.svg",
                },
                {
                  name: "Polri",
                  description:
                    "Lorem ipsum dolor sit amet consectetur. Eu et suspendisse in pulvinar amet nisi purus in justo. ",
                  imageDesktop: "/lulus-murni/navbar/frame-tryout.png",
                  imageMobile: "/lulus-murni/navbar/polri.svg",
                },
                {
                  name: "CPNS",
                  description:
                    "Lorem ipsum dolor sit amet consectetur. Eu et suspendisse in pulvinar amet nisi purus in justo. ",
                  imageDesktop: "/lulus-murni/navbar/frame-tryout.png",
                  imageMobile: "/lulus-murni/navbar/cpns.svg",
                },
                {
                  name: "BUMN",
                  description:
                    "Lorem ipsum dolor sit amet consectetur. Eu et suspendisse in pulvinar amet nisi purus in justo. ",
                  imageDesktop: "/lulus-murni/navbar/frame-tryout.png",
                  imageMobile: "/lulus-murni/navbar/bumn.svg",
                },
              ],
            },
            {
              name: "Tes Bahasa",
              option: [""],
            },
            {
              name: "Sertifikasi",
              option: [""],
            },
          ],
        },
        { nameLink: "Liga Tryout", link: "#" },
        { nameLink: "Kalender Rekrutment/Beasiswa", link: "#" },
        { nameLink: "Promo", link: "#" },
        { nameLink: "Mitra", link: "#" },
        {
          name: "Partnership",
          title: [
            {
              nameLink: "For Education",
              image: "/lulus-murni/navbar/pdf.svg",
              link: "#",
            },
            {
              nameLink: "For Corporate",
              image: "/lulus-murni/navbar/pdf.svg",
              link: "#",
            },
          ],
        },
      ],
      isOpen: false,
    };
  },
};
</script>

<style></style>
