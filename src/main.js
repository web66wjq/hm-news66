import Vue from 'vue'
import App from './App.vue'
import { Button, Field, Form, Toast, Dialog } from 'vant'
import 'amfe-flexible'
// 引入通用样式
import './styles/common.less'
import './styles/iconfont.less'
import router from './router'
import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'
import axios from 'axios'
import HmNavBar from './components/HmNavBar.vue'
import moment from 'moment'

// 把axios挂在到vue的原型
Vue.prototype.$axios = axios
// 配置axios的默认基准地址
axios.defaults.baseURL = 'http://localhost:3000'
// 给axios配置请求拦截器
axios.interceptors.request.use(function(config) {
  // 浏览器发送的ajax请求的所有配置信息
  // console.log('我拦截到了请求', config)
  // 给所有的请求添加token
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config
})

// 响应拦截器
axios.interceptors.response.use(function(res) {
  console.log('拦截到了响应', res)
  const { statusCode, message } = res.data
  if (statusCode === 401 && message === '用户信息验证失败') {
    // token失效导致的
    Toast.fail(message)
    // 跳转到登录页面
    router.push('/login')
    // 删除过期的token
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
  }
  return res
})

// 全局的注册 van-button
Vue.use(Button)
Vue.use(Field)
Vue.use(Form)
// 会给vue的原型上添加一个 $toast,所有的组件都可以通过 this.$toast
Vue.use(Toast)
Vue.use(Dialog)

// 全局注册组件
Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', HmLogo)
Vue.component('hm-navbar', HmNavBar)

Vue.config.productionTip = false

// 定义全局过滤器
Vue.filter('time', function(input) {
  return moment(input).format('YYYY-MM-DD')
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
