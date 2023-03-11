<template>
  <div>
    example page
    {{ state.currentStoryModalIndex }}
    <button @click="onSubmit">change</button>
  </div>
</template>

<script setup>
import { inject } from "vue";

const { useStoriesStore } = inject("$store");
const { state, setCurrentStoryModalIndex } = useStoriesStore();
const onSubmit = () => {
  setCurrentStoryModalIndex(state.currentStoryModalIndex + 1);
};
</script>

<style></style>
