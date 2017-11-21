<template>
    <div id="app">
        
        <div class="ui top fixed menu">
            <div class="right menu">

                <div class="item" title="todos closed">
                    <i class='checkmark icon green'></i>
                    <span>{{ todos | closedCount }}</span>
                </div>

                <div class="item">
                    <i class='wait icon orange'></i>
                    <span>{{ todos | openCount }}</span>
                </div>
            </div>            
        </div>        
        
        
        <div class="ui grid container">        
            
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
            
        data(){
            return {
                todos : this.$root.$data.todos.get()
            }
        },
            
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
            },

            removeToDo : function(todo){
                this.$root.$data.todos.removeToDo(todo);
            },
            
            markAsDone : function(todo){
                todo.setDone(true);
                this.$root.$data.todos.updateToDo(todo);
            }            

        }
    };
</script>