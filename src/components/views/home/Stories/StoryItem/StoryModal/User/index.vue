<template>
  <div class="z-50 absolute top-0 left-0 w-full px-2 py-2.5">
    <div class="flex items-center justify-between w-full">
      <div class="flex items-center justify-center gap-3">
        <img
          src="https://files.shipentegra.com/assets/stories/small_images/61cb265d8c9ae090f45e2d310d17476e.jpg"
          class="w-[35px] h-[35px] rounded-full object-cover"
        />
        <h1 class="font-medium text-white text-sm">PrinWork</h1>
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
    const { actions } = storiesStore;
    const onClose = () =>
      storiesStore.mutations.setCurrentStoryModalIndex(null);
    return {
      onClose,
    };
  },
  components: { CloseIcon },
};
</script>

<style></style>
