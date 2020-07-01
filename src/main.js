import Vue from 'vue'
import App from './App.vue'
import { Button, Field } from 'vant'
import 'amfe-flexible'
// import Vant from 'vant'
// import 'vant/lib/index.css'
console.log('123')

// 把vant中所有的组件都导入了
// Vue.use(Vant)
Vue.use(Button)
Vue.use(Field)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
