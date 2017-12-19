export default {

    state: {
        all: []
    },


    actions : {
        fetchAllTodos : function( context ){
            const todos = [
                { title : "Todo1", description : "Desc 1", done : false },
                { title : "Todo2", description : "Desc 2", done : true },
                { title : "Todo3", description : "Desc 3", done : false },
                { title : "Todo4", description : "Desc 4", done : true },
                { title : "Todo5", description : "Desc 5", done : false }
            ];

            context.commit('todosReceived', todos);
        }
    },


    mutations: {

        todosReceived : function(state, todos){
            state.all = todos;
        },


        addTodo : function(state, todo) {
            state.all.push(todo);
        },
        removeTodo : function(state, todo) {
            var index = state.all.indexOf(todo);
            state.all.splice(index, 1);
        },
        isDone : function(state, todo) {
            todo.done = true;
        }
    }
}