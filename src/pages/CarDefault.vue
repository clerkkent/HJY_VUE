<template>
    <div class="CarDefault" v-clientheight>
        <header>
            马上添加车辆吧，看看车辆违章没？
        </header>
        <Button type="warning" @click="carinfo" class="confirm" style="width:90%;" long>添加车辆</Button>
    </div>
</template>
<script>
    import bus from '../bus'
    import store from '../store/state'
    import router from '../router/router'
    import http from '../global/http'
    import directive from '../directive/clientheight'
    import {
        Toast
    } from 'mint-ui';
    import webviewBridge from '../global/webview'
    export default {
        name: "default",
        props: {
            id: {
                type: Number
            }
        },
        data() {
            return {
                show: false,
                content: 'x',
                num: 200,
                hhe: 'fuck'
            }
        },
        methods: {
            refresh() {
                var list = {
                    "jsonrpc": "2.0",
                    "method": "getUserCarLists",
                    "params": [{
                        "uid":store.state.index.user_id,
                    }],
                    "id": 1
                }
                http("/passport/service.php?c=illegal", list).then((data) => {
                    console.log(data.data.result)
                    if (data.data.result.data.length == 0) {
                        Toast({
                            message: data.data.result.msg,
                            iconClass: 'icon icon-success',
                            duration: 1000
                        });
                    } else {
                        const isPro = process.env.NODE_ENV.trim() === 'production';
                        const redirect=isPro?location.origin+"/wechat/dist/#/car_list":location.origin+"/#/car_list"
                         console.log(redirect)
                        location.replace(redirect)
                    }
                })
            },
            carinfo() {
                router.push({
                    path: '/car_info',
                })
            }
        },
        computed: {
            count() {
                return store.state
            }
        },
        beforeMount: function() {
            if (webviewBridge.JudgeSystem()) {
                var axxxx = JSON.parse(hjytest.getUserInfos("js调用了android中的hello方法"));
                if (axxxx.user_id == "" && axxxx.OIL_TOKEN == "") {
                    hjytest.toLogin(" ");
                } else {
                    this.$store.dispatch("login", {
                        user_id: axxxx.user_id,
                        token: axxxx.OIL_TOKEN
                    });
                    window.document.cookie = "OIL_TOKEN=" + axxxx.OIL_TOKEN + ";path=/;";
                }
            } else {
                webviewBridge.getUserInfos(function(res) {
                    var info = JSON.parse(res)
                    if (info.user_id == "" && info.OIL_TOKEN == "") {
                        webviewBridge.toLogin()
                    } else {
                        this.$store.dispatch("login", {
                            user_id: axxxx.user_id,
                            token: axxxx.OIL_TOKEN
                        });
                        window.document.cookie = "OIL_TOKEN=" + axxxx.OIL_TOKEN + ";path=/;";
                    }
                })
            }
            this.refresh();
        }
    }
</script>
<style lang="sass" scoped>
@import "../sass/temp.scss";
    .CarDefault{
        background:#FFF;
        header{
            @include center-block;
            height:1rem;
            width:5.119996rem;
            display:block;
            margin-top:35%;
            text-align:center;
            vertical-align:bottom;
            padding-top:2.5rem;
            @include backgroundset("../asset/images/Violation/ic_qs.png",center,top,50%);
            font-family: PingFangSC-Regular;
            font-size: 0.256rem;
            color: #999999;
            letter-spacing: 0;
        }
        .confirm{
            @include center-block;
            height:0.853333rem;
            width:5.768528rem;
        }
    }
</style>