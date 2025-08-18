<template>
  <div class="sticky top-0 z-20 bg-white">
    <div class="container md:flex pt-3 lg:pt-0 justify-between items-center">
      <div class="flex items-center">
        <nuxt-link to="/"
          ><img
            class="w-[165px] mb-5 h-[28px] lg:mt-4 xl:mt-5"
            src="/lulus-murni/navbar/navbar-desktop.png"
            alt="navbar"
        /></nuxt-link>
      </div>
      <!-- Button-Navbar-Mobile -->
      <button
        class="absolute lg:hidden right-2 sm:right-10 top-2 cursor-pointer"
        @click="isOpen = !isOpen"
      >
        <div
          class="relative flex overflow-hidden items-center justify-center w-[40px] h-[40px] transform bg-white hover: duration-300"
        >
          <div
            class="flex flex-col justify-between w-[20px] h-[20px] transform duration-300 overflow-hidden"
          >
            <div
              class="bg-black/50 h-[2px] w-7 transform duration-300"
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
      <!-- All-View -->
      <div
        class="lg:flex xl:gap-7 lg:items-center lg:px-0 px-5 md:px-14 lg:py-[12px] lg:pb-0 pb-10 lg:static bg-white absolute lg:w-auto w-full top-14 duration-700 ease-in z-20"
        :class="[isOpen ? 'right-0' : 'right-[100%]']"
      >
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="bg-white pb-[16px] lg:px-[8px] xl:px-[4px]"
        >
          <div
            class="flex justify-between items-center cursor-pointer"
            :class="
              item.name === 'Program Kami'
                ? 'mt-1'
                : ''
            "
          >
            <button
              @click="
                this.activeIndexParent =
                  this.activeIndexParent === index ? null : index
              "
              class="text-[14px] lg:text-[13px] xl:text-[14px] text-[#2D2D2D] hover:font-semibold pr-1 cursor-pointer"
              :class="
                activeIndexParent === index
                  ? 'lg:font-semibold font-medium'
                  : 'font-medium lg:font-normal'
              "
            >
              {{ item.name }}
            </button>
            <button
              @click="
                this.activeIndexParent =
                  this.activeIndexParent === index ? null : index
              "
              v-if="item.name === 'Program Kami' || item.name === 'Partnership'"
              class="pl-1 transform transition-transform duration-300"
              :class="activeIndexParent === index ? 'rotate-0' : 'rotate-180'"
            >
              <img src="/lulus-murni/navbar/chevron-up.svg" alt="vector" />
            </button>
          </div>
          <!-- Mobile-View -->
          <div
            v-show="activeIndexParent === index"
            class="px-4 text-[12px] lg:text-[14px] xl:text-[16px] text-[#47626F] lg:hidden"
          >
            <div
              class="font-semibold text-[14px]"
              v-for="(option, index) in item.title"
              :key="index"
            >
              <div v-if="item.name === 'Partnership'" class="flex gap-2 pt-2">
                <img :src="`/lulus-murni${option.image}`" :alt="option.name" />
                <p>{{ option.nameLink }}</p>
              </div>
              <div class="mt-2" :class="item.name === 'Partnership' ? '-mt-4' : ''" @click="option.isOpen = !option.isOpen">
                <div v-if="option.name === 'Sertifikasi'" class="pt-2">
                  <nuxt-link
                    class="cursor-pointer text-[14px] font-medium"
                    target="_blank"
                    to="https://lulusmurni.com/lp/sertifikasi-profesi/"
                    >{{ option.name }}</nuxt-link
                  >
                </div>
                  <button v-else
                    @click="toggleChild(index)"
                    class="cursor-pointer text-[14x] font-medium "
                  >
                    {{ option.name }}
                  </button>
                <div class="px-4" v-show="activeIndexChild === index">
                  <div
                    v-for="program in option.programs"
                    :key="program"
                  >
                    <router-link
                      class="flex gap-2 text-[14px] pt-2 w-full"
                      to="#"
                      @click="checkTryout(program.name)"
                    >
                      <img
                        :src="`/lulus-murni${program.imageMobile}`"
                        :alt="program.name"
                      />
                      <p class="mt-1 text-[14px] font-medium cursor-pointer">{{ program.name }}</p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="shadow-md">
            <!-- Desktop-View -->
            <transition
              enter-active-class="transition-all duration-500 ease-in-out"
              leave-active-class="transition-all duration-500 ease-in-out"
              enter-from-class="opacity-0 -translate-y-5"
              enter-to-class="opacity-90 translate-y-0"
              leave-from-class="opacity-90 translate-y-0"
              leave-to-class="opacity-0 -translate-y-5"
            >
              <div
                class="hidden lg:block top-14 rounded-lg absolute"
                v-show="activeIndexParent === index"
                :class="
                  item.name === 'Program Kami'
                    ? 'left-0 bg-white h-[370px] w-full'
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
                    v-for="(option, index) in item.title"
                    :key="index"
                  >
                    <div v-if="item.name === 'Partnership'" class="flex gap-2">
                      <img
                        :src="`/lulus-murni${option.image}`"
                        :alt="option.name"
                      />
                      <a :href="option.link">{{ option.nameLink }}</a>
                    </div>
                    <div @click="option.isOpen = !option.isOpen">
                      <div
                        class="flex gap-2"
                        :class="
                          item.name === 'Program Kami' ? 'mb-[16px] pt-2' : ''
                        "
                      >
                        <div v-if="option.name === 'Sertifikasi'">
                          <nuxt-link
                            class="cursor-pointer lg:text-[12px] xl:text-[14px] font-semibold hover:text-[#249CD9]"
                            target="_blank"
                            to="https://lulusmurni.com/lp/sertifikasi-profesi/"
                            >{{ option.name }}</nuxt-link
                          >
                        </div>
                        <div v-else>
                          <button
                            @click="toggleChild(index)"
                            class="cursor-pointer lg:text-[12px] xl:text-[14px] font-semibold hover:text-[#249CD9]"
                            :class="{
                              'text-[#249CD9]': activeIndexChild === index,
                            }"
                          >
                            {{ option.name }}
                            <span
                              :class="
                                item.name === 'Partnership' ? 'hidden' : ''
                              "
                              v-if="activeIndexChild === index"
                              >></span
                            >
                          </button>
                        </div>

                        <div>
                          <div v-show="activeIndexChild === index">
                            <div
                              class="flex border-l-2 absolute top-2 ml-[48px] pl-[32px] items"
                            >
                              <div
                                class="px-[12px] lg:w-[190px] xl:w-[244px] z-50"
                                :class="
                                  option.name === 'Tryout' ? 'mb-[68px]' : ''
                                "
                                v-for="program in option.programs"
                                :key="program"
                              >
                                <router-link
                                  class="w-full"
                                  to="#"
                                  @click="checkTryout(program.name)"
                                >
                                  <img
                                    class="rounded-lg"
                                    :src="`${program.imageDesktop}`"
                                    :alt="program.name"
                                  />
                                  <h1 class="text-[14px] font-medium pt-2 pb-1">
                                    {{ program.name }}
                                  </h1>
                                  <p class="text-[12px] text-[#5F6C73]">
                                    {{ program.description }}
                                  </p>
                                </router-link>
                              </div>
                              <div
                                v-if="option.name === 'Tryout'"
                                class="border-2 absolute bottom-0 border-[#249CD9] rounded-lg"
                              >
                                <router-link
                                  to="#"
                                  @click="allCategory('All')"
                                  class="flex p-2 gap-2 text-[14px] text-[#249CD9]"
                                >
                                  Lihat Semua Program
                                  <img
                                    class="w-[20px] h-[20px]"
                                    src="/lulus-murni/navbar/arrow.svg"
                                    alt="image"
                                  />
                                </router-link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
          <div @click="toggleParent(index)">
            <nuxt-link
              v-if="item.nameLink === 'Promo'"
              @click="toProductList(item.nameLink)"
              class="cursor-pointer text-[14px] lg:text-[13px] xl:text-[14px] text-[#2D2D2D] font-medium lg:font-normal hover:font-semibold"
              >{{ item.nameLink }}</nuxt-link
            >
            <nuxt-link
              v-else
              :to="item.link"
              class="curson-pointer text-[14px] lg:text-[13px] xl:text-[14px] text-[#2D2D2D] font-medium lg:font-normal hover:font-semibold"
              >{{ item.nameLink }}</nuxt-link
            >
          </div>
        </div>
        <div
          v-if="isLogin"
          class="hidden lg:block bg-[#FFD5AD] rounded-full mb-2 pt-2 pb-1 px-2"
        >
          <button @click="logout">
            <img src="public/lulus-murni/navbar/profile.svg" alt="" />
          </button>
        </div>
        <div v-if="isLogin" class="lg:hidden text-[14px] font-medium">
          <button @click="logout">Profile</button>
        </div>
        <button
          v-else
          @click="toLoginPage"
          class="text-[14px] w-full py-2 lg:py-0 mt-[8px] lg:mt-0 lg:w-[90px] mb-2 xl:mb-3 lg:h-[30px] xl:w-[100px] xl:h-[40px] bg-[#249CD9] hover:bg-blue-500 duration-300 font-semibold text-white rounded"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      activeIndexParent: null,
      activeIndexChild: 0,
      isLogin: false,
      isOpen: false,
      faqs: [
        {
          name: "Program Kami",
          title: [
            {
              name: "Tryout",
              isOpen: true,
              programs: [
                {
                  name: "BUMN",
                  description: "",
                  imageDesktop: "",
                  imageMobile: "/lulus-murni/navbar/bumn.svg",
                },
                {
                  name: "CPNS",
                  description: "",
                  imageDesktop: "",
                  imageMobile: "/lulus-murni/navbar/cpns.svg",
                },
                {
                  name: "POLRI",
                  description: "",
                  imageDesktop: "",
                  imageMobile: "/lulus-murni/navbar/polri.svg",
                },
                {
                  name: "SEKOLAH KEDINASAN",
                  description: "",
                  imageDesktop: "",
                  imageMobile: "/lulus-murni/navbar/kedinasan.svg",
                },
              ],
            },
            {
              name: "Tes Bahasa",
              programs: [
                {
                  name: "TOEFL",
                  description: "",
                  imageDesktop: "",
                  imageMobile: "/lulus-murni/navbar/cpns.svg",
                },
              ],
            },
            {
              name: "Sertifikasi",
            },
          ],
        },
        { nameLink: "Kategori", link: "/#category" },
        { nameLink: "Testimonial", link: "/#testimonial" },
        { nameLink: "Promo", link: "" },
        { nameLink: "Mitra", link: "/" },
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
      categories: [],
    };
  },
  methods: {
    async getCategories() {
      try {
        const response = await axios.get("/api/categories");
        const data = response.data;
        if (data.success && data.data) {
          this.categories = data.data.data;
          // console.log(this.categories);

          // tryout SECTION
          const tryout = ["SEKOLAH KEDINASAN", "POLRI", "CPNS", "BUMN"];
          const filtered = this.categories.filter((category) =>
            tryout.includes(category.Name.toUpperCase())
          );
          const defaultMobileImages = this.faqs[0].title[0].programs.map(
            (item) => item.imageMobile
          );

          this.faqs[0].title[0].programs = filtered.map((category, index) => {
            const firstSentence = category.Description.split(".")[0] + ".";
            return {
              name: category.Name,
              description: firstSentence,
              imageDesktop: category.ImageURL
                ? category.ImageURL
                : defaultMobileImages[index],
              imageMobile: defaultMobileImages[index],
            };
          });

          //Tes Bahasa SECTION
          const tesBahasa = ["TOEFL"];
          const filteredTes = this.categories.filter((category) =>
            tesBahasa.includes(category.Name.toUpperCase())
          );
          const defaultMobileImagesTes = this.faqs[0].title[0].programs.map(
            (category) => category.imageMobile
          );

          this.faqs[0].title[1].programs = filteredTes.map(
            (category, index) => {
              const firstSentence = category.Description.split(".")[0] + ".";
              return {
                name: category.Name,
                description: firstSentence,
                imageDesktop: category.ImageURL
                  ? category.ImageURL
                  : defaultMobileImagesTes[index],
                imageMobile: defaultMobileImagesTes[index],
              };
            }
          );
        } else {
          console.error("Gagal:", data.message);
        }
      } catch (err) {
        console.error("Gagal ambil data:", err);
      } finally {
        this.loading = false;
      }
    },
    toggleParent(index) {
      this.isOpen = false;
      this.activeIndexParent = this.activeIndexParent === index ? null : index;
    },
    toggleChild(index) {
      this.activeIndexChild = this.activeIndexChild === index ? null : index;
    },
    checkTryout(name) {
      const saved = { name: name || "", tag: "" };
      localStorage.setItem("selectedName", JSON.stringify(saved));
      this.$router.push(`/product-list/${name}`);
    },
    allCategory(value) {
      const saved = { tag: value || "", name: "" };
      localStorage.setItem("selectedName", JSON.stringify(saved));
      this.$router.push(`/product-list/${value}`);
    },
    toLoginPage() {
      this.$router.push(`/login`);
    },
    logout() {
      this.isLogin = false;
      localStorage.removeItem("isLogin");
    },
    toProductList(link) {
      const savedFilter = { tag: link || "", name: "" };
      localStorage.setItem("selectedName", JSON.stringify(savedFilter));
      this.$router.push(`/product-list/${link}`);
    },
  },
  mounted() {
    this.getCategories();
    const login = localStorage.getItem("isLogin");
    if (login) {
      const isLogin = JSON.parse(login);
      this.isLogin = isLogin;
      // console.log(isLogin);
    }
  },
};
</script>

<style></style>
