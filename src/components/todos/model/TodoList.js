"use strict";


var ToDoList = {
    
    
    todos : [],
    
    get : function(){
        return this.todos;
    },
    
    set : function(list){
        this.todos = list;
        return this;
    },
    
    addTodo : function(todo){
        this.todos.push(todo);
    },
    
    removeTodo : function(todo){
        const todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex, 1);        
    }  
}

export default ToDoList;