//import './less/styles.less';

import Vue      from 'vue';
import router   from './App/routing';
import store    from "./App/Store/index";

import App      from './App/App.vue';




var app = new Vue({
    router: router,
    store : store,
    el: '#application-wrapper',
    render: (h) => h(App)
});