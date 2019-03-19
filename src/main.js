import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'lib-flexible/flexible.js' //px转rem
import './assets/common/index.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

//判断是ios还是安卓
let u = navigator.userAgent;
// let app = navigator.appVersion;
let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端
let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 ;

Vue.prototype.isAndroid = isAndroid;
Vue.prototype.isiOS = isiOS;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')