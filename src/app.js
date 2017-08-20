import Vue from 'vue'
import router from './router/router'
import store from './store/state'
import iView from 'iview'
import 'iview/dist/styles/iview.css'; // 使用 CSS
Vue.use(iView)

import VueRouter from 'vue-router'
Vue.use(VueRouter);


import resize from './global/rem'
// import popum from './global/GlobalComponent'
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(MintUI);


import Validator from 'vue-validator'
Vue.use(Validator)

resize();


// Vue.use(popum)
new Vue({
        router,
        store
    }).$mount('#root') //挂载vue实例