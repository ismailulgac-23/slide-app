<template>
  <Modal
    class="select-none"
    v-touch:swipe.left="actions.next"
    v-touch:swipe.right="actions.prev"
  >
    <Timeline />
    <User />
    <Navigation />
    <template v-for="(item, idx) in currentStoryItems" :key="idx">
      <div
        :class="[
          'transition-all duration-75',
          {
            'w-full h-full': currentSlideItemIndex === idx,
            'w-0': currentSlideItemIndex !== idx,
          },
        ]"
      >
        <SlideItem v-if="currentSlideItemIndex === idx" :item="item" />
      </div>
    </template>
  </Modal>
</template>

<script>
import { inject, onMounted, provide, ref, watch, watchEffect } from "vue";
import Modal from "../../../../../shared/Modal.vue";
import Navigation from "./Navigation.vue";
import User from "./User/index.vue";
import Timeline from "./Timeline/index.vue";
import SlideItem from "./SlideItem.vue";

export default {
  setup({ items }) {
    const { useStoriesStore } = inject("$store");

    const storiesStore = useStoriesStore();

    const currentStoryItems = ref(storiesStore.getters.getCurrentStoryItems);
    const currentSlideItemIndex = ref(
      storiesStore.getters.getCurrentSlideItemIndex
    );

    return {
      ...storiesStore,
      currentStoryItems,
      currentSlideItemIndex,
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    Timeline,
    Modal,
    Navigation,
    SlideItem,
    User,
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
