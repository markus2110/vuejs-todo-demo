<template>
    <div id="app">

        <div class="ui top fixed menu">
            <todo-counter v-bind:todos="todos" />
        </div>
            
        
        <todo-list v-bind:todos="todos" v-on:todo-list-changed="updateStorage" style="padding:100px 0 100px 0"/>
        
        <div class="ui bottom fixed menu">
            <div class="right menu">
                <create-todo v-on:add-todo="addTodo" />
            </div>
        </div>
       
    </div>
</template>

<script>

    import CreateTodo from './components/ToDo/CreateTodo.vue';
    import TodoCounter from './components/ToDo/Counter.vue';
    import TodoList from './components/ToDo/TodoList.vue';
    import LocalStorage from './misc/LocalStorage';

    var storage = new LocalStorage(null, "myStorage");
    
    export default {
        name: 'app',
        dataUrl : "data.json",
        components: { TodoCounter, TodoList, CreateTodo },

        data() {
            var todos = JSON.parse(storage.get('todos')) || [];
            return {
                todos : todos || []
            }
        },

        watch : {
            todos : function(newVal, oldVal){
                var jsonStr = JSON.stringify(newVal);
                storage.set('todos', jsonStr);
            }
        },

        methods: {

            addTodo : function(data){
                this.todos.push(data);
            },

            updateStorage : function(){
                var jsonStr = JSON.stringify(this.todos);
                storage.set('todos', jsonStr);

                console.log("store updated");
            }
        },

        created : function(){
            //this.getTodos();
        }

    };
</script>