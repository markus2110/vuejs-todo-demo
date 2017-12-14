import Vue from 'vue';
import Vuex from 'vuex';
import jquery from 'jquery';


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



            jquery.ajax({
                url : "server/data.php",
                dataType: "json",
        
                data : {
                    action : "getData"
                },

                success : function(response, text){
                    commit("updateToDoList", response);
                },

                error : function(xhr, message){
                    commit("setError", message);
                }

            });

        },
        addTodo     ({commit}, todo) { commit('addTodo', todo) },
        removeTodo  ({commit}, todo) { commit('removeTodo', todo) },
        markAsDone  ({commit}, todo) { commit('isDone', todo) },
    },


    mutations: {

        updateToDoList : function(state, todos){
            state.init = true;
            state.todos = todos;
        },

        addTodo : function(state, todo) {
            state.todos.push(todo);
        },
        removeTodo : function(state, todo) {
            var index = state.todos.indexOf(todo);
            state.todos.splice(index, 1);
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