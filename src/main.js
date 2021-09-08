import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
import 'jquery'
import http from './http'
import axios from 'axios'
import moment from 'moment'
import vuescroll from 'vuescroll';
import vueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(vueAwesomeSwiper);
Vue.use(vuescroll);
// Vue.use(echarts);
// Vue.axios.prototype.$axios = axios;

Vue.prototype.$http = http
Vue.prototype.$moment = moment;
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
