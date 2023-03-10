<template>
  <img
    v-if="!isVideo"
    :src="item.desktopImage"
    class="w-full h-full object-contain"
  />
  <video
    v-else
    :src="item.desktopImage"
    autoplay
    class="w-full h-full object-contain"
  ></video>
</template>

<script setup>
import { computed } from "vue";

const { item } = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const isVideo = computed(() => item.type === "video");
</script>

<style></style>
