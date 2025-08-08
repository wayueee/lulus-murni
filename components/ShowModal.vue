<template>
  <div class="my-1">
    <button
      @click="isShowModal = true"
      class="text-[12px] font-semibold text-[#249CD9]"
    >
      Lihat Deskripsi Paket >
    </button>
  </div>
  <div v-if="isShowModal" class="relative z-10">
    <div
      class="fixed inset-0 bg-gray-500/75 transition-opacity"
      @click="isShowModal = false"
    ></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex justify-center mt-10 p-4">
        <div
          class="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-8 w-full xl:max-w-4xl"
        >
          <div class="bg-white p-[12px] w-full h-auto rounded-lg">
            <div>
              <div class="flex gap-2 justify-between">
                <h3 class="text-[14px] font-bold text-[#1385BF]">
                  {{ category.Name }}
                </h3>
                <button @click="isShowModal = false">
                  <img
                    src="/lulus-murni/category-section/close-modal.svg"
                    alt=""
                  />
                </button>
              </div>
              <div class="flex gap-5">
                <div class="mt-2">
                  <p class="text-[12px] lg:text-[14px]">
                    Benefit yang akan kamu dapatkan:
                  </p>
                  <div class="flex my-2">
                    <img
                      class="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] mt-1 mr-2 rounded-lg border-1"
                      src="/lulus-murni/category/ckeck-category.png"
                      alt="check"
                    />
                    <div
                      class="text-[12px] lg:text-[14px]"
                      v-html="category.Description"
                    ></div>
                  </div>
                  <img
                    class="my-3 w-full h-auto rounded-lg border-2 border-[#D7E6F0] md:hidden"
                    :src="`${category.ImageURL}`"
                    :alt="category.Name"
                  />
                </div>
                <div>
                  <img
                    class="my-3 w-full h-auto rounded-lg border-2 border-[#D7E6F0] hidden md:block"
                    :src="`${category.ImageURL}`"
                    :alt="category.Name"
                  />
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
            isShowModal: false,
        }
    },
    props:{
        category:{
            type: Object,
            default:() => {},
        }
    }
};
</script>

<style></style>
