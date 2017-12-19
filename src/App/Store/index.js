import Vue from 'vue';
import Vuex from 'vuex';

import StorageFactory from "./Storage/Factory";
import ConfigModule from "./Modules/Config/ConfigModule";
import TodosModule from "./Modules/ToDos/ToDosModule";




//const LocalStorage = function(){ return  };
//const RemoteStorage = function(){ return import(/* webpackChunkName: "RemoteStorage" */ "./Storage/RemoteStorage") };


Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,

    modules : {
        config: ConfigModule,
        todos : TodosModule
    },


//    getters : {
//
//        getStorage : function(state){
//
//            StorageFactory(state.config.storage).then(
//                function(storage){ state.storage = storage },
//                function(){ alert("Could not load Storage") },
//            );
//
//        }
//
//    }
});