<template></template>
    <transition :name="fadeIn">
        <div class="alertBox" v-show="show">
            <div class="alert-mask" v-show="isShowMask"></div>
            <transition :name="translate">
                <div class="box" :class="position" v-show="show"> {{text}} </div>
            </transition>
        </div>
    </transition>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        props:{
            show:{
                default:'loading'
            },
            text:{
                default:'center'
            },
            position:{
                default:'center'
            },
            isShowMask:{
                default:false
            },
            time:{
                default:1500
            },
            transition:{
                default:true
            },
            mounted(){
                setTimeout(()=>{
                    this.show=false
                },this.time)
            }
        }
    }
</script>