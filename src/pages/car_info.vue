<template>
    <div class="car_info" v-clientheight>
        <div v-if="!CarDefault">
            <form>
                <div class="city">
                    <p class="list_title">
                        查询城市
                    </p>
                    <p class="content">
                        可选多个城市
                    </p>
                </div>
                <div class="lpn">
                    <p class="list_title">
                        车牌号
                    </p>
                    <p class="content">
                        <span>京</span>
                        <input type="number" placeholder="" value="2334323" autocomplete="off"/>
                    </p>
                </div>
                <div class="En">
                    <p class="list_title">
                        发动机号
                    </p>
                    <p class="content">
                    <input type="number" placeholder="请输入发动机号" value="" autocomplete="off"/>
                    </p>
                </div>
                <div class="VIN">
                    <p class="list_title">
                        车架号
                    </p>
                    <p class="content">
                    <input type="number" placeholder="请输入车架号" value="" autocomplete="off"/>
                    </p>
                </div>
            </form>
            <p class="remind" @click="remind">如何查找爱车发动机好，上架号？</p>
        <Button type="warning" style="width:90%;" long>确认提交</Button>
        <!-- <cs></cs> -->
        <div class="fade" v-if="show" @click="close" v-clientheight>
            <div>xxx</div>
        </div>
       </div>
       <CarDefault v-if="CarDefault"></CarDefault>
    </div>
</template>
<script>
import store from '../store/state'
import router from '../router/router'
import directive from '../directive/clientheight'

const cs= resolve => require(['../components/city_select'], resolve);
const CarDefault = resolve => require(['../components/CarDefault'], resolve);
export default{
    components: {
        cs,
        CarDefault
    },
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
            hhe:'fuck',
            CarDefault:true
        }
    },
    methods:{
        dosomething (){
            this.content="混合"
            router.push({ path: '/second' })//栈导航
        },
        remind(){
            this.show=true
        },
        close(){
            this.show=false
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
    .car_info{
         background:#eee;
         .fade{
             width:100%;
             position:fixed;
             background:rgba(black,.5);
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