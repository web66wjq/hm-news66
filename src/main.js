import Vue from 'vue'
import App from './App.vue'
import { Button, Field, Form, Toast } from 'vant'
import 'amfe-flexible'
// 引入通用样式
import './styles/common.less'
import './styles/iconfont.less'
import router from './router'
import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'
import axios from 'axios'
// 把axios挂在到vue的原型
Vue.prototype.$axios = axios
// 配置axios的默认基准地址
axios.defaults.baseURL = 'http://localhost:3000'

// 全局的注册 van-button
Vue.use(Button)
Vue.use(Field)
Vue.use(Form)
// 会给vue的原型上添加一个 $toast,所有的组件都可以通过 this.$toast
Vue.use(Toast)

// 全局注册组件
Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', HmLogo)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
