import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// css reset
import '@/assets/css/neat.css'
//  rem
import '@/assets/js/rem.js'
//  vant
import {
  Button,
  Icon,
  NavBar,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Search,
  PullRefresh,
  Toast,
  Tab,
  Tabs,
  Cell,
  CellGroup,
  Field,
  Tag
} from 'vant'
Vue.use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Search).use(PullRefresh).use(Toast).use(Tab).use(Tabs).use(Cell).use(CellGroup).use(Field).use(Tag)
//  mock数据
import '@/mock/mock.js'

// 登录状态判断
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.auth)) {
//     if (store.state.status == 1) {
//       next()
//     } else {
//       next({
//         path: '/profile/noLogin'
//       })
//     }
//   } else {
//     next()
//   }
// })

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')