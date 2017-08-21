<template>
    <div class="car_list" v-clientheight>
        <ul class="list">
            <li v-for="item in car" @touchstart="_touchStart" @touchmove="_touchMove($event)" @touchend="_touchEnd">
                <h3>
                    <p class="cn">{{item.hphm}}</p>
                    <p class="go_check" @click="check(item)">马上查违章</p>
                </h3>
                <div class="content">
                    <div class="left">
                        <p>{{item.handled}}</p>
                    </div>
                    <div class="right">
                        <p class="title">
                            上次查询结果：
                        </p>
                        <p>
                            扣分：{{item.fen}}分
                        </p>
                        <p>
                            罚款:{{item.money}}
                        </p>
                    </div>
                </div>
                <div class="del" @click="confirm(item)"></div>
            </li>
        </ul>
        <Button type="warning" style="height:.8rem;" long @click="addmore">新增</Button>
        </section>
        <div class="fade" v-if="show" @click="close" v-clientheight>
                <div class="ex"></div>
        </div>
    </div>
</template>
<script>
    import store from '../store/state'
    import router from '../router/router'
    import directive from '../directive/clientheight'
    import http from '../global/http'
    import {
        MessageBox
    } from 'mint-ui';
    import {
        Toast
    } from 'mint-ui';
    export default {
        props: {
            id: {
                type: Number
            }
        },
        data() {
            return {
                startX: 0, //触摸位置
                moveX: 0, //滑动时的位置
                disX: 0, //移动距离
                txtStyle: '',
                delWidth: 200,
                top: '',
                zIndex: 'z-index:-1',
                car: Object,
                show:false
            }
        },
        methods: {
            close() {
                this.show = false
            },
            _touchStart: function(ev) {
                ev = ev || event;
                if (ev.touches.length == 1) {
                    // 手指按下的时候记录按下的位置
                    this.startX = ev.touches[0].clientX;
                    console.log(this.startX)
                }
            },
            _touchMove: function(ev) {
                console.log(ev.currentTarget)
                ev = ev || event;
                if (ev.touches.length == 1) {
                    // 滑动过程中的实时位置
                    this.moveX = ev.touches[0].clientX
                    // 滑动过程中实时计算滑动距离
                    this.disX = this.startX - this.moveX;
                    // console.log('disX==>',this.disX)
                    // 如果是向右滑动或者只是点击，不改变滑动位置
                    if (this.disX < 0 || this.disX == 0) {
                        // console.log('没有移动');
                        ev.currentTarget.style = "transform:translateX(0rem)";
                    } else if (this.disX > 0) {
                        ev.currentTarget.style = "transform:translateX(-" + this.disX / 100 + "rem)";
                        if (this.disX >= this.delWidth / 100) {
                            ev.currentTarget.style = "transform:translateX(-" + this.delWidth / 100 + "rem)";
                            this.zIndex = "z-index:" + 10 + "rem";
                        }
                    }
                }
            },
            _touchEnd: function(ev) {
                if (event.changedTouches.length == 1) {
                    this.startX = 0;
                    this.zIndex = "z-index:" + -1 + "rem";
                    // 触摸开始与结束,手指移动的距离
                    // this.disX = this.startX - endX;
                    //如果距离小于删除按钮的1/2，不显示删除按钮
                }
            },
            deleteItem: function(index) {
                this.$emit('deleteItem', index);
            },
            addmore: function() {
                this.$store.dispatch("cid", {
                    cid: ""
                });
                router.push({
                    name: 'car_info',
                })
            },
            check: function(x) {
                router.push({
                    name: 'result',
                    params: {
                        car: x
                    }
                })
            },
            confirm: function(x) {
                MessageBox.confirm('确认删除？').then(action => {
                    this.del(x)
                });
            },
            del: function(x) {
                var list = {
                    "jsonrpc": "2.0",
                    "method": "delUserCarInfo",
                    "params": [{
                        "uid": store.state.index.user_id,
                        "cid": x.id
                    }],
                    "id": 1
                }
                http("/passport/service.php?c=illegal", list).then((data) => {
                    if (data.data.result.data.length == 0) {
                        Toast({
                            message: data.data.result.msg,
                            iconClass: 'icon icon-success',
                            duration: 1000
                        });
                        this.refresh()
                    } else {
                        this.refresh()
                    }
                })
            },
            refresh() {
                var list = {
                    "jsonrpc": "2.0",
                    "method": "getUserCarLists",
                    "params": [{
                        "uid": store.state.index.user_id,
                    }],
                    "id": 1
                }
                http("/passport/service.php?c=illegal", list).then((data) => {
                    if (data.data.result.data.length == 0) {
                        Toast({
                            message: data.data.result.msg,
                            iconClass: 'icon icon-success',
                            duration: 1000
                        });
                        this.car = data.data.result.data
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
            count() {
                return store.state
            }
        },
        mounted: function() {
            if(localStorage.getItem("CheckNewClient")){
                this.show=false
            }else{
                this.show=true
                localStorage.setItem("CheckNewClient",true)
            }
            this.refresh()
        }
    }
</script>
<style lang="sass" scoped>
    @import "../sass/temp.scss";
    .car_list{
        .fade{
             width:100%;
             position:fixed;
             @include backgroundset("../asset/images/Violation/back.png",center,center,100%);
             background-color:rgba(black,.5);
             top:0;
             transition:all .6s;
         }
        background:#eee;
        overflow:hidden;
        display:flex;
        flex-flow:column nowrap;
        .list{
            flex:1;
            overflow-y:scroll;
            overflow-x:hidden;
            li{
                height:2.423465rem;
                width:5.802662rem;
                border-radius:0.085333rem;
                margin:.3rem auto;
                background:#fff;
                display:flex;
                flex-flow:column nowrap;
                justify-content:space-between;
                transition:all .6s;
                position:relative;
                .del{
                    width:1.228799rem;
                    height:100%;
                    right:-1.228799rem;
                    top:0;
                    position:absolute;
                    @include backgroundset("../asset/images/Violation/ic_d.png",center,right,0.780266rem);
                }
                h3{
                    height:0.887466rem;
                    background-image: linear-gradient(-134deg, #FFD34F 0%, #FFB324 100%);
                    display:flex;
                    flex-flow:row nowrap;
                    justify-content:space-between;
                    line-height:0.887466rem;
                    border-top-right-radius:0.085333rem;
                    border-top-left-radius:0.085333rem;
                    .cn{
                        font-family: PingFangSC-Regular;
                        font-size: 0.341333rem;
                        color: #333333;
                        width:2.474665rem;

                        text-align:center;
                    }
                    .go_check{
                        font-family: PingFangSC-Regular;
                        font-size: 0.256rem;
                        color: #333333;
                        width:2.218665rem;
                        letter-spacing: 0;
                        text-align:center;
                        margin-right:.2rem;
                        @include backgroundset("../asset/images/Violation/ic_Inquire.png",95%,.26rem,15%);
                    }
                }
                .content{
                    display:flex;
                    flex:1;
                    flex-flow:row nowrap;
                    justify-content:space-between;
                    .left{
                        width:1.801865rem;
                        position:relative;
                        p{
                            width:1.160532rem;
                            height:1.160532rem;
                            border:3px solid #FFD34E;
                            border-radius:0.580266rem;
                            @include center-block;
                            line-height:1.160532rem;
                            font-family: PingFangSC-Medium;
                            font-size: 0.4096rem;
                            color: #FFD34E;
                            letter-spacing: 0;
                            text-align:center;
                        }
                    }
                    .right{
                        flex:1;
                        display:flex;
                        flex-flow:column nowrap;
                        justify-content:space-around;
                        padding:.2rem 0;
                        .title{
                            font-family: PingFangSC-Regular;
                            font-size: 0.2048rem;
                            color: #999999;
                            letter-spacing: 1;
                        }
                        p{
                           font-family: PingFangSC-Regular;
                            font-size: 0.256rem;
                            color: #333333;
                            letter-spacing: 0;
                            text-align:left;
                        }
                    }
                }
            }
        }
    }
</style>
