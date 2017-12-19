<template>
    <div id="config">
        <h1>Config</h1>

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
            <select v-model="storage" v-on:change="setStorage(storage)">
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

        data : function(){
            return {
                version : APP_VERSION,
                storage : this.$store.getters["config/getStorage"],
                apiKey : this.$store.getters["config/getApiKey"],
            }
        },


        methods : {
            setStorage : function(storage){
                this.$store.dispatch("config/setStorage", storage);
            },

            getApiKey : function(){
                this.$store.commit("config/UPDATE_API_KEY", "JAÖ");
            }
        }


    }
</script>