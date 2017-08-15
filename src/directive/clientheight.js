import Vue from 'vue'
Vue.directive('clientheight', {
    // 当绑定元素插入到 DOM 中。
    inserted: function(el) {
        // 聚焦元素
        console.log()
        el.style.height = document.documentElement.clientHeight + "px";
    }
})