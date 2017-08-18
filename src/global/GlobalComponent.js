import popumComponent from '../components/popum'
import Vue from 'vue'
let Toast = Object
Toast.install = (Vue, options) => {
    if (Document.getElementsByTagName("body").length) {
        return
    }
    let toastTpl = Vue.extend(popumComponent)
    let $vm = new toastTpl()
    let tpl = $vm.$mount().$el
    document.body.appendChild(tpl)
    Vue.prototype.$toast = {
        show(options) {
            if (typeof options === 'string') {
                $vm.text = options
            } else if (typeof options === "object") {
                Object.assign($vm, options)
            }
            $vm.show = true
        },
        hide() {
            $vm.show = false
        }
    }
}
export default Toast