let webview = function() {
    var factory = {
        information: null
    }
    factory.webview = function(callback) {
        if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); } else {
            document.addEventListener('WebViewJavascriptBridgeReady', function() {
                return callback(WebViewJavascriptBridge);
            }, false)
        }
        if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
        window.WVJBCallbacks = [callback];
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'; //通过发送地址吊起方法，双重保证
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
    }
    factory.share = function(content) {
        this.webview(function(bridge) {
            bridge.callHandler('invitation', content, function(responseData) { //请求OC

            })
        })
    }
    factory.getShareDetail = function(content) {
        this.webview(function(bridge) {
            bridge.callHandler('getShareDetail', content, function(responseData) { //请求OC

            })
        })
    }
    factory.toLogin = function(content) {
        this.webview(function(bridge) {
            bridge.callHandler('toLogin', content, function(responseData) { //请求OC

            })
        })
    }
    factory.CustomerService = function(content) {
        this.webview(function(bridge) {
            bridge.callHandler('CustomerService', content, function(responseData) { //请求OC

            })
        })
    }
    factory.getUserInfos = function(callback) {
        this.webview(function(bridge) {
            bridge.callHandler('getUserInfos', function(responseData) { //请求OC
                callback(responseData)
            })
        })
    }
    factory.doTheTask = function(callback) {
        this.webview(function(bridge) {
            bridge.callHandler('doTheTask', function(responseData) { //请求OC

            })
        })
    }
    factory.call = function(phone) {
        this.webview(function(bridge) {
            console.log(phone)
            bridge.callHandler('call', phone, function(responseData) { //请求OC
            })
        })
    }
    factory.GetActiveId = function(id) {
        this.webview(function(bridge) {
            bridge.callHandler('GetActiveId', id, function(responseData) { //请求OC
            })
        })
    }
    factory.CustomerService = function(id) {
        this.webview(function(bridge) {
            bridge.callHandler('CustomerService', id, function(responseData) { //请求OC

            })
        })
    }
    factory.callBack = function(id) {
        this.webview(function(bridge) {
            bridge.callHandler('callBack', id, function(responseData) { //请求OC

            })
        })
    }
    factory.openAppleStore = function(id) {
        this.webview(function(bridge) {
            bridge.callHandler('openAppleStore', id, function(responseData) { //请求OC

            })
        })
    }
    factory.JudgeSystem = function() {
        var browser = {
            versions: function() {
                var u = navigator.userAgent,
                    app = navigator.appVersion;
                return {
                    trident: u.indexOf('Trident') > -1, //IE内核
                    presto: u.indexOf('Presto') > -1, //opera内核
                    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                    iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                    iPad: u.indexOf('iPad') > -1, //是否iPad
                    webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                    weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
                    qq: u.match(/\sQQ/i) == " qq" //是否QQ
                };
            }(),
            language: (navigator.browserLanguage || navigator.language).toLowerCase()
        }
        return browser.versions.android;
    }
    return factory

}
var webviewBridge = new webview
export default webviewBridge;