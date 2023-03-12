<template>
  <div class="z-50 absolute top-0 left-0 w-full px-2 py-2.5">
    <div class="flex items-center justify-between w-full">
      <div class="flex items-center justify-center gap-3">
        <img
          :src="getCurrentStoryInfo.image"
          class="w-[35px] h-[35px] rounded-full object-cover"
        />
        <h1 class="font-medium text-white text-sm">
          {{ getCurrentStoryInfo.title }}
        </h1>
      </div>
      <div @click="onClose">
        <CloseIcon />
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from "../../../../../../shared/icons/CloseIcon.vue";
import { inject } from "vue";
export default {
  setup() {
    const { useStoriesStore } = inject("$store");
    const storiesStore = useStoriesStore();
    const { actions, getters } = storiesStore;

    const { getCurrentStoryInfo } = getters;

    const onClose = () =>
      storiesStore.mutations.setCurrentStoryModalIndex(null);
    return {
      onClose,
      getCurrentStoryInfo,
    };
  },
  components: { CloseIcon },
};
</script>

<style></style>
