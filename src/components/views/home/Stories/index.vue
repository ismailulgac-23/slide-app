<template>
  <div class="w-screen h-screen overflow-hidden">
    <div class="px-5 w-full h-full flex items-center justify-center">
      <div
        id="slider"
        class="cursor-grab px-3 py-3 w-full flex items-center max-w-3xl mx-auto overflow-x-auto overflow-y-hidden hide-scrollbar bg-slate-100 rounded-lg relative"
        v-show="stories.length"
      >
        <StoryItem
          :isGrabbing="isGrabbing"
          v-for="(story, idx) in stories"
          :key="idx"
          :story="story"
          :idx="idx"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted, ref } from "vue";
import StoryItem from "./StoryItem/index.vue";
const { useStoriesStore } = inject("$store");
const { actions, getters } = useStoriesStore();
const stories = ref(getters.getStories);
const isGrabbing = ref(false);

const makeScroll = () => {
  const slider = document.getElementById("slider");
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isGrabbing.value = true;
    startX = e.pageX;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => (isGrabbing.value = false));

  slider.addEventListener("mouseup", () => (isGrabbing.value = false));

  slider.addEventListener("mousemove", (e) => {
    if (!isGrabbing.value) return;
    e.preventDefault();
    slider.scrollLeft = scrollLeft - (e.pageX - startX) * 1;
  });
};

onMounted(() => {
  makeScroll();
});

onMounted(() => {
  actions.fetchStories();
});
</script>
