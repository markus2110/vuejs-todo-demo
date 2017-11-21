
var TaskModel = {
    
    done:           false,
    title:          null,
    
    
    setDone: function(value){
        this.done = value;
        return this;
    },
    
    setTitle: function(value){
        this.title = value;
        return this;
    }
};

export default TaskModel;