<template>
    <div id="home">
        <h1>Home</h1>



    <div class="panel panel-default" v-for="todo in todos">
      <div class="panel-heading">

          <h3 class="panel-title">{{ todo.title }}</h3>

      </div>
      <div class="panel-body">
        {{ todo.description }}
      </div>


        <div class="panel-footer clearfix">

            <div class="pull-right">

                <a href="#" v-on:click="markAsDone(todo)">
                    <i class='fa fa-edit fa-2x'></i>
                </a>
                <a href="#" v-on:click="removeToDo(todo)" class="text-danger">
                    <i class='fa fa-trash fa-2x'></i>
                </a>
            </div>
        </div>

    </div>

    </div>
</template>

<script>
    export default {


        computed : {
            todos : function(){
                return this.$store.dispatch('fetchAllTodos');
            }
        },

        methods: {

            removeToDo : function(todo){
                this.$store.commit('removeTodo', todo);
            },

            markAsDone : function(todo){
                this.$store.commit('isDone', todo);
            }

        }

    }
</script>