<template>
  <Modal class="select-none">
    <Navigation :next="next" :prev="prev" :close="toggle" />
    <template v-for="(item, idx) in items" :key="idx">
      <transition name="out-in">
        <SlideItem v-if="currentIndex === idx" :item="item" />
      </transition>
    </template>
  </Modal>
</template>

<script>
import Modal from "../../../../../shared/Modal.vue";
import Navigation from "./Navigation.vue";
import SlideItem from "./SlideItem.vue";
export default {
  data: () => ({
    currentIndex: 0,
  }),
  methods: {
    prev() {
      if (this.currentIndex != 0) {
        this.currentIndex = this.currentIndex - 1;
      }
    },
    next() {
      if (this.currentIndex < this.items.length - 1) {
        this.currentIndex = this.currentIndex + 1;
        return;
      }
      this.toggle();
    },
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    toggle: {
      type: Function,
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
