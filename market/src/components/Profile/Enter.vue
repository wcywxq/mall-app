<template>
  <div class="enter">
    <van-tabs v-model="active">
      <van-tab title="登陆">
        <van-cell-group>
          <van-field v-model="loginUsername" required clearable label="用户名" placeholder="请输入用户名"/>
          <van-field
            v-model="loginPassword"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
            clearable
          />
        </van-cell-group>
        <div>
          <van-button type="primary" size="small" style="width: 100%" @click="loginHandler">登陆</van-button>
        </div>
        <div class="tag">
          <van-tag mark style="margin-right: 0.2rem;">还未注册？</van-tag>
          <van-tag plain type="danger" @click="active = 1;">前往注册</van-tag>
        </div>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field v-model="registUsername" required clearable label="用户名" placeholder="请输入用户名"/>
          <van-field
            v-model="registPassword"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
            clearable
          />
        </van-cell-group>
        <div>
          <van-button type="primary" size="small" style="width: 100%" @click="registeHandler">注册</van-button>
        </div>
        <div class="tag">
          <van-tag mark style="margin-right: 0.2rem;">已经注册？</van-tag>
          <van-tag plain type="danger" @click="active = 0;">前往登陆</van-tag>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/interface.config.js";
import { mapState, mapActions } from "vuex";

export default {
  name: "enter",
  data() {
    return {
      active: 0,
      // 登陆
      loginUsername: "",
      loginPassword: "",
      // 注册
      registUsername: "",
      registPassword: ""
    };
  },
  methods: {
    // vuex
    ...mapActions(["statusAction", "loginAction"]),
    // 注册处理函数
    registeHandler() {
      axios({
        url: url.registUser,
        method: "post",
        data: {
          userName: this.registUsername,
          password: this.registPassword
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            this.$toast.success("注册成功");
            this.registUsername = this.registPassword = "";
            this.active = 0;
          } else {
            this.$toast.fail("注册失败");
          }
        })
        .catch(err => {
          console.log(err);
          this.$toast.fail("注册失败");
        });
    },
    // 登陆处理函数
    loginHandler() {
      axios({
        url: url.loginUser,
        method: "post",
        data: {
          userName: this.loginUsername,
          password: this.loginPassword
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve();
              }, 1000);
            })
              .then(() => {
                this.$toast.success("登陆成功");
                this.statusAction(1);
                this.loginAction(res.data.userInfo);
                this.loginUsername = this.loginPassword = "";
                this.$router.go(-1);
              })
              .catch(err => {
                console.log(err);
                this.$toast.fail("保存登陆状态失败");
              });
          } else {
            this.$toast.fail("保存登陆状态失败");
          }
        })
        .catch(err => {
          console.log(err);
          this.$toast.fail("保存登陆状态失败");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.tag {
  text-align: center;
}
</style>