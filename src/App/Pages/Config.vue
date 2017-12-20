<template>
    <div id="config">

        
        <h1>{{ 'config.page.head' | trans }}</h1>
        <h2>{{ 'config.page.subhead' | trans }}</h2>
        

        <table>
            <tr>
                <th>Version</th><td>{{ version }}</td>
            </tr>
            <tr>
                <th>Storage</th><td>{{ storage }}</td>
            </tr>
        </table>

        <form name="appConfig">
            <label for="StorageType">Store ToDo's :</label>
            <select v-model="storage">
                <option value="LocalStorage">in LocalStorage</option>
                <option value="RemoteStorage">on RemoteStorage</option>
            </select>

            <div v-show='(storage==="RemoteStorage")'>
                <label>ApiKey:</label>
                <input type="text" v-model="apiKey" placeholder="API KEY" />
                <input type="button" value="getApiKey" v-on:click="getApiKey">
            </div>

        </form>


    </div>
</template>

<script>

    import { APP_VERSION, UUID_URL } from "~/config";
    import Vue      from 'vue';
    import Http     from 'vue-resource';
    Vue.use(Http);

    export default {
            
        computed : {
            storage: {
                get: function(){ 
                    return this.$store.getters["config/getStorage"] 
                },
                set: function(value){
                    this.$store.dispatch("config/setStorage", value);
                }
            },
            
            apiKey:     function() { return this.$store.getters["config/getApiKey"] },
        },

        data : function(){
            return {
                version : APP_VERSION
            }
        },


        methods : {
            setStorage : function(storage){
                
            },

            getApiKey : function(){
                
                Vue.http.get("server/uuid.php");
                
                this.$store.commit("config/UPDATE_API_KEY", "JAÖ");
            }
        }


    }
</script>