import Vue from 'vue';
// https://github.com/pagekit/vue-resource/blob/develop/docs/http.md
// https://metricloop.com/blog/how-to-make-api-calls-with-vuex
import Http     from 'vue-resource';
Vue.use(Http);


const URL = "http://localhost/test/vue-todo-demo/server/data.php";


export default {

    get : function(){
        return Vue.http.get(URL)
                .then(response  => Promise.resolve(response.body.data))
                .catch(error    => Promise.reject(error))
        ;
    },

    create : function( todo ){
        return Vue.http.post(URL, {todo: todo})
                .then(response  => Promise.resolve(response.body.data))
                .catch(error    => Promise.reject(error))
        ;
    },

    update : function(){
        console.log("update");
    },

    delete : function( todo ){
        return Vue.http.delete(URL, {body: todo})
                .then(response  => Promise.resolve(response.body.data))
                .catch(error    => Promise.reject(error))
        ;
    }
};