<template>
    <div>
        <v-touch tag="div" class="content" v-on:swipeleft="onSwipeLeft" v-on:tap="onSwipeTap" v-on:swiperight="onSwipeRight"  :style="styleobj"></v-touch >
    </div>

</template>
<script>
    import Vue from 'vue'
    import VueTouch from 'vue-touch'
    Vue.use(VueTouch, {name: 'v-touch'})
    export default{
        data(){
            return{
                imgid:this.$route.params.id+1
            }
        },
        created(){
            this.$emit("add", "图片", 'photo')
        },
        computed:{
            styleobj(){
                console.log(this.imgid)
                return {
                    background:`#000 url('./img/${this.imgid}.jpg') no-repeat center/contain`}
            }

        },
        methods:{
            onSwipeLeft(){
                this.imgid--
                if(this.imgid<1){
                    this.imgid=10
                }
                console.log('left');


            },
            onSwipeRight(){
                this.imgid++
                if(this.imgid>10){
                    this.imgid=1
                }
                console.log('right');
            },
            onSwipeTap(){
                this.$router.go(-1)
                console.log('tap');

            }
        }

    }
</script>
<style>
    .content{
        position: fixed;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>