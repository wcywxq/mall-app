<template>
  <div class="app">
    <!-- nav-bar -->
    <section class="navBar" ref="navBar">
      <van-nav-bar class="nav-title" v-show="!isShow" fixed>
        <van-icon name="search" slot="left" @click="showSearch"/>
        <p slot="title" class="nav-title-text">{{ activeName }}</p>
        <van-icon slot="right" @click="goLogin">
          <span style="font-size: 0.24rem;">{{ userInfo.userName }}</span>
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
        <router-view></router-view>
      </keep-alive>
    </transition>
    <!-- tabbar -->
    <van-tabbar v-model="$store.state.activeTabbar" @change="tabName">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="records" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" info="5" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      activeName: "首页",
      // 搜索
      value: "",
      isShow: false
    };
  },
  computed: {
    ...mapState(["status", "userInfo"])
  },
  methods: {
    ...mapMutations(["changeActive"]),
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
      // if (this.status == 0) {
      //   this.$router.push("/profile/enter");
      // } else {
      //   this.$router.push("/profile/info");
      // }
      this.$router.push("/profile");
      this.changeActive(3);
      this.activeName = "我的";
    },
    tabName(val) {
      console.log(val);
      switch (val) {
        case 0:
          this.activeName = "首页";
          break;
        case 1:
          this.activeName = "分类";
          break;
        case 2:
          this.activeName = "购物车";
          break;
        default:
          this.activeName = "我的";
          break;
      }
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
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
  // position: absolute;
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