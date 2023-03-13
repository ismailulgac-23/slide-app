<template>
  <div class="w-screen h-screen overflow-hidden">
    <div class="px-5 w-full h-full flex items-center justify-center">
      <div
        id="slider"
        class="cursor-grab px-3 py-3 w-full flex items-center max-w-3xl mx-auto overflow-x-auto overflow-y-hidden hide-scrollbar bg-slate-100 rounded-lg relative"
        v-show="getStories.length"
      >
        <StoryItem
          :isGrabbing="isGrabbing"
          v-for="(story, idx) in getStories"
          :key="idx"
          :story="story"
          :idx="idx"
        />
      </div>
    </div>
  </div>
</template>
<script>
import StoryItem from "./StoryItem/index.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    isGrabbing: false,
  }),
  computed: {
    ...mapGetters({
      getStories: "story/getStories",
    }),
  },
  methods: {
    ...mapActions({
      fetchStories: "story/fetchStories",
    }),
    makeScroll() {
      const slider = document.getElementById("slider");
      let startX;
      let scrollLeft;

      slider.addEventListener("mousedown", (e) => {
        this.isGrabbing = true;
        startX = e.pageX;
        scrollLeft = slider.scrollLeft;
      });

      slider.addEventListener("mouseleave", () => (this.isGrabbing = false));

      slider.addEventListener("mouseup", () => (this.isGrabbing = false));

      slider.addEventListener("mousemove", (e) => {
        if (!this.isGrabbing) return;
        e.preventDefault();
        slider.scrollLeft = scrollLeft - (e.pageX - startX) * 1;
      });
    },
  },
  mounted() {
    this.fetchStories();
    this.makeScroll();
  },
  components: {
    StoryItem,
  },
};
</script>
