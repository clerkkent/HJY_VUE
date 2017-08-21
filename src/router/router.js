import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = resolve => require(['../components/index'], resolve)
const Second = resolve => require(['../components/second'], resolve)
const Bar = resolve => require(['../components/Bar'], resolve)
const Baz = resolve => require(['../components/Baz'], resolve)

const Car_Info = resolve => require(['../pages/car_info'], resolve)
const result = resolve => require(['../pages/result'], resolve)
const car_list = resolve => require(['../pages/car_list'], resolve)
const CarDefault = resolve => require(['../pages/CarDefault'], resolve)

const isPro = process.env.NODE_ENV.trim() === 'production'
const routerConfig = {
    mode: isPro ? 'history' : 'hash',
    base: '/bbs/',
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 }
    },
    routes: [{
            path: '/x',
            name: 'de',
            props: { name: 'name' },
            components: {
                default: CarDefault,
                a: Bar,
                b: Baz
            }
        },
        // {
        //     path: '/index',
        //     name: 'index',
        //     props: { name: 'name' },
        //     component: Index,
        //     children: [{
        //         path: 'children',
        //         component: Second
        //     }]
        // },
        { path: '/second', name: 'second', props: { name: 'name' }, component: Second },
        {
            path: '/car_info',
            name: 'car_info',
            component: Car_Info
        },
        {
            path: '/result',
            name: 'result',
            component: result
        },
        {
            path: '/car_list',
            name: 'car_list',
            component: car_list
        },
        {
            path: '/car_default',
            name: 'car_default',
            component: CarDefault
        }
    ]
}
const router = new VueRouter(routerConfig)
export default router