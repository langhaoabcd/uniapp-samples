import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
// import apis from './apis/api_list.js'
// import clineDB from './apis/controller/index.js'
Vue.use(uView);
Vue.config.productionTip = false
// Vue.prototype.$apis=apis
// Vue.prototype.$clineDB=clineDB
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
