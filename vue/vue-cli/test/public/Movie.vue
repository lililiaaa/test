<template>
    <div>

        <ul>
            <li v-for="(items,index) in dataList" :key='index+"dl"' @click="change(items.id)">
                <img :src="items.images.small" alt="">
                <div class="div">
                    <h2>{{items.title}}</h2>
                    <div>导演：{{items.directors[0].name}}</div>
                    <div>
                        类别：<span v-for="(item,index1) in items.genres" :key="index1">{{item}} </span>
                    </div>
                    <div>上映时间：{{items.year}}</div>
                    <div>
                        主演：<span v-for="(item2,indexs) in items.casts" :key="indexs+'5'">{{item2.name}} / </span>
                    </div>
                    <div>豆瓣评分：{{items.rating.average}}</div>
                </div>
            </li>

        </ul>
        <div class="loading" v-show="show">
            <div class="image">
                <img src="@/assets/img/loading.gif" alt="">
            </div>
        </div>
    </div>

</template>
<script>
    export default{
        data(){
            return{
                dataList:[],
                show:false,
                isEnd:false
            }
        },
        created(){
            this.$emit("add","电影",'movie')
            this.getData()

        },
        methods:{
            getData(){
                axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters?start='+this.dataList.length+'&count=5')
                    .then( (response)=> {
                        this.dataList=this.dataList.concat(response.data.subjects)
                        this.show=false
                        console.log(this.dataList)
                        if(response.data.subjects.length == 0){
                            this.isEnd = true;
                        }
                    })
                    .catch((error)=> {
                        console.log(error);
                    });
            },
            change(i){
                this.$router.push({name:'moviedetail',params:{id:i}})
            }

        },
        mounted () {
            window.onscroll=()=>{
                let scrollTop = document.documentElement.scrollTop;
                let scrollHeigth = document.documentElement.scrollHeight;
                let clientHeight = document.documentElement.clientHeight;
                if(scrollTop+clientHeight==scrollHeigth){
                    if(!this.isLoading){
                        if(!this.isEnd){
                            this.show = true;
                            this.getData();
                        }
                    }
                }
            }
        }

    }
</script>
<style scoped>
    li img{
        height: 3rem;
        width: 2.3rem;
        margin: 20px 20px 20px 5px;
    }
    li{
        display: flex;
        border-bottom: 2px solid gainsboro;

    }
    .div{
        margin-top: 10px;
        display: flex;
        flex-direction: column;

        align-items: flex-start;
    }
    .div div{
        font-size: 17px;
    }
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.2);
    }
    .loading .image {
        position: absolute;
        padding: 1rem;
        text-align: center;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 0.2rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>