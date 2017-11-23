<template>
    <div id="app">

        <div class="ui top fixed menu">

            <router-link to="/" class="item icon">
                <i class="large home icon"></i>
            </router-link>

            <div class="item" title="todos closed">
                <i class='checkmark icon green'></i>
                <span>{{ todos | closedCount }}</span>
            </div>

                <div class="item">
                    <i class='wait icon orange'></i>
                    <span>{{ todos | openCount }}</span>
                </div>


            <div class="right menu">
                <router-link to="/config" class="item icon">
                    <i class="large setting icon"></i>
                </router-link>
                <router-link to="/about" class="item icon">
                    <i class="large info circle icon"></i>
                </router-link>
            </div>            
        </div>        
        

        <div>
            <div class="ui grid container" style="padding-top:75px;">
                <router-view></router-view>
            </div>
        </div>

        
        
        <div class="ui bottom fixed menu">
            <div class="right menu">
                <router-link to="/todo/add" class="item icon">
                    <i class="huge plus circle icon"></i>
                </router-link>
            </div>
        </div>
        
    </div>
</template>

<script>
    
    import ToDoModel from './model/ToDoModel';
    
    export default {

        data : function(){
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
            }

        }
    };
</script>