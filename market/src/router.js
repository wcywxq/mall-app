import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Cart from './views/Cart.vue'
import Profile from './views/Profile.vue'

// import Info from './views/Profile/Info.vue'
// import Enter from './views/Profile/Enter.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/category',
    name: 'category',
    component: Category
  }, {
    path: '/cart',
    name: 'cart',
    component: Cart
  }, {
    path: '/profile',
    name: 'profile',
    component: Profile
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
  }]
})