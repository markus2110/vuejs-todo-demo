<template>
    <div id="home">
        <h1>Home</h1>



        <div class="four wide computer eight wide tablet sixteen wide mobile column" v-for="todo in todos">
            <div class="ui fluid card">
                <div class="content">
                    <div class="header">
                        {{ todo.getTitle() }}
                        <a href="#" class='right floated edit icon'  v-on:click="markAsDone(todo)">
                            <i class='edit icon'></i>
                        </a>
                        <a href="#" class='right floated trash icon' v-on:click="removeToDo(todo)">
                            <i class='trash icon red'></i>
                        </a>
                    </div>

                    <div class="meta">{{ todo.getDescription() }}</div>

                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {

        data(){
            return {
                todos : this.$root.$data.todos.get()
            }
        },

        methods: {

            removeToDo : function(todo){
                this.$root.$data.todos.removeToDo(todo);
            },

            markAsDone : function(todo){
                todo.setDone(true);
                this.$root.$data.todos.updateToDo(todo);
            }

        }

    }
</script>