<template>
  <div
    @click="toggle"
    class="w-[90px] select-none h-[90px] cursor-pointer flex items-center justify-center flex-col gap-1"
  >
    <img
      :src="story.image"
      class="w-[70px] h-[70px] object-cover rounded-full"
    />
    <h1 class="text-xs text-center">{{ getTitle }}</h1>
  </div>
  <StoryModal v-if="isShowModal" :toggle="toggle" :items="story.items" />
</template>

<script setup>
import { computed, ref } from "vue";
import StoryModal from "./StoryModal/index.vue";

const { story } = defineProps({
  story: {
    type: Object,
    required: true,
  },
});

const getTitle = computed(() =>
  story.title.length > 9 ? story.title.slice(0, 9) + "..." : story.title
);

const isShowModal = ref(false);
const toggle = () => (isShowModal.value = !isShowModal.value);
</script>

<style></style>
