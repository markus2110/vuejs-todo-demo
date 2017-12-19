

export default {
    fetchTodos  (context) {

        //console.log(this);

        //const Storage = context.rootGetters["getStorage"];

        //console.log(Storage);
        

//        Storage.get().then(
//            // Success
//            (response) => { commit("updateToDoList", response) },
//            // Error
//            (response) => { commit("setError", response.statusText) },
//        );
    },

    addTodo     ({commit}, todo) {
        Storage.create(todo).then(
            // Success
            (response) => { commit("addTodo", response) },
            // Error
            (response) => { commit("setError", response.statusText) },
        );
    },


    removeTodo  ({commit}, todo) {
        Storage.delete(todo).then(
            // Success
            (response) => { commit("removeTodo", response) },
            // Error
            (response) => { commit("setError", response.statusText) },
        );

    },


        /*
        markAsDone  ({commit}, todo) { commit('isDone', todo) },
        */
};