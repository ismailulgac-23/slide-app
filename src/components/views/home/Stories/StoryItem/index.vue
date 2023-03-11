<template>
  <div @click="onOpenStory" :class="getClasses">
    <img
      :src="story.image"
      class="w-[70px] h-[70px] object-cover rounded-full"
    />
    <h1 class="text-xs text-center title-text">{{ story.title }}</h1>
  </div>
  <StoryModal v-if="isShowModal" :items="story.items" />
</template>

<script setup>
import { computed, inject, ref } from "vue";
import StoryModal from "./StoryModal/index.vue";
const { useStoriesStore } = inject("$store");
const { story, idx, isGrabbing } = defineProps({
  story: {
    type: Object,
    required: true,
  },
  idx: {
    type: Number,
    required: true,
  },
  isGrabbing: {
    type: Boolean,
    required: true,
  },
});

const storiesStore = useStoriesStore();

const getTitle = computed(() =>
  story.title.length > 9 ? story.title.slice(0, 9) + "..." : story.title
);

const isShowModal = computed(
  () => storiesStore.state.currentStoryModalIndex === idx
);

const getClasses = computed(() => [
  "shrink-0 max-w-[90px] w-full select-none flex items-center justify-center flex-col px-3 py-2 gap-1",
  {
    "cursor-pointer": !isGrabbing,
    "cursor-grab": isGrabbing,
  },
]);

const onOpenStory = () => {
  storiesStore.mutations.setCurrentStoryModalIndex(idx, false);
};
</script>

<style scoped>
.title-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
