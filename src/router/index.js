import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import User from '../views/User.vue'
import UserEdit from '../views/UserEdit.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login, name: 'login' },
    { path: '/register', component: Register, name: 'register' },
    { path: '/user', component: User, name: 'user' },
    { path: '/userEdit', component: UserEdit, name: 'userEdit' }
  ]
})

// 全局的导航守卫 (路由的钩子函数，beforEach,afterEach)
// to：到哪个页面去
// from：从哪个页面来
// next()：代表放行
// 保存所有需要登录才能访问的页面
const pages = ['/user', '/user-edit']
router.beforeEach(function(to, from, next) {
  // console.log('全局的前置导航守卫')
  // console.log('to', to)
  // console.log('from', from)
  const token = localStorage.getItem('token')
  // 如果去的页面是user页面，就需要判断是否有token
  if (pages.includes(to.path)) {
    // 判断是否有token，如果没有去登录，有token放行
    if (token) {
      next()
    } else {
      router.push('/login')
    }
  } else {
    next()
  }
})

export default router
