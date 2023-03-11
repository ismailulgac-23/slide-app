<template>
  <Modal
    class="select-none"
    v-touch:swipe.left="next"
    v-touch:swipe.right="prev"
  >
    <Navigation :next="next" :prev="prev" />
    <template v-for="(item, idx) in items" :key="idx">
      <transition name="fade">
        <SlideItem v-if="currentIndex === idx" :item="item" />
      </transition>
    </template>
  </Modal>
</template>

<script>
import { inject, ref } from "vue";
import Modal from "../../../../../shared/Modal.vue";
import Navigation from "./Navigation.vue";
import SlideItem from "./SlideItem.vue";
export default {
  setup({ items }) {
    const currentIndex = ref(0);
    const { useStoriesStore } = inject("$store");
    const storiesStore = useStoriesStore();

    const prev = () => {
      if (currentIndex.value != 0) {
        currentIndex.value = currentIndex.value - 1;
      }
    };
    const next = () => {
      if (currentIndex.value < items.length - 1) {
        currentIndex.value = currentIndex.value + 1;
        return;
      }
      storiesStore.mutations.setCurrentStoryModalIndex(null, true);
    };

    return {
      currentIndex,
      next,
      prev,
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    Modal,
    Navigation,
    SlideItem,
  },
};
</script>

<style scoped></style>
