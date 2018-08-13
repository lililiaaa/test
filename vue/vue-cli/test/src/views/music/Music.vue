<template>
<div>
    <ul>
            <li @click="change" v-for="(items,index) in dataList" :key='index+"ml"'>
                    <img :src="items.bg" alt="">
            </li>
    </ul>
</div>


</template>
<script>
    export default{

        created(){
            this.$emit("add","音乐",'music')
            this.getData()
        },
        data(){
            return{
                dataList:[]
            }
        },
        methods:{
            getData(){
                axios.get("./data/musiclist.json")
                    .then( (response)=> {
                        this.dataList=response.data.albums
                        console.log(this.dataList)
                    })
                    .catch((error)=> {
                        console.log(error);
                    });
            },
            change(){
                this.$router.push({path:'/musicdetail'})
            }
        }
    }
</script>
<style scoped>
    ul{
        display: flex;
        flex-wrap: wrap;
    }
    img{
        height: 3.2rem;
        width: 3.2rem;
    }
</style>