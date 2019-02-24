<template>
  <div class="app">
    <transition name="fade">
      <!-- <keep-alive> -->
      <router-view v-if="$route.meta.keepAlive"></router-view>
      <!-- </keep-alive> -->
    </transition>
    <transition name="fade">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <!-- tabbar -->
    <router-view name="footer-bar"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.app {
  overflow-x: hidden;
}
.fade-enter {
  opacity: 0;
  transform: translateX(100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
</style>