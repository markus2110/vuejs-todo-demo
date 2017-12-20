<template>

    <div id="home">

        <div class="text-center" v-show="!todosInit">
            <i class="fa fa-circle-o-notch fa-spin fa-5x fa-fw"></i>
            <br />
            <span class="">Loading...</span>
        </div>


        <div class="alert alert-danger" v-if="error">
            <i class="fa fa-warning"></i>
            {{ error }}
        </div>


        <div class="panel panel-default col-sm-6 col-md-4 col-lg-3" v-for="todo in todos">

            <div class="panel-heading">
                <h3 class="panel-title">{{ todo.title }}</h3>
            </div>
            <div class="panel-body">
                {{ todo.description }}
            </div>

            <div class="panel-footer clearfix">
                <div class="pull-right">
                    <a href="#" v-on:click="markAsDone(todo)">
                        <i class='fa fa-edit fa-1x'></i>
                    </a>
                    <a href="#" v-on:click="removeToDo(todo)" class="text-danger">
                        <i class='fa fa-trash fa-1x'></i>
                    </a>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    export default {


        computed: {
            todos: function () {
                return this.$store.getters.allTodos;
            },

            todosInit: function(){
                return this.$store.state.init;
            },

            error : function(){
                return this.$store.state.error;
            }
        },

        methods: {

            removeToDo: function (todo) {
                alert("remove");
                //this.$store.dispatch('removeTodo', todo);
            },

            markAsDone: function (todo) {

                alert("DONE");

                //this.$store.dispatch('markAsDone', todo);
            }

        }

    }
</script>