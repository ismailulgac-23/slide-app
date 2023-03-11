<template>
  <div
    v-if="!isVideo"
    class="w-full h-full object-contain image"
    :style="getImage"
  />
  <video v-else :src="item.desktopImage" autoplay class=""></video>
</template>

<script setup>
import { computed } from "vue";

const { item } = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const getImage = computed(
  () => `
  background-image: url(${item.desktopImage});
`
);
const isVideo = computed(() => item.type === "video");
</script>

<style scoped>
.image {
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
}
</style>
