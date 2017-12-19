
var ToDoModel = function( data ){

    if(typeof data === "undefined"){
        this.done           = false;
        this.title          = "",
        this.description    = "";
        this.taskList       = [];
    }else{

        for(var prop in this){
            if(typeof this[prop] !== "function"){
                this[prop] = data[prop];
            }
        }
    }
    
    return this;
};
 
ToDoModel.prototype = {
    done:           false,
    title:          null,
    description:    null,
    taskList:       [],
    
    
    getDone: function(){
        return this.done;
    },
    
    getTitle: function(){
        return this.title;
    },    
    
    getDescription: function(){
        return this.description;
    },        
    
    getTaskList: function(){
        return this.taskList;
    },    
    
    setDone: function(value){
        this.done = value;
        return this;
    },
    
    setTitle: function(value){
        this.title = value;
        return this;
    },    
    
    setDescription: function(value){
        this.description = value;
        return this;
    },        
    
    setTaskList: function(list){
        this.taskList = value;
        return this;
    },
    
    addTask: function(task){
        this.taskList.push(task);
        return this;
    },
    
    removeTask: function(task){
        var taskIndex = this.taskList.indexOf(task);
        this.taskList.splice(taskIndex, 1);
        return this;
    },    
    
};

export default ToDoModel;