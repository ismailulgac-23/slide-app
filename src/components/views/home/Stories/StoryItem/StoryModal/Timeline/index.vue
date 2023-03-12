<template>
  <div class="w-full h-10 top-0 left-0 absolute bg-yellow">
    <div class="flex items-center justify-between p-2 gap-3">
      <template v-for="(item, idx) in items" :key="idx">
        <TimelineItem :item="item" />
      </template>
    </div>
  </div>
</template>

<script setup>
import TimelineItem from "./TimelineItem.vue";
const { items } = defineProps({
  currentIndex: {
    type: Number,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style></style>
