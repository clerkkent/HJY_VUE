<template>
    <div class="CarDefault" v-clientheight>
        <header>
            马上添加车辆吧，看看车辆违章没？
        </header>
        <Button type="warning" style="width:90%;" long>确认提交</Button>
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
        }
    }
</style>