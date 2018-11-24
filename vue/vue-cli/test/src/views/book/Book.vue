
<template>
    <div>
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
        <div>
            <ul>
                <li v-for="(items,index) in dataList" :key='index+"ml"'>
                    <div class="hang">
                    <img :src="items.bg" alt="">
                    <div class="div">
                        <h2>{{items.name}}</h2>
                        <div>作者：{{items.editor}}</div>
                        <div>出版社：{{items.componey}}</div>
                        <div>出版时间：{{items.time}}</div>
                        <div>定价：{{items.price}}</div>

                    </div>
                    </div>
                    <div>主要内容：{{items.content}}</div>

                </li>

            </ul>
        </div>
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
    li img{
        height: 3rem;
        width: 2.3rem;
        margin: 20px 20px 20px 5px;
    }
    li{
        display: flex;
        flex-direction: column;
        border-bottom: 2px solid gainsboro;

    }
    .div{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .hang{
        display: flex;
    }
    .div div{
        font-size: 17px;
    }

</style>
<script scoped>
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
            this.getData()
        },
        methods: {
            getData(){
                axios.get('./data/booklist.json')
                    .then( (response)=> {
                        this.dataList=response.data.albums
                        console.log(this.dataList)
                    })
                    .catch((error)=> {
                        console.log(error);
                    });
            }
        }
    }
</script>
