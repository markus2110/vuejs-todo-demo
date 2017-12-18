import Vue from 'vue';
import Vuex from 'vuex';
import ToDoApi from "../../Api/ToDoApi";


//import todos from './modules/ToDos';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,

    state : {
        init : false,
        error : "",
        todos: [],
    },

    getters: {
        allTodos: function(state){
            return state.todos;
        },

        countClosedTodos : function(state){
            var todos = state.todos.filter(function(todo){
                return (todo.done === true);
            });
            return todos.length;
        },

        countOpenTodos : function(state){
            var todos = state.todos.filter(function(todo){
                return (todo.done === false);
            });
            return todos.length;
        }
    },


    actions : {
        fetchTodos  ({commit}) {
            ToDoApi.get().then(
                // Success
                (response) => { commit("updateToDoList", response) },
                // Error
                (response) => { commit("setError", response.statusText) },
            );
        },

        addTodo     ({commit}, todo) {
            ToDoApi.create(todo).then(
                // Success
                (response) => { commit("addTodo", response) },
                // Error
                (response) => { commit("setError", response.statusText) },
            );
        },

        
        removeTodo  ({commit}, todo) {
            ToDoApi.delete(todo).then(
                // Success
                (response) => { commit("removeTodo", response) },
                // Error
                (response) => { commit("setError", response.statusText) },
            );
        
        },


        /*
        markAsDone  ({commit}, todo) { commit('isDone', todo) },
        */
    },


    mutations: {

        updateToDoList : function(state, todos){
            state.init = true;
            state.todos = todos;
        },

        addTodo : function(state, todos) {
            state.todos = todos;
        },

        removeTodo : function(state, todos) {
            state.todos = todos;
        },

        isDone : function(state, todo) {
            todo.done = true;
        },

        setError : function(state, message){
            state.init = true;
            state.error = message;
        }
    }

    
//    modules : {
//        todos : todos
//    }
});