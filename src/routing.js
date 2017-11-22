"use strict";

// Router instance
import VueRouter from 'vue-router';

// Pages
const Home      = function(){ return import('./pages/Home.vue') };
const Config    = function(){ return import('./pages/Config.vue') };
const About     = function(){ return import('./pages/About.vue') };


const routes = [
    { path: '/', component: Home },
    { path: '/config', component: Config },
    { path: '/about', component: About }
];





export default function(Vue){

    // init the plugin
    Vue.use(VueRouter);


    return new VueRouter({
        routes: routes
    });
};