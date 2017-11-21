import Vue from 'vue'
import App from './App.vue'


var ToDoStorage = {
    
    data : [],
    
    get: function(){
        return this.data;
    },
    
    addTodo: function(todo){
        this.data.push(todo);
        return this;
    },    
    
    updateToDo: function(todo){
        var index = this.data.indexOf(todo);
        this.data[index] = todo;
        return this;
    },
    
    removeToDo: function(todo){
        var index = this.data.indexOf(todo);
        this.data.splice(index, 1);
        return this;
    }
};



new Vue({
    el: '#application-wrapper',
    
    data : function(){
        return {
            todos : ToDoStorage 
        };
    },
    
    render : function(h){
        return h(App);
    }
});