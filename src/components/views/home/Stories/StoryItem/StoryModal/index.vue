<template>
  <Modal
    class="select-none"
    v-touch:swipe.left="actions.next"
    v-touch:swipe.right="actions.prev"
  >
    <Timeline />
    <Navigation />
    <template v-for="(item, idx) in currentStoryItems" :key="idx">
      <transition name="fade">
        <SlideItem v-if="state.currentSlideItemIndex === idx" :item="item" />
      </transition>
    </template>
  </Modal>
</template>

<script>
import { inject, onMounted, provide, ref, watch, watchEffect } from "vue";
import Modal from "../../../../../shared/Modal.vue";
import Navigation from "./Navigation.vue";
import Timeline from "./Timeline/index.vue";
import SlideItem from "./SlideItem.vue";

export default {
  setup({ items }) {
    const { useStoriesStore } = inject("$store");

    const storiesStore = useStoriesStore();

    const currentStoryItems = ref(storiesStore.getters.getCurrentStoryItems);

    return {
      ...storiesStore,
      currentStoryItems,
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
  },
};
</script>

<style scoped></style>
