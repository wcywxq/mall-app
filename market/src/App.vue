<template>
  <div class="app">
    <!-- nav-bar -->
    <section class="navBar" ref="navBar">
      <van-nav-bar class="nav-title" v-show="!isShow" fixed>
        <van-icon name="search" slot="left" @click="showSearch"/>
        <p slot="title" class="nav-title-text">{{ activeName }}</p>
        <van-icon slot="right" @click="goLogin">
          <span
            style="font-size: 0.24rem;"
          >{{ JSON.stringify(userInfo) === '{}' ? '未登陆' : userInfo.userName }}</span>
        </van-icon>
      </van-nav-bar>
    </section>
    <!-- 搜索 -->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <form action="/" v-show="isShow" class="search-title">
        <van-search
          background="rgb(245, 245, 245)"
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </transition>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="fade">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <!-- tabbar -->
    <router-view name="footer-bar"></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      // 搜索
      value: "",
      isShow: false,
      activeName: "首页"
    };
  },
  watch: {
    "$route.path": function(curVal) {
      console.log(curVal);
      switch (curVal) {
        case "/":
          this.activeName = "首页";
          localStorage.setItem("active", 0);
          break;
        case "/category":
          this.activeName = "分类";
          localStorage.setItem("active", 1);
        case "/cart":
          this.activeName = "购物车";
          localStorage.setItem("active", 2);
        case "/profile":
          this.activeName = "我的";
          localStorage.setItem("active", 3);
          break;
      }
    }
  },
  computed: {
    ...mapState(["status", "userInfo"])
  },
  methods: {
    // 展示搜索框
    showSearch() {
      this.isShow = true;
    },
    // 确定搜索
    onSearch() {},
    // 取消搜索
    onCancel() {
      this.isShow = false;
    },
    // 搜索框动画
    beforeEnter(el) {
      el.style.transform = "translateX(-100%)";
    },
    enter(el) {
      el.offsetLeft;
      el.style.transform = "translateX(0)";
      el.style.transition = "all .5s linear";
    },
    beforeLeave(el) {
      el.style.transform = "translateX(0)";
    },
    leave(el) {
      el.offsetRight;
      el.style.transform = "translateX(100%)";
      el.style.transition = "all .5s linear";
    },
    // 跳转登陆
    goLogin() {
      // 存储url
      this.$router.push("/profile");
    }
  }
  // watch: {
  //   "$route.path"(curVal, oldVal) {
  //     console.log(curVal, oldVal);
  //     if (curVal == "/profile") {
  //       this.$refs.navBar.style.opacity = 0;
  //       this.$refs.navBar.style.transition = "opacity .5s";
  //     } else {
  //       this.$refs.navBar.style.opacity = 1;
  //     }
  //   }
  // }
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
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.nav-title {
  z-index: 999 !important;
  &-text {
    font-size: 0.26rem;
  }
}
.search-title {
  position: fixed;
  top: 0;
  width: 100%;
  height: 0.92rem;
  z-index: 999 !important;
}
</style>