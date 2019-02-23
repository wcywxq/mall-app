<template>
  <div class="cart">
    <van-nav-bar title="购物车"></van-nav-bar>
    <div class="card">
      <van-card
        tag="标签"
        v-for="(item, index) in productList"
        :key="item._id"
        :title="item.name"
        :price="item.price"
        :thumb="item.img"
        :desc="item.company"
        num="2"
      >
        <div slot="footer">
          <van-button size="mini">选中</van-button>
          <van-button size="mini" @click="delCart(item._id, index)">删除</van-button>
        </div>
      </van-card>
    </div>
    <van-submit-bar class="submit-bar" :price="totalPrice" button-text="提交订单" @submit="onSubmit"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import url from "@/interface.config.js";

export default {
  name: "cart",
  data() {
    return {
      productList: []
    };
  },
  computed: {
    ...mapState(["userInfo"]),
    // 总价
    totalPrice() {
      // reduce 方法，用于累加
      return (
        this.productList.reduce((sum, elem) => {
          sum += elem.price;
          return sum;
        }, 0) * 100
      );
    }
  },
  methods: {
    onSubmit() {
      this.$toast.success("正在进入付款页面...");
    },
    // 删除商品
    delCart(id, index) {
      // 删除数据库中的数据，如果删除成功，进入回调函数
      axios({
        url: url.delCart,
        method: "post",
        data: {
          productId: id
        }
      })
        .then(res => {
          console.log(res);
          this.productList.splice(index, 1);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    axios({
      url: url.getCart,
      method: "get",
      params: {
        userId: this.userInfo._id
      }
    })
      .then(res => {
        console.log(res.data);
        for (let item of res.data) {
          this.productList.push(item.productId);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
.cart {
  margin-top: 0.92rem;
  margin-bottom: 1rem;
}
.card {
  margin-bottom: 2rem;
}
.submit-bar {
  bottom: 1rem;
}
</style>