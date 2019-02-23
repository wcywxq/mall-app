<template>
  <div class="profile">
    <!-- <router-view></router-view> -->
    <m-enter v-show="$store.state.status == 0"></m-enter>
    <m-info v-show="$store.state.status == 1"></m-info>
  </div>
</template>

<script>
import mEnter from "@/components/Profile/Enter.vue";
import mInfo from "@/components/Profile/Info.vue";
export default {
  name: "profile",
  data() {
    return {};
  },
  components: {
    mEnter,
    mInfo
  }
};
</script>

<style lang="scss" scoped>
.profile {
  margin-top: 0.92rem;
}
</style>