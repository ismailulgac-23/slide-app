<template>
  <div class="flex-1 rounded-full bg-[#ffffff80] h-1">
    <div
      class="with-anim transition-all duration-1000 h-full bg-purple-500"
      :style="`width: 0%`"
    />
  </div>
</template>

<script setup>
import { computed, inject, ref, watch, watchEffect } from "vue";
</script>

<style scoped></style>
