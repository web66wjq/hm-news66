import Vue from 'vue'
import App from './App.vue'
import { Button, Field } from 'vant'
import 'amfe-flexible'
// 引入通用样式
import './styles/common.less'
import './styles/iconfont.less'
import router from './router'

Vue.use(Button)
Vue.use(Field)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
