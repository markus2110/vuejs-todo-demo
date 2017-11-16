<template>
    <div>
        <todo  v-for="todo in todos" v-bind:todo="todo" v-bind:key="todo.id" v-on:todo-updated="todoListChanged" v-on:delete-todo="deleteTodo"></todo>
    </div>
</template>

<script type="text/javascript">
    import Todo from './Todo.vue';
    export default {
        props: ['todos'],
        components: {
            Todo,
        },

        methods : {
            todoListChanged : function(){
                this.$emit('todo-list-changed');
            },
            
            deleteTodo(todo) {
                const todoIndex = this.todos.indexOf(todo);
                this.todos.splice(todoIndex, 1);

                this.todoListChanged();
            }


        }
    }
</script>
