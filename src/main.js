import Vue from 'vue'
import App from './App.vue'

// Install BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Implement mapbox
import mapbox from 'mapbox-gl';
Object.defineProperty(Vue.prototype, '$mapbox', { value: mapbox });

//custom css
import './custom.scss'

Vue.config.productionTip = false

window.eventBus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
