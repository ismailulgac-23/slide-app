<template>
  <div class="w-screen h-screen overflow-hidden">
    <div class="w-full h-full flex items-center justify-center">
      <div
        class="px-3 py-3 w-full flex items-center max-w-5xl bg-slate-100 rounded-lg"
      >
        <StoryItem v-for="story in stories" :key="story.id" :story="story" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted, ref } from "vue";
import StoryItem from "./StoryItem/index.vue";
const $axios = inject("$axios");

const stories = ref([]);
const loading = ref(false);
const error = ref(false);

const fetchStories = () => {
  $axios
    .get("users/stories")
    .then(({ data }) => {
      stories.value = data.data;
      error.value = false;
    })
    .catch(() => {
      error.value = true;
      stories.value = [];
    })
    .finally(() => {
      loading.value = false;
    });
};

onMounted(() => {
  fetchStories();
});
</script>

<style></style>
