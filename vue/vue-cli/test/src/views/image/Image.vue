<template>

    <v-touch  v-on:swipeleft="onSwipeLeft">向我扫描！</v-touch >
    <ul>
        <li @click="change" v-for="(items,index) in dataList" :key='index+"ml"'>
            <img :src="items.bg" alt="">
        </li>
    </ul>
</template>
<script>
    var VueTouch = require('vue-touch')
    Vue.use(VueTouch, {name: 'v-touch'})
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
            }
        }
    }
</script>