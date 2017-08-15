<template>
    <div class="city_select" v-clientheight>
        <div class="left">
            <header>已选城市（可选多个城市）</header>
            <section>
                <ul class="selected">
                    <li>
                        fuck
                    </li>
                    <span></span>
                </ul>
                <ul class="select">
                    <li>
                        <h3>A</h3>
                        <p>安阳</p>
                        <p>安阳</p>
                        <p>安阳</p>
                        <p>安阳</p>
                        <p>安阳</p>
                        <p>安阳</p>
                        <p>安阳</p>
                        <p>安阳</p>
                        <p>安阳</p>
                    </li>
                     <li>
                        <h3>B</h3>
                        <p>安阳</p>
                        <p>安阳</p>
                        <p>安阳</p>
                        <p>安阳</p>
                        <p>安阳</p>
                        <p>安阳</p>
                        <p>安阳</p>
                        <p>安阳</p>
                        <p>安阳</p>
                    </li>
                </ul>
            </section>
        </div>
        <div class="right">
            <p>A</p>
            <p>B</p>
        </div>
    </div>
</template>
<script>
import bus from '../bus'
import store from '../store/state'
import router from '../router/router'
export default{
    name:"city_select",
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
     .city_select{
         position:fixed;
         z-Index:2;
         top:0;
         background:#fff;
         width:100%;
         display:flex;
         flex-flow:row nowrap;
         .left{
            flex:1;
            header{
                font-family: PingFangSC-Regular;
                font-size: 0.238933rem;
                color: #37A2F6;
                letter-spacing: 0;
                height:0.819199rem;
                line-height:0.819199rem;
                text-indent:.5rem;
            }
            section{
                .selected{
                    width:100%;
                    height:auto;
                    display:flex;
                    flex-flow:row nowrap;
                    justify-content:space-between;
                    padding:0 10%;
                    li{
                        height:37px;
                        background:#eee;
                        position:relative;
                        padding:0.170667rem;
                        span{
                            width:0.341333rem;
                            height:0.341333rem;
                            @include backgroundset("../asset/images/Violation/ic_cl2.png",center,center,100%)
                            display:block;
                            position:absolute;
                            right:-0.170667rem;
                            top:-0.170667rem;
                        }
                    }
                }
            }
         }
         .right{
             width:0.341333rem;
         }
     }
</style>