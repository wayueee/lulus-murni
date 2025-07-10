<template>
  <div>
    <img
      v-if="show"
      class="fixed bottom-10 z-30 right-10 w-[100px] lg:w-[170px] xl:w-[194px] h-auto cursor-pointer"
      src="/lulus-murni/help/floating.png"
      alt="floating"
    />
    <img
      v-if="show"
      @click="show = false"
      class="fixed bottom-32 z-40 xl:bottom-52 right-10 lg:bottom-48 w-[16px] lg:w-[20px] h-auto cursor-pointer"
      src="/lulus-murni/help/close-circle.svg"
      alt="close"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>
