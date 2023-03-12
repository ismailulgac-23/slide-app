<template>
  <div class="w-full h-10 top-12 left-0 absolute bg-yellow">
    <div class="flex items-center justify-between p-2 gap-3">
      <template v-for="(item, idx) in currentStoryItems" :key="idx">
        <TimelineItem />
      </template>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
import TimelineItem from "./TimelineItem.vue";
const { useStoriesStore } = inject("$store");
const { getters } = useStoriesStore();
const currentStoryItems = ref(getters.getCurrentStoryItems);
</script>

<style></style>
