<template>
  <div class="w-full h-full bg-[#292730] flex items-center justify-center">
    <div
      v-if="!isVideo"
      class="w-full h-full object-contain image"
      :style="getImage"
    />
    <video v-else :src="item.desktopImage" autoplay class="mx-auto"></video>
    <div
      v-if="isLinkShow"
      class="absolute bottom-5 w-full px-2 py-1 bg-[#0000009a] z-50 grid place-items-center"
    >
      <a :href="item.url" target="_blank" class="text-white">
        {{ item.linkTitle }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";

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
const isLinkShow = computed(() => item.link !== null && item.url !== null);
</script>

<style scoped>
.image {
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
}
</style>
