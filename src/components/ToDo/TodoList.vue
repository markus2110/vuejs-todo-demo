<template>
    <div class="ui grid container">
        <todo  
            v-for="todo in todos" 
            v-bind:todo="todo" 
            v-bind:key="todo.id" 
            v-on:todo-updated="todoListChanged" 
            v-on:delete-todo="deleteTodo">
                
        </todo>


        <update-modal>
            <span slot="header">Update Todo</span>
        </update-modal>
    </div>            
</template>

<script type="text/javascript">
    import updateModal from '../Modal.vue';
    import Todo from './Todo.vue';
    export default {
        props: ['todos'],
        components: {
            Todo, updateModal
        },

        methods : {
            todoListChanged : function(){
                this.$emit('todo-list-changed');
            },
            
            deleteTodo(todo) {
                this.todos.removeTodo(todo);
                this.todoListChanged();
            }


        }
    }
</script>
