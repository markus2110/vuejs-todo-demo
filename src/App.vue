<template>
    <div id="app">
        <todo-list v-bind:todos="todos" />
    </div>
</template>

<script>

    import TodoList from './components/TodoList.vue';

    export default {
        name: 'app',
        dataUrl : "data.json",
        components: { TodoList },
        data() {
            return {
                todos : []
            }
        },

        methods: {
            getTodos: function () {
                var self = this;
                var oReq = new XMLHttpRequest();
                oReq.onreadystatechange = function() {
                    if(this.readyState === 4){
                        self.todos = JSON.parse(this.response);
                    }
                }
                oReq.open("GET", this.$options.dataUrl);
                oReq.send();
            }
        },

        created : function(){
            this.getTodos();
        }

    };


</script>


<!--
<style lang="less">
    @import "./less/app.less";
</style>
-->
