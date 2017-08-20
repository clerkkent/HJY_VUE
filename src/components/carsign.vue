<template>
    <div class="CarSign" v-clientheight>
        <section>
            <ul>
                <li v-for="item in carsign">{{item}}</li>
            </ul>
             <Button type="warning" class="confirm" style="" long @click="carsignhide">选好了</Button>
        </section>
    </div>
</template>
<script>
import bus from '../bus'
import store from '../store/state'
import router from '../router/router'
export default{
    name:"carsign",
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
        carsignhide (){
             this.$store.dispatch("carsignhide");
        },
    },
    computed: {
        carsign(){
            return store.state.index.CarFirst;
        }
    }
    }
</script>
<style lang="sass" scoped>
@import "../sass/temp.scss";
    .CarSign{
       background:rgba(black,.5);
       position:fixed;
       top:0;
       width:100%;
       section{
            background:#FFF;
            position:absolute;
            bottom:0;
            width:100%;
            ul{
                display:flex;
                flex-flow:row wrap;
                justify-content:space-around;
                width:100%;
                height:auto;
                li{
                    width:0.512rem;
                    height:0.512rem;
                    margin:.2rem;
                    text-align:center;
                    line-height:.512rem;
                    border:1px solid #999;
                    border-radius:5%;
                }
            }
       }
    }
</style>