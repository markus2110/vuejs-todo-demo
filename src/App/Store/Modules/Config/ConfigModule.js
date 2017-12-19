export default {

    namespaced: true,

    state : {
        storage : "LocalStorage"
    },

    getters: {
        getAll:         (state) => { return state},
        getStorage :    (state) => { return state.storage }
    },

    actions : {

        init : function({commit}){

            


        },

        setStorage: function({commit}, storage) {
            commit("UPDATE_STORAGE", storage);
        }
    },

    mutations : {
        UPDATE_STORAGE: (state, storage) => {state.storage = storage}
    }

};

