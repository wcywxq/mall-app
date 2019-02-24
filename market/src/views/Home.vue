<template>
  <div class="home">
    <!-- nav-bar -->
    <section class="navBar" ref="navBar">
      <van-nav-bar class="nav-title" v-show="!isShow" fixed>
        <van-icon name="search" slot="left" @click="showSearch"/>
        <p slot="title" class="nav-title-text">首页</p>
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

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- 轮播图 -->
      <div class="carousel">
        <van-swipe :autoplay="3000" indicator-color="#1989fa">
          <van-swipe-item class="carousel-item" v-for="item in carouselItem" :key="item.name">
            <img v-lazy="item.imgSrc">
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 热门商品 -->
      <div class="hot">
        <p class="title">热门商品</p>
        <swiper class="hot-swiper" :options="swiperOption">
          <swiper-slide v-for="item in hotProducts" :key="item.name">
            <div class="hot-swiper-content">
              <img v-lazy="item.img" alt>
              <p class="hot-swiper-name">{{ item.name.substring(0, 10) + '...' }}</p>
              <p class="hot-swiper-price">￥{{ item.price }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <!-- 推荐商品 -->
      <div class="variety">
        <p class="title">推荐商品</p>
        <ul>
          <li class="variety-item" v-for="item in varietyItem" :key="item.name">
            <img v-lazy="item.img" alt>
            <p class="variety-item-name">{{ item.name.substring(0, 10) + '...' }}</p>
            <p class="variety-item-price">￥{{ item.price }}</p>
          </li>
        </ul>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
// vue-awesome-swiper
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapState } from "vuex";
import axios from "axios";
import url from "@/interface.config.js";

export default {
  name: "home",
  data() {
    return {
      // 搜索框显示控制
      isShow: false,
      // 搜索
      value: "",
      isLoading: false,
      carouselItem: [
        {
          name: "img1",
          imgSrc:
            "https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg"
        },
        {
          name: "img2",
          imgSrc:
            "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"
        },
        {
          name: "img3",
          imgSrc:
            "https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg"
        },
        {
          name: "img4",
          imgSrc:
            "https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg"
        }
      ],
      hotProducts: [
        {
          name: "  7250约翰迪尔",
          img:
            "http://img42.nongjx.com/2/20091222/633970900718437500_198_170_5.jpg",
          price: "面议",
          company: "北京市德乐机械有限公司",
          city: "北京市"
        },
        {
          name: "  优质4LZ-8型自走式谷物联合收割机",
          img:
            "http://img49.nongjx.com/2/20180408/636588011697775992997_198_170_5.png",
          price: "面议",
          company: "新疆机械研究院股份有限",
          city: "乌鲁木齐市"
        },
        {
          name: "  工农12K-700型马玲薯收获机",
          img:
            "http://img50.nongjx.com/2/20181025/636760630053845958277_198_170_5.jpg",
          price: "面议",
          company: "费县华源农业装备工贸有",
          city: "临沂市"
        },
        {
          name: "  玉米籽粒机",
          img:
            "http://img49.nongjx.com/2/20180426/636603348531851190929_198_170_5.png",
          price: "面议",
          company: "河北中农博远农业装备有",
          city: "石家庄市"
        },
        {
          name: "  4LZ-2.0 自走式谷物联合收割机",
          img:
            "http://img61.nongjx.com/2/20170321/636257194316398458936_198_170_5.jpg",
          price: "面议",
          company: "爱科（中国）投资有限公",
          city: "常州市"
        },
        {
          name: "  VB-VBP3100系列可变腔圆捆打捆机",
          img:
            "http://img57.nongjx.com/2/20171122/636469555088384823669_198_170_5.jpg",
          price: "面议",
          company: "法国库恩公司",
          city: "北京市"
        }
      ],
      swiperOption: {
        slidesPerView: 3
      },
      // 推荐商品
      varietyItem: [
        // {
        //   name: "  7250约翰迪尔",
        //   img:
        //     "http://img42.nongjx.com/2/20091222/633970900718437500_198_170_5.jpg",
        //   price: "面议",
        //   company: "北京市德乐机械有限公司",
        //   city: "北京市"
        // },
        // {
        //   name: "  优质4LZ-8型自走式谷物联合收割机",
        //   img:
        //     "http://img49.nongjx.com/2/20180408/636588011697775992997_198_170_5.png",
        //   price: "面议",
        //   company: "新疆机械研究院股份有限",
        //   city: "乌鲁木齐市"
        // },
        // {
        //   name: "  工农12K-700型马玲薯收获机",
        //   img:
        //     "http://img50.nongjx.com/2/20181025/636760630053845958277_198_170_5.jpg",
        //   price: "面议",
        //   company: "费县华源农业装备工贸有",
        //   city: "临沂市"
        // },
        // {
        //   name: "  玉米籽粒机",
        //   img:
        //     "http://img49.nongjx.com/2/20180426/636603348531851190929_198_170_5.png",
        //   price: "面议",
        //   company: "河北中农博远农业装备有",
        //   city: "石家庄市"
        // },
        // {
        //   name: "  4LZ-2.0 自走式谷物联合收割机",
        //   img:
        //     "http://img61.nongjx.com/2/20170321/636257194316398458936_198_170_5.jpg",
        //   price: "面议",
        //   company: "爱科（中国）投资有限公",
        //   city: "常州市"
        // },
        // {
        //   name: "  VB-VBP3100系列可变腔圆捆打捆机",
        //   img:
        //     "http://img57.nongjx.com/2/20171122/636469555088384823669_198_170_5.jpg",
        //   price: "面议",
        //   company: "法国库恩公司",
        //   city: "北京市"
        // }
      ],
      // 搜索
      value: ""
    };
  },
  components: {
    swiper,
    swiperSlide
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
    },
    getVarietyItem() {
      return axios.get(url.getVarietyItem);
    },
    onRefresh() {
      this.getVarietyItem().then(res => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.varietyItem = res.data;
      });
    }
  },
  created() {
    //  Mock
    // axios.get(url.getList).then(res => {
    //   console.log(res);
    // });
    // axios.get(url.getUser).then(res => {
    //   console.log(res);
    // });
    // axios.get(url.regexp).then(res => {
    //   console.log(res);
    // });
    // axios.get(url.list).then(res => {
    //   console.log(res);
    // });
    this.getVarietyItem().then(res => {
      //   console.log(res);
      this.varietyItem = res.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 0.92rem;
  margin-bottom: 1rem;
  background-color: rgb(235, 235, 235);
}
.carousel {
  height: 3rem;
  &-item {
    img {
      width: 100%;
      height: 3rem;
    }
  }
}
.title {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 0.26rem;
}
.hot {
  margin-top: 0.1rem;
  background-color: #ffffff;
  &-swiper {
    padding-left: 0.2rem;
    &-content {
      width: 2rem;
      text-align: center;
      img {
        width: 2rem;
        height: 2rem;
      }
    }
    &-name {
      font-size: 0.24rem;
    }
    &-price {
      font-size: 0.2rem;
    }
  }
}

// 热门商品
.variety {
  margin-top: 0.1rem;
  text-align: center;
  background-color: #ffffff;
  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  &-item {
    flex-basis: 45%;
    &-name {
      font-size: 0.24rem;
    }
    &-price {
      font-size: 0.2rem;
    }
  }
  img {
    width: 2rem;
    height: 2rem;
  }
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