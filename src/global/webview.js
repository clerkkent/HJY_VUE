let webview = () => {
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
    return factory

}
export default webview;