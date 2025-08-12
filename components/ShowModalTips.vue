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
      class="absolute -left-3 bottom-6 w-[100px]"
    >
      <img
        src="public/lulus-murni/product-detail/toolTip.svg"
        :alt="type.AddOn"
      />
    </div>

    <div
      v-if="activeId === type.AddOn"
      class="absolute -left-20 -top-[44px] md:-top-[58px] lg:-top-[64px] bg-black/70 border rounded-lg py-2 px-2 w-[200px] md:w-[220px] lg:w-[250px]"
      :class="type.Id === '3' ? ' md:-left-40':'' ||type.Id === '2' ? '-left-44 md:-left-20':''"
    >
      <h1 class="text-white text-[11px] md:text-[12px] lg:text-[14px]">
        {{ type.Description }}
      </h1>
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
