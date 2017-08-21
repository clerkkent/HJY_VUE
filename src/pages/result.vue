<template>
    <div class="result" v-clientheight>
        <header>
            <h3>{{main.hphm}}</h3>
            <P @click="edit">编辑</P>
        </header>
        <section>
            <div class="overview">
                <p>
                    <span class="title">未处理违章</span><br/>
                    <span class="info">{{main.unhandeled}}条</span>
                </p>
                <p>
                    <span class="title">积分</span><br/>
                    <span class="info">{{main.fen}}分</span>
                </p>
                <p>
                    <span class="title">罚款</span><br/>
                    <span class="info">￥{{main.money}}</span>
                </p>
            </div>
            <ul class="list" v-if="!show">
                <li v-for="item in record">
                    <h3>{{item.date}}</h3>
                    <p>
                        <span class="title">违章地点：</span>
                        <span class="content">{{item.area}}</span>
                    </p>
                    <p>
                        <span class="title">违章行为：</span>
                        <span class="content">{{item.act}}</span>
                    </p>
                    <p>
                        <span class="title">扣分：</span>
                        <span class="content">{{item.fen}}分</span>
                    </p>
                    <p>
                        <span class="title">罚款：</span>
                        <span class="content">￥{{item.money}}</span>
                    </p>
                    <p>
                        <span class="title">状态：</span>
                        <span class="content">{{item.handled==0 ? "未处理" : "已处理"}}</span>
                    </p>
                </li>
            </ul>
            <div class="none_record" v-if="show">
                <p>你当前无违章行为，请继续保持</p>
            </div>
        </section>
    </div>
</template>
<script>
    import store from '../store/state'
    import router from '../router/router'
    import directive from '../directive/clientheight'
    import http from '../global/http'
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
                show: true,
                main: {},
                state: "",
                cid: this.$route.params.car.id,
                record: []
            }
        },
        methods: {
            dosomething() {
                this.content = "混合"
                router.push({
                    path: '/second'
                }) //栈导航
            },
            edit() {
                this.$store.dispatch("cid", {
                    cid: this.$route.params.car.id
                });
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
        mounted: function() {
            var list = {
                "jsonrpc": "2.0",
                "method": "GetViolationInfo",
                "params": [{
                    "hphm": this.$route.params.car.hphm,
                    "uid": store.state.index.user_id,
                }],
                "id": 1
            }
            console.log(list)
            http("/passport/service.php?c=violation", list).then((data) => {
                let key = JSON.stringify(this.$route.params.car.hphm);
                let list = JSON.parse(data.data.result.data)
                let first = list
                let message = first
                let record = JSON.parse(message.lists)
                this.record = record;
                this.main = message;
                console.log(message)
                console.log(record)
                if (record.length == 0) {
                    this.show = true;
                } else {
                    this.show = false;
                    this.car = data.data.result.data
                }
            })
        },
    }
</script>
<style lang="sass" scoped>
    @import "../sass/temp.scss";
    .result{
        display:flex;
        flex-direction:column;
        header{
            height:0.767999rem;
            display:flex;
            flex-flow:row nowrap;
            justify-content:space-between;
            background: #FFD34E;
            h3{
                font-family: PingFangSC-Regular;
                font-size: 0.3584rem;
                color: #333333;
                letter-spacing: 0;
                text-align:center;
                width:2.133332rem;
                line-height:0.76rem;
                text-indent:.3rem;
            }
            p{
              width:1.194666rem;
              line-height:.8rem;
              height:0.76rem;
              font-family: PingFangSC-Regular;
              font-size: 0.238933rem;
              color: #333333;
              letter-spacing: 0;
            }
        }
        section{
            overflow:scroll;
            flex:1;
            display:flex;
            flex-direction:column;
            .overview{
                height:1.416799rem;
                display:flex;
                flex-flow:row nowrap;
                justify-content:space-between;
                padding:0.3rem 0;
                p{
                    flex:1;
                    height:0.716799rem;
                    border-right:1px solid #999;
                    text-align:center;
                    line-height:.4rem;
                    .title{
                        font-family: PingFangSC-Regular;
                        font-size: 0.238933rem;
                        color: #999999;
                        letter-spacing: 0;
                    }
                    .content{
                        font-family: PingFangSC-Regular;
                        font-size: 0.238933rem;
                        color: #333333;
                        letter-spacing: 0;
                        margin-top:.2rem;
                    }
                }
                p:last-child{
                    border-right:none;
                }
            }
            .list{
                flex:1;
                overflow:scroll;
                li{
                    width:100%;
                    padding:0.170667rem 5%;
                    height:3.41333rem;
                    display:flex;
                    flex-flow:column nowrap;
                    justify-content:space-between;
                    h3{
                        background: #FFEBAE;
                        height:0.512rem;
                        text-indent:.3rem;
                        line-height:.512rem;
                        border-radius: 0.256rem;
                    }
                    p{
                        .title{
                            font-family: PingFangSC-Regular;
                            font-size: 0.238933rem;
                            width:1.597066rem;
                            color: #999999;
                            letter-spacing: 0;
                            text-align:left;
                            text-indent:.3rem;
                            display:inline-block;
                        }
                        .content{
                            font-family: PingFangSC-Regular;
                            font-size: 0.238933rem;
                            color: #151515;
                            letter-spacing: 0;
                            @include ell;
                        }
                    }
                }
            }
            .none_record{
                flex:1;
                @include backgroundset("../asset/images/Violation/ic_qs2.png",center,30%,3rem);
                p{
                    text-align:center;
                    margin-top:80%;
                    font-family: PingFangSC-Regular;
                    font-size:0.256rem;
                    color: #999999;
                    letter-spacing: 0;
                }
            }
        }
    }
</style>
