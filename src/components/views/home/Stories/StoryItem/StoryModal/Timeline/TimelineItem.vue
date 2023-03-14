<template>
  <div class="flex-1 rounded-full bg-[#ffffff80] h-1">
    <div
      class="with-anim transition-all duration-1000 h-full bg-purple-500"
      :style="getTimelineStyles"
    />
  </div>
</template>
<script>
import { mapGetters} from 'vuex';
export default {
  props: {
    duration: {
      type: Number,
      required :true
    }
  },
  computed: {
    getTimelineStyles() {
      return `animation-duration: ${this.duration}ms`;
    }
  },
  mounted() {
    console.log("timeline item");
  }
}
</script>
<style scoped>
.with-anim {
  animation: with-anim linear 1;
}
@keyframes with-anim {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
