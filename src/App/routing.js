import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Pages
const Home          = function(){ return import(/* webpackChunkName: "page/home" */ './pages/Home.vue') };
const Config        = function(){ return import(/* webpackChunkName: "page/config" */ './pages/Config.vue') };
const About         = function(){ return import(/* webpackChunkName: "page/about" */ './pages/About.vue') };
//const CreateTodo    = function(){ return import(/* webpackChunkName: "page/todo/create" */ './pages/ToDo/Create.vue') };


const routes = [
    { path: '/', component: Home, name: 'home' },
//    { path: '/todo/add', component: CreateTodo, name: 'createTodo' },
    { path: '/config', component: Config, name: 'config' },
    { path: '/about', component: About, name: 'about' }
];


export default new VueRouter({routes});
