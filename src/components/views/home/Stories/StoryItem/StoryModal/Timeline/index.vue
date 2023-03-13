<template>
  <div class="w-full h-10 top-0 left-0 absolute bg-yellow">
    <div class="flex items-center justify-between p-2 gap-3">
      <template v-for="(item, idx) in getCurrentStoryItems" :key="idx">
        <TimelineItem />
      </template>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import TimelineItem from "./TimelineItem.vue";
export default {
  components: {
    TimelineItem,
  },
  computed: mapGetters({
    getCurrentStoryItems: "story/getCurrentStoryItems",
  }),
};
</script>
