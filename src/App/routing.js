import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);



// Pages
const Home          = function(){ return import('./pages/Home.vue') };
const Config        = function(){ return import('./pages/Config.vue') };
const About         = function(){ return import('./pages/About.vue') };
const CreateTodo    = function(){ return import('./pages/ToDo/Create.vue') };


const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/todo/add', component: CreateTodo, name: 'createTodo' },
    { path: '/config', component: Config, name: 'config' },
    { path: '/about', component: About, name: 'about' }
];



export default new VueRouter({
        routes: routes,
        linkExactActiveClass : "active"
});
