<template>
  <div class="footerBar">
    
    <van-tabbar v-model="active" @change="change">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="records" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" :info="$store.state.goodsCount" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "footerBar",
  data() {
    return {
      active: 0
    };
  },
  watch: {
    active(newVal) {
      console.log(newVal);
      newVal = parseInt(localStorage.getItem("active"));
    }
  },
  methods: {
    change(active) {
      localStorage.setItem("active", active);
    }
  },
  created() {
    if (parseInt(localStorage.getItem("active"))) {
      this.active = parseInt(localStorage.getItem("active"));
    }
  }
};
</script>

<style scoped>
</style>