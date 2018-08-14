<template>


    <ul>
        <li @click="change(index)" v-for="(items,index) in dataList" :key='index+"ml"'>
            <img :src="items.src" alt="">
        </li>
    </ul>
</template>
<script>

    export default{

        created(){
            this.$emit("add", "图片", 'photo')
            this.getData()
        },
        data(){
            return {
                dataList: []
            }
        },
        methods: {
            getData(){
                axios.get("./data/photodata.json")
                    .then((response) => {
                        this.dataList = response.data.photoData
                        console.log(this.dataList)
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
            change(i){
                console.log(i)
                this.$router.push({name:'imagetail',params:{id:i}})
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
    ul{
        margin-bottom: 70px;
    }
</style>