import axios from 'axios'
require("es6-promise").polyfill;
var base64 = require('base-64');
var md5 = require('js-md5');
$.extend({
    uncode: function(x) {
        var data = null;
        if (x.result != undefined) {
            if (md5(x.result.info + "HUIJIAYOU_TOKEN") == x.result.sign) {
                var ri = x.result.info;
                var uri = base64.decode(ri)
                for (var key in x.result) {
                    delete x.result[key];
                }
                x.result = JSON.parse(uri);
                data = x;
            }
        } else {
            data = x;
        }
        return x;
    }
});
// var arr = [{ id: 1, X: 3, Y: 4 }, { id: 2, X: 3, Y: 4 }, { id: 2, X: 3, Y: 4 }, { id: 4, X: 3, Y: 4 }, { id: 5, X: 3, Y: 4 }];
// var unique = {};
// arr.forEach(function(a) { unique[JSON.stringify(a)] = 1 });
// arr = Object.keys(unique).map(function(u) { return JSON.parse(u) });
// console.log(arr)


axios.interceptors.response.use(function(response) {
    if (response.data.result != undefined) {
        response.data = $.uncode(response.data);
    }
    return response;
}, function(error) {
    // Do something with response error
    return Promise.reject(error);
});
let response = (url, data_send, authToken) => {
    let head = {}
    if (authToken != undefined) { //此处的登录状态cookie设置还需要更改
        head = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        window.document.cookie = "OIL_TOKEN=" + authToken + ";path=/;";
    } else {
        head = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    const isPro = process.env.NODE_ENV.trim() === 'production';
    let url_d = null;
    isPro ? url_d = location.origin + url : url_d = url
        // url_d = "https://test1.ihuijiayou.com" + url
    let data = axios({
        method: 'POST',
        url: url_d,
        headers: head,
        data: data_send
    })
    return data
}
export default response