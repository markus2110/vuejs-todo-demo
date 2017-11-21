import Vue from 'vue'
import App from './App.vue'


import LocalStorage from './misc/LocalStorage';
import ToDoListModel from './components/todos/model/TodoList';

var storage = new LocalStorage(null, "myStorage");
var toDoList = ToDoListModel.set(JSON.parse(storage.get('todos')));



new Vue({
    el: '#application-wrapper',
    
    data : function(){
       
        return {
            todos : toDoList
        }
    },
    
    render : h => h(App)
});