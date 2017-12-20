
import LocalStorage from "@/util/Storage/LocalStorage";
import {defaultConfig} from "@/config";
const LocalStoage = new LocalStorage("todo-app");




export default {

    namespaced: true,

    state : {
        storage : null,
        apiKey : null,
    },

    getters: {
        getAll:         (state) => { return state},
        getStorage:     (state) => { return state.storage },
        getApiKey:      (state) => { return state.apiKey }
    },

    actions : {

        init : function({commit}){
            let currentConfig = JSON.parse(LocalStoage.get("config"));
            if(currentConfig === null){
                currentConfig = defaultConfig;
                LocalStoage.set("config", JSON.stringify(currentConfig));
                console.info("Config initialized with defaults");
            }

            commit("INIT_CONFIG", currentConfig);
        },

        setStorage: function({commit}, storage) {
            let currentConfig = JSON.parse(LocalStoage.get("config"));
            currentConfig.storage = storage;
            
            LocalStoage.set("config", JSON.stringify(currentConfig));

            commit("UPDATE_STORAGE", storage);
        },


        setApiKey : function({commit}, key){
//            let currentConfig = JSON.parse(LocalStoage.get("config"));
//            currentConfig.apiKey = key;
//            LocalStoage.set("config", JSON.stringify(currentConfig));

            commit("UPDATE_API_KEY", key);
        }



    },

    mutations : {
        INIT_CONFIG:    (state, config)     => {
            state.storage = config.storage;
        },
        UPDATE_STORAGE: (state, storage)    => {state.storage = storage},
        UPDATE_API_KEY: function(state, key){
            state.apiKey = key;
        }
    }

};

