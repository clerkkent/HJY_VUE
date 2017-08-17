<template>
    <div class="CarDefault" v-clientheight>
        <header>
            马上添加车辆吧，看看车辆违章没？
        </header>
        <Button type="warning" class="confirm" style="width:90%;" long>添加车辆</Button>
    </div>
</template>
<script>
import bus from '../bus'
import store from '../store/state'
import router from '../router/router'
export default{
    name:"default",
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