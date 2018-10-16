<template>
    <div>

    </div>
</template>
<script>
    export default{
        data(){
            return {
                dataList: [],
                movieid:0
            }
        },
        created(){
            this.$emit("add", "电影", 'movie')
            this.getData()

        },
        methods: {
            getData(){
                axios.get(API_PROXY + 'https://api.douban.com/v2/movie/subject/' + this.movieid)
                    .then((response) => {
                        this.dataList = response.data.subjects
                        console.log(response)
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
    }
</script>
<style>

</style>
