<template>
    <div id="app">

        <div class="ui top fixed menu">

            <router-link to="/" class="item">Home</router-link>
            <router-link to="/config" class="item">Config</router-link>

            <div class="right menu">
                <router-link to="/about" class="item">About</router-link>

                <!--
                <div class="item" title="todos closed">
                    <i class='checkmark icon green'></i>
                    <span>{{ todos | closedCount }}</span>
                </div>

                <div class="item">
                    <i class='wait icon orange'></i>
                    <span>{{ todos | openCount }}</span>
                </div>
                -->
            </div>            
        </div>        
        


        <div class="ui grid container" style="margin-top:10px">

            <router-view></router-view>


        </div>

        
        
        <div class="ui bottom fixed menu">
            <div class="right menu">
                
                <button class='ui primary button icon ' v-on:click="createToDo">
                    <i class='plus icon'></i>
                    Add ToDo
                </button>                
                
            </div>
        </div>
        
    </div>
</template>

<script>
    
    import ToDoModel from './model/ToDoModel';
    
    export default {
            
        filters: {
            closedCount : function(value){
                var closed = value.filter(todo => {return todo.done === true});
                return closed.length;
            },
            
            openCount : function(value){
                var open = value.filter(todo => {return todo.done === false});
                return open.length;                
            }          

        },            
            
        methods: {

            createToDo : function(){
                var todo = new ToDoModel();
                todo.setTitle("New todo");
                todo.setDescription("This is the des");
                todo.setDone(false);
                this.$root.$data.todos.addTodo(todo);
            }

        }
    };
</script>