<template>
<div class="result" v-clientheight>
    <header>
        <h3>京AFFFFFF</h3>
        <P>编辑</P>
    </header>
    <section>
        <div class="overview">
            <p>
                <span class="title">未处理违章</span><br/>
                <span class="info">0条</span>
            </p>
            <p>
                <span class="title">积分</span><br/>
                <span class="info">6分</span>
            </p>
            <p>
                <span class="title">罚款</span><br/>
                <span class="info">￥600</span>
            </p>
        </div>
        <ul class="list">
            <li>
                <h3>2017/8/7&nbsp&nbsp&nbsp12:00</h3>
                <p>
                    <span class="title">违章地点：</span>
                    <span class="content">二环路xxxxxxxx</span>
                </p>
                <p>
                    <span class="title">违章行为：</span>
                    <span class="content">二环路xxxxxxxx</span>
                </p>
                <p>
                    <span class="title">扣分：</span>
                    <span class="content">二环路xxxxxxxx</span>
                </p>
                <p>
                    <span class="title">状态：</span>
                    <span class="content">二环路xxxxxxxx</span>
                </p>
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
            overflow:hidden;
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
                            display:inline-block;
                            color: #999999;
                            letter-spacing: 0;
                            text-align:left;
                            text-indent:.3rem;
                        }
                        .content{
                            font-family: PingFangSC-Regular;
                            font-size: 0.238933rem;
                            color: #151515;
                            letter-spacing: 0;
                        }
                    }
                }
            }
        }
    }
</style>
