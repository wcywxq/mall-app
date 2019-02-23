import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // tabbar高亮
    activeTabbar: 0,
    // 登陆状态 1: 已登陆 0:未登陆
    status: 0,
    // 用户信息
    userInfo: {
      userName: '未登录',
    }
  },
  mutations: {
    changeActive(state, active) {
      state.activeTabbar = active
    },
    changeStatus(state, status) {
      state.status = status
    },
    changeLogin(state, user) {
      state.userInfo = user
    }
  },
  actions: {
    activeAction({
      commit
    }, active) {
      commit('changeActive', active)
    },
    statusAction({
      commit
    }, status) {
      commit('changeStatus', status)
    },
    loginAction({
      commit
    }, user) {
      commit('changeLogin', user)
    }
  }
})