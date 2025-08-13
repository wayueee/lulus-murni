<template>
  <div class="relative">
    <button class="" @click="$emit('toggle', type.AddOn)">
      <img
        class="pb-[2px]"
        src="public/lulus-murni/product-detail/icon-info.svg"
        alt="icon-info"
      />
    </button>

    <div
      v-if="activeId === type.AddOn"
      class="absolute -left-3 bottom-6"
      :class="type.Id === '2' ? '-left-[112px] bottom-7' : ''"
    >
      <h1
        class="bg-black/70 border rounded-lg py-2 px-2 w-[200px] text-white text-[11px] md:text-[12px]"
      >
        {{ type.Description }}
      </h1>
      <img
        class="w-[100px]"
        :class="type.Id === '2' ? 'absolute right-0' : ''"
        src="public/lulus-murni/product-detail/toolTip.svg"
        :alt="type.AddOn"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowTips: false,
    };
  },
  props: {
    type: { type: Object, required: true },
    activeId: { type: Number, default: null },
  },
};
</script>

<style></style>
