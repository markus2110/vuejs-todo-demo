import Getters      from "./Getters";
import Actions      from "./Actions";
import Mutations    from "./Mutations";


const TodoModule = {

    namespaced: true,

    state : {
        init : false,
        error : "",
        todos: [],
    },

    getters:    Getters,
    actions:    Actions,
    mutations:  Mutations
};

export default TodoModule;

