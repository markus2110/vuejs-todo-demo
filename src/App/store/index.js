import Vue from 'vue';
import Vuex from 'vuex';
import todos from './modules/ToDos';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    
    modules : {
        todos : todos
    }
});