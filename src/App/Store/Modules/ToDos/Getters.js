export default {
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
}