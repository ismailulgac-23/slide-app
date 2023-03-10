<template>
  <div
    @click="close"
    class="z-50 cursor-pointer bg-white absolute right-0 top-0 w-[50px] close-icon-height flex items-center justify-center"
  >
    <CloseIcon />
  </div>
  <div
    @click="prev"
    class="z-50 cursor-pointer bg-black absolute left-0 top-0 w-[50px] next-icon-height flex items-center justify-center"
  >
    <LeftIcon />
  </div>
  <div
    @click="next"
    class="z-40 cursor-pointer bg-black absolute top-0 right-0 w-[50px] h-full flex items-center justify-center"
  >
    <RightIcon />
  </div>
</template>

<script setup>
import LeftIcon from "../../../../../../components/shared/icons/LeftIcon.vue";
import RightIcon from "../../../../../../components/shared/icons/RightIcon.vue";
import CloseIcon from "../../../../../../components/shared/icons/CloseIcon.vue";
defineProps({
  next: {
    type: Function,
    required: true,
  },
  prev: {
    type: Function,
    required: true,
  },
  close: {
    type: Function,
    required: true,
  },
});
</script>

<style scoped>
.close-icon-height {
  height: 50px;
}
.next-icon-height {
  height: calc(100% - 50px);
}
</style>
