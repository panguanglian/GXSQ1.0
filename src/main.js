import Vue from 'vue'
import App from './App'

// 配置请求API
import http from './http/https'
Vue.prototype.$http = http

// vuex
import store from './store/index'
Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'

// css
import '../static/css/colorui.wxss'
import '../static/css/icon.wxss'
import '../static/css/animation.wxss'

const app = new Vue(App)
app.$mount()
