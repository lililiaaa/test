
import css from './css/main.css'
import sass from './css/index.scss'
import $ from 'jquery';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router.js';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);

// The routing configuration
const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});


var a=10;
let foo=(name,age)=>{
    let aaa=name;
}
$(".hh").css("color","yellow");