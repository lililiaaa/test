<template>
    <div><h1>hhh  {{$store.state.count}}</h1>
     <router-link :to="{name:'test1',params:{name:'lisi',age:'30'}}">test1</router-link>
     <router-link to="/connect/test2/lilili/10">test2</router-link>
        <router-link to="/connect/backtest2/hhh/10">test2 back</router-link>
     <div>
        <router-view/>
     </div>
    </div>
</template>

<script>
export default{

}
</script>

<style scoped>

</style>