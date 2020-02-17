import Vue from 'vue'
import App from './App.vue'
// Install BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//custom css
import './custom.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
