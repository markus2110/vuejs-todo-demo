import './less/styles.less';


import Vue      from 'vue';
import store    from './App/store';
import router   from './App/routing';
import App      from './App/App.vue';

var app = new Vue({
    router: router,
    store : store,
    el: '#application-wrapper',
    render: (h) => h(App)
});