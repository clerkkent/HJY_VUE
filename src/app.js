import Vue from 'vue'
import router from './router/router'
import store from './store/state'
import iView from 'iview'
import VueRouter from 'vue-router'
import 'iview/dist/styles/iview.css'; // 使用 CSS
import resize from './global/rem'
resize();
Vue.use(iView)
Vue.use(VueRouter);
new Vue({
        router,
        store
    }).$mount('#root') //挂载vue实例