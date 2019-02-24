import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import url from '@/interface.config.js'
import {
  stat
} from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登陆状态 1: 已登陆 0:未登陆
    status: 0,
    // 用户信息
    userInfo: {},
    // 购物车中商品数量
    goodsCount: 0
  },
  mutations: {
    CHANGESTATUS(state, status) {
      state.status = status
    },
    CHANGELOGIN(state, user) {
      state.userInfo = user
    },
    CHANGECART(state, goodsCount) {
      state.goodsCount = goodsCount
    }
  },
  actions: {
    statusAction({
      commit
    }, status) {
      commit('CHANGESTATUS', status)
    },
    loginAction({
      commit
    }, user) {
      commit('CHANGELOGIN', user)
    },
    getCartAction({
      commit,
      state
    }) {
      if (JSON.stringify(state.userInfo) != '{}') {
        axios({
          url: url.getCart,
          method: 'get',
          params: {
            userId: state.userInfo._id
          }
        }).then(res => {
          console.log(res)
          let count = 0;
          for (let item of res.data) {
            count += item.count
          }
          commit('CHANGECART', count)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
})