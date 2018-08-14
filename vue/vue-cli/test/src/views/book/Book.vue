
<template>
    <div>
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
        <!--<div>-->
            <!--<ul>-->
                <!--<li v-for="(items,index) in dataList" :key='index+"dl"'>-->
                    <!--<img :src="" alt="">-->
                <!--</li>-->
            <!--</ul>-->
        <!--</div>-->
    </div>
</template>
<style scoped>
    .my-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }

    .slide1 {
        background: url("../../../public/img/shu.jpg") center/cover no-repeat;

        color: #fff;
    }

    .slide2 {
        background: url("../../../public/img/shu2.jpg") center/cover no-repeat;
        color: #000;
    }

    .slide3 {
        background: url("../../../public/img/shu3.jpg") center/cover no-repeat;
        color: #fff;
    }
</style>
<script>
    require('vue-swipe/dist/vue-swipe.css');
    import { Swipe, SwipeItem } from 'vue-swipe';
    export default{
        data(){
            return{
                dataList:[]
            }
        },
        components: {
            'swipe': Swipe,
            'swipe-item': SwipeItem
        },
        created(){
            this.$emit("add","书籍",'book')
            this.getDate();
        },
//        methods: {
//            getData(){
//                axios.get(API_PROXY+'https://api.douban.com/v2/book/:id')
//                    .then( (response)=> {
//                        this.dataList=response.data.subjects
//                        console.log(response)
//
//                    })
//                    .catch((error)=> {
//                        console.log(error);
//                    });
//            }
//        }
    }
</script>