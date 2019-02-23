import Vue from 'vue'
import Router from 'vue-router'

// import Home from './views/Home.vue'
// import Category from './views/Category.vue'
// import Cart from './views/Cart.vue'
// import Profile from './views/Profile.vue'
// 优化：路由组件懒加载
const Home = () => import('./views/Home.vue')
const Category = () => import('./views/Category.vue')
const Cart = () => import('./views/Cart.vue')
const Profile = () => import('./views/Profile.vue')

import Detail from './views/Detail.vue'

import FooterBar from './components/FooterBar.vue'
import Error from './views/Error.vue'

// import Info from './views/Profile/Info.vue'
// import Enter from './views/Profile/Enter.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    components: {
      default: Home,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: true
    }
  }, {
    path: '/category',
    name: 'category',
    components: {
      default: Category,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: true
    }
  }, {
    path: '/cart',
    name: 'cart',
    components: {
      default: Cart,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: false,
      auth: true
    }
  }, {
    path: '/profile',
    name: 'profile',
    components: {
      default: Profile,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: false
    }
    // children: [{
    //     path: 'info',
    //     name: 'info',
    //     component: Info
    //   },
    //   {
    //     path: 'enter',
    //     name: 'enter',
    //     component: Enter
    //   }
    // ]
  }, {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
    meta: {
      keepAlive: false
    }
  }, {
    path: '*',
    component: Error
  }]
})