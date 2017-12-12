import './less/styles.less';


import Vue from 'vue';
import Vuex from 'vuex';
import MyRouter from './App/routing';
import App from './App/App.vue';


Vue.use(Vuex);

const router = new MyRouter(Vue);



const store = new Vuex.Store({
    state: {
        todos: [
            { title : "Todo1", description : "Desc 1", done : false },
            { title : "Todo2", description : "Desc 2", done : true },
            { title : "Todo3", description : "Desc 3", done : false },
            { title : "Todo4", description : "Desc 4", done : true },
            { title : "Todo5", description : "Desc 5", done : false }
        ]
    },


    mutations: {
        addTodo : function(state, todo) {
            state.todos.push(todo);
        },
        removeTodo : function(state, todo) {
            var index = state.todos.indexOf(todo);
            state.todos.splice(index, 1);
        },
        isDone : function(state, todo) {
            todo.done = true;
        }
    }
});



var app = new Vue({
    router: router,
    store : store,
    el: '#application-wrapper',

    data: {},

    render: function (h) {
        return h(App);
    }
});