<template>
  <div class="category">
    <van-nav-bar title="商品类型"></van-nav-bar>
    <div class="category-box">
      <van-row>
        <van-col span="6" class="nav">
          <ul>
            <li
              :class="{ active: active == index}"
              @click="selectCategory(item.typeId, index)"
              v-for="(item, index) in types"
              :key="item._id"
              style="font-size: 0.24rem;"
            >{{ item.typeName }}</li>
          </ul>
        </van-col>
        <van-col span="18" class="container">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list
              class="content"
              @load="onLoad"
              v-model="isLoading"
              :finished="finished"
              finished-text="没有更多了"
              :error.sync="error"
              error-text="请求失败，点击重新加载"
            >
              <div
                @click="goDetail(item._id)"
                class="content-item"
                v-for="item in productList"
                :key="item._id"
              >
                <img v-lazy="item.img" alt>
                <p class="content-item-name">{{ item.name }}</p>
                <p class="content-item-price">￥{{ item.price }}</p>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/interface.config.js";
export default {
  name: "category",
  data() {
    return {
      types: [], //类型信息
      active: 0,
      productList: [], // 商品列表
      typeId: 1, // 默认的typeId
      start: 0, // 分页，从第几条开始
      limit: 10, // 分页，每次读取10条
      finished: false, // 是否全部加载完毕
      error: false, // 请求是否失败
      isLoading: false // 上拉加载, 同时控制是否加载成功
    };
  },
  methods: {
    selectCategory(typeId, index) {
      this.active = index;
      this.typeId = typeId;
      this.productList = [];
      this.finished = false;
      // 点击发起请求
      this.getProductList();
    },
    getProductList() {
      this.isLoading = true;
      axios({
        url: url.getProductsByType,
        method: "get",
        params: {
          typeId: this.typeId,
          start: this.productList.length,
          limit: this.limit
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.length != 0) {
            this.productList = this.productList.concat(res.data);
          } else {
            this.finished = true;
          }
          this.isLoading = false;
        })
        .catch(err => {
          this.error = true;
        });
    },
    // 滚动到底部的加载函数
    onLoad() {
      setTimeout(() => {
        this.getProductList();
      }, 1000);
    },
    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.productList = [];
        this.getProductList();
      }, 2000);
    },
    // 跳转详情
    goDetail(id) {
      console.log(id);
      this.$router.push(`/detail/${id}`);
    }
  },
  created() {
    axios({
      url: url.getTypes,
      method: "get"
    })
      .then(res => {
        console.log(res);
        this.types = res.data;
        // 第一次进入调用
        this.selectCategory(this.typeId, this.active);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
.category {
  margin-top: 0.92rem;
  margin-bottom: 1rem;
}
.nav {
  background-color: #eeeeee;
  li {
    height: 0.6rem;
    line-height: 0.6rem;
    border-bottom: 1px solid #fff;
    padding: 3px;
    text-align: center;
  }
  .active {
    background-color: #ffffff;
  }
}
.container {
  position: fixed;
  top: 1.84rem;
  bottom: 1rem;
  right: 0;
  overflow-y: scroll;
}
.content {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1rem;
  &-item {
    flex-basis: 40%;
    padding: 0 10px;
    text-align: center;
    img {
      width: 2rem;
      height: 2rem;
    }
    &-name {
      font-size: 0.24rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &-price {
      font-size: 0.22rem;
      margin-bottom: 5px;
    }
  }
}
</style>