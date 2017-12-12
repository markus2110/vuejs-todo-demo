import Vue from 'vue';
import App from './App.vue';

import MyRouter from './routing';

import DummyStorage from './common/Storage/DummyStorage';
import StorageFactory from './common/Storage/StorageFactory';
import ToDoModel from './model/ToDoModel';


const router = new MyRouter(Vue);




var app = new Vue({
    router : router,
    el: '#application-wrapper',

    data : function(){

        var store = new StorageFactory(new DummyStorage(), ToDoModel);
        return {
            toDoStore : store
        };
    },

    render : function(h){
        return h(App);
    }
});