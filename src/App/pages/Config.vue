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
        </form>


    </div>
</template>

<script>

    import { APP_VERSION } from "../../config.js";

    export default {

        data : function(){
            return {
                version : APP_VERSION,
                storage : this.$store.getters["config/getStorage"],

            }
        },


        methods : {
            setStorage : function(storage){
                this.$store.dispatch("config/setStorage", storage);
            }
        }


    }
</script>