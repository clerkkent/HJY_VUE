<template>
    <div class="car_info" v-clientheight>
        <div v-if="!CarDefault">
            <form id="registerForm">
                <!-- <div class="city">
                                                                        <p class="list_title">
                                                                            查询城市
                                                                        </p>
                                                                        <p class="content">
                                                                            可选多个城市
                                                                        </p>
                                                                    </div> -->
                <div class="lpn">
                    <p class="list_title">
                        车牌号
                    </p>
                    <p class="content">
                        <span @click="SelectCarSign">{{carsign}}</span>
                        <input type="text" v-model="submitData.lpn" name="lpn" placeholder="" value="2334323" autocomplete="off" />
                    </p>
                </div>
                <div class="En">
                    <p class="list_title">
                        发动机号
                    </p>
                    <p class="content">
                        <input type="text" v-model="submitData.En" name="En" placeholder="请输入发动机号" value="" autocomplete="off" />
                    </p>
                </div>
                <div class="VIN">
                    <p class="list_title">
                        车架号
                    </p>
                    <p class="content">
                        <input type="text" v-model="submitData.VIN" name="VIN" placeholder="请输入车架号" value="" autocomplete="off" />
                    </p>
                </div>
            </form>
            <!-- <Button @click="popum">标准</Button> -->
            <p class="remind" @click="remind">如何查找爱车发动机好，上架号？</p>
            <Button type="warning" style="width:90%;" long @click="request">确认提交</Button>
            <!-- <cs></cs> -->
            <div class="fade" v-if="show" @click="close" v-clientheight>
                <div class="ex"></div>
            </div>
        </div>
        <!-- <CarDefault v-if="CarDefault"></CarDefault> -->
        <CarSign v-show="carsignshow"></CarSign>
    </div>
</template>
<script>
    import store from '../store/state'
    import router from '../router/router'
    import directive from '../directive/clientheight'
    // const CarDefault = resolve => require(['../components/CarDefault'], resolve);
    const CarSign = resolve => require(['../components/carsign'], resolve);
    import {
        Toast
    } from 'mint-ui';
    import http from '../global/http'
    import ValidataResult from '../global/verify'
    export default {
        components: {
            // CarDefault,
            CarSign
        },
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
                hhe: 'fuck',
                CarDefault: false,
                CarSign: true,
                submitData: {
                    lpn: "",
                    En: "",
                    VIN: ""
                }
            }
        },
        methods: {
            dosomething() {
                this.content = "混合"
                router.push({
                    path: '/second'
                }) //栈导航
            },
            remind() {
                this.show = true
            },
            close() {
                this.show = false
            },
            SelectCarSign() {
                this.$store.dispatch("carsignshow");
            },
            addcar() {
                this.CarDefault = false
            },
            request() {
                if (ValidataResult(this.submitData) == true) {
                    if (store.state.index.cid == "") {
                        var list = {
                            "jsonrpc": "2.0",
                            "method": "addUserCarInfo",
                            "params": [{
                                "uid": store.state.index.user_id,
                                // "cid": 1,
                                "hphm": store.state.index.carsign + this.submitData.lpn,
                                "engineno": this.submitData.En,
                                "classno": this.submitData.VIN,
                            }],
                            "id": 1
                        }
                    } else {
                        var list = {
                            "jsonrpc": "2.0",
                            "method": "addUserCarInfo",
                            "params": [{
                                "uid": store.state.index.user_id,
                                "cid": store.state.index.cid,
                                "hphm": store.state.index.carsign + this.submitData.lpn,
                                "engineno": this.submitData.En,
                                "classno": this.submitData.VIN,
                            }],
                            "id": 1
                        }
                    }
                    http("/passport/service.php?c=illegal", list).then((data) => {
                        console.log(data.data.result)
                        if (data.data.result.code == -1) {
                            Toast({
                                message: data.data.result.msg,
                                iconClass: 'icon icon-success',
                                duration: 1000
                            });
                        } else {
                            router.push({
                                path: '/car_list',
                                query: {
                                    userId: 123
                                }
                            })
                        }
                    })
                } else {
                    Toast({
                        message: ValidataResult(this.submitData),
                        iconClass: 'icon icon-success',
                        duration: 1000
                    });
                }
            },
            popum() {
                console.log(ValidataResult(this.submitData))
                // ValidataResult()
            },
            refresh() {
                var list = {
                    "jsonrpc": "2.0",
                    "method": "getUserCarLists",
                    "params": [{
                        "uid": 460,
                    }],
                    "id": 1
                }
                http("/passport/service.php?c=illegal", list).then((data) => {
                    if (data.data.result.data.length == 0) {
                        router.push({
                            path: '/car_default',
                        })
                    } else {
                        this.car = data.data.result.data
                    }
                })
            }
        },
        computed: {
            carsignshow() {
                return store.state.index.show
            },
            carsign() {
                return store.state.index.carsign
            }
        },
        beforeMount: function() {
            // this.refresh()
        }
    }
</script>
<style lang="sass" scoped>
    @import "../sass/temp.scss";
    .car_info{
         background:#eee;
         overflow:hidden;
         .fade{
             width:100%;
             position:fixed;
             @include backgroundset("../asset/images/Violation/ic_dr.png",center,center,90%);
             background-color:rgba(black,.5);
             top:0;
             transition:all .6s;
         }
         form{
             height:3.037864rem;
             width:100%;
             display:flex;
             flex-flow:column nowrap;
             justify-content:space-around;
             div{
                height:0.682666rem;
                display:flex;
                line-height:0.682666rem;
                flex-flow:row nowrap;
                justify-content:space-between;
                margin-bottom:0.034133rem;
                background:#fff;
                p{
                    height:0.682666rem;
                    line-height:0.682666rem;

                }
                .list_title{
                    width:3.41333rem;
                    text-align:left;
                    font-family: PingFangSC-Regular;
                    font-size: 0.238933rem;
                    color: #666666;
                    letter-spacing: 0;
                    text-indent:.3rem;
                }
                input{
                    border:none;
                    text-align:center;
                    width:2.218665rem;
                    border:none;
                }
             }
             .city{
                .content{
                    width:1.918665rem;
                    text-align:left;
                    font-family: PingFangSC-Regular;
                    font-size: 0.238933rem;
                    color: #999999;
                    letter-spacing: 0;
                    @include backgroundset("../asset/images/Violation/ic_me_Details.png",95%,.08rem,25%);
                }
             }
             .lpn{
                .content{
                    width:2.401331rem;
                    span{
                        font-family: PingFangSC-Regular;
                        font-size: 0.238933rem;
                        width:0.767999rem;
                        display:inline-block;
                        color: #37A2F6;
                        letter-spacing: 0;
                        text-align:left;
                         @include backgroundset("../asset/images/Violation/ic_me_Details.png",right,.08rem,.5rem);
                    }
                    input{
                        width:1.347998rem;
                        font-family: PingFangSC-Regular;
                        font-size: 0.238933rem;
                        color: #333333;
                        letter-spacing: 0;
                    }
                }
             }
            .En{
                .content{
                    width:2.486664rem;
                }
             }
            .VIN{
                .content{
                    width:2.486664rem;
                }
             }
         }
        .remind{
                margin:0.2048rem;
                font-family: PingFangSC-Regular;
                font-size: 0.2048rem;
                color: #37A2F6;
                letter-spacing: 0;
                padding-left:.5rem;
                @include backgroundset("../asset/images/Violation/ic_more2.png",left,center,.4rem);
           }
          button{
            margin:0 auto;
            margin-top:.5rem;
            display:block;
            height:0.853333rem;
          }
     }
</style>