<template>
<div class="car_list" v-clientheight>
        <ul class="list">
            <li>
                <h3>
                    <p class="cn">京AF22222</p>
                    <p class="go_check">马上查违章</p>
                </h3>
                <div class="content">
                    <div class="left">
                    <p>20</p>
                    </div>
                    <div class="right">
                        <p class="title">
                            上次查询结果：
                        </p>
                        <p>
                            扣分：999分
                        </p>
                        <p>
                            罚款:100000000000
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</div>
</template>
<script>
import store from '../store/state'
import router from '../router/router'
import directive from '../directive/clientheight'
export default{
    props:{
            id:{
                type:Number
            }
        },
    data(){
        return {
            show:false,
            content:'x',
            num:200,
            hhe:'fuck'
        }
    },
    methods:{
        dosomething (){
            this.content="混合"
            router.push({ path: '/second' })//栈导航
        }
    },
    computed: {
            count () {
            return store.state
        }
    }
    }
</script>
<style lang="sass" scoped>
    @import "../sass/temp.scss";
    .car_list{
        background:#eee;
        overflow:hidden;
        .list{
            height:100%;
            overflow:scroll;
            li{
                height:2.423465rem;
                width:5.802662rem;
                border-radius:0.085333rem;
                margin:.3rem auto;
                background:#fff;
                display:flex;
                flex-flow:column nowrap;
                justify-content:space-between;
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
