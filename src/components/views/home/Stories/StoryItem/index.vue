<template>
  <div @click="onOpenStory" :class="getClasses">
    <div :class="getGradientClasses">
      <img :src="story.image" :class="getImageClasses" />
    </div>
    <h1 class="text-xs text-center title-text">{{ story.title }}</h1>
  </div>
  <Transition>
    <StoryModal v-if="isShowModal" :items="story.items" />
  </Transition>
</template>

<script setup>
import { computed, inject, ref, watch, watchEffect } from "vue";
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

const { getters } = storiesStore;

const getTitle = computed(() =>
  story.title.length > 9 ? story.title.slice(0, 9) + "..." : story.title
);

const isShowModal = computed(
  () => storiesStore.state.currentStoryModalIndex === idx
);

const getGradientClasses = computed(() => [
  "rounded-full p-[3px]",
  {
    notSeen: !isStorySeen.value,
  },
]);

const getClasses = computed(() => [
  "shrink-0 max-w-[90px] w-full select-none flex items-center justify-center flex-col gap-1",
  {
    "cursor-pointer": !isGrabbing,
    "cursor-grab": isGrabbing,
  },
]);

const isStorySeen = ref(getters.getStoryIsSeen(idx));

const getImageClasses = computed(() => [
  "object-cover rounded-full image",
  {
    "border-4 border-slate-300 w-[70px] h-[70px]": isStorySeen.value,
    "w-full h-full": !isStorySeen.value,
  },
]);

const onOpenStory = () => {
  storiesStore.actions.seeStory(idx);
  storiesStore.mutations.setCurrentStoryModalIndex(idx);
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
.notSeen {
  width: 70px;
  height: 70px;
  background: radial-gradient(rgba(0, 0, 0, 0.15) 60%, transparent 0),
    radial-gradient(white 65%, transparent 0),
    linear-gradient(to top right, orange, deeppink);
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
