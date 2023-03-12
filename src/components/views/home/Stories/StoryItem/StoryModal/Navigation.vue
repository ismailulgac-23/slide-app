<template>
  <div
    @click="onClose"
    class="z-50 cursor-pointer bg-transparent absolute right-2 top-5 w-[20px] h-[20px] flex items-center justify-center"
  >
    <CloseIcon />
  </div>
  <div
    @click="actions.prev"
    class="z-50 cursor-pointer bg-transparent absolute left-0 top-0 w-1/2 h-full flex items-center justify-center"
  />
  <div
    @click="actions.next"
    class="z-40 cursor-pointer bg-transparent absolute top-0 right-0 w-1/2 h-full flex items-center justify-center"
  />
</template>

<script setup>
import LeftIcon from "../../../../../../components/shared/icons/LeftIcon.vue";
import RightIcon from "../../../../../../components/shared/icons/RightIcon.vue";
import CloseIcon from "../../../../../../components/shared/icons/CloseIcon.vue";
import { inject } from "vue";
const { useStoriesStore } = inject("$store");
const storiesStore = useStoriesStore();
const { actions } = storiesStore;
const onClose = () => storiesStore.mutations.setCurrentStoryModalIndex(null);
</script>

<style scoped>
.next-icon-height {
  height: calc(100% - 50px);
}
</style>
