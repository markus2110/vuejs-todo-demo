export default {

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