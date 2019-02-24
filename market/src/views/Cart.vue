<template>
  <div class="cart">
    <van-nav-bar title="购物车"></van-nav-bar>
    <div v-if="productList.length == 0">
      <p class="cart-null">还没有添加物品哦~~</p>
    </div>
    <div class="card" v-if="productList.length != 0">
      <van-card
        tag="标签"
        v-for="(item, index) in productList"
        :key="item._id"
        :title="item.name"
        :price="item.price"
        :thumb="item.img"
        :desc="item.company"
        :num="item.count"
      >
        <div slot="footer" class="card-footer">
          <van-switch
            v-model="item.selected"
            size="14px"
            @change="updateSelect(item.selected, item._id)"
          />
          <van-button size="mini" round @click="delCart(item._id, index)">删除</van-button>
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
          if (elem.selected) {
            sum += elem.price * elem.count;
          }
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
          this.$toast.success("删除成功");
          this.$store.dispatch("getCartAction");
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 修改开关状态
    updateSelect(checked, pid) {
      axios({
        url: url.updateCart,
        method: "post",
        data: {
          productId: pid,
          selected: checked
        }
      })
        .then(res => {
          console.log(res);
          this.$toast.success("切换成功");
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
        for (let item of res.data) {
          item.productId["count"] = item.count;
          item.productId["selected"] = item.selected;
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
  margin-bottom: 1rem;
  &-null {
    font-size: 0.36rem;
    text-align: center;
    margin: 0.4rem 0;
  }
}
.card {
  margin-bottom: 2rem;
  &-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
.submit-bar {
  bottom: 1rem;
}
</style>