<template>
  <div class="info">
    <van-nav-bar title="我的个人信息"></van-nav-bar>
    <van-cell-group>
      <van-cell title="用户Id" :value="$store.state.userInfo._id"/>
      <van-cell title="名称" :value="$store.state.userInfo.userName"/>
      <van-cell
        title="创建时间"
        :value="new Date($store.state.userInfo.createDate).Format('yyyy-MM-dd hh:mm:ss')"
      />
    </van-cell-group>
    <div style="text-align: center">
      <van-button type="danger" size="small" style="width: 90%" @click="exit">退出登录</van-button>
    </div>
  </div>
</template>

<script>
Date.prototype.Format = function(fmt) {
  //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};
export default {
  name: "info",
  data() {
    return {};
  },
  computed: {},
  methods: {
    exit() {
      this.$toast.success("已退出登陆");
      this.$store.commit("CHANGESTATUS", 0);
      this.$store.commit("CHANGELOGIN", '{}');
      this.$store.commit("CHANGECART", 0);
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
</style>