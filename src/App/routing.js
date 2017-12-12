"use strict";

// Router instance
import VueRouter from 'vue-router';

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






export default function(Vue){

    // init the plugin
    Vue.use(VueRouter);


    return new VueRouter({
        routes: routes,
        linkExactActiveClass : "active"
    });
};