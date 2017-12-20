import Vue from 'vue';
import VueRouter from 'vue-router';
import {Home, Config, About} from "./pages";


Vue.use(VueRouter);


export default new VueRouter({
    routes : [
        { path: '/', component: Home, name: 'home' },
        { path: '/config', component: Config, name: 'config' },
        { path: '/about', component: About, name: 'about' }
    ]
});
