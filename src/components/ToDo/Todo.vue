<template>
    <div class="four wide computer eight wide tablet sixteen wide mobile column">
        
        <div class="ui fluid card">
            <div class="content">
                <div class="header">
                    {{ todo.project }}
                    <a href="#" class='right floated edit icon' v-on:click="showForm(todo)">
                        <i class='edit icon'></i>
                    </a>
                    <a href="#" class='right floated trash icon' v-on:click="deleteTodo(todo)">
                        <i class='trash icon red'></i>
                    </a>                     
                </div>
                <div class="meta">{{ todo.title }}</div>
                
                
                
                <div class="description"> adsdjas dhs jkdh jkh akhd</div>
            </div>
            <div class="extra content">
                
                <button class="fluid ui bottom red basic animated fade button big" v-show="!todo.done" v-on:click="toggleTodo(todo)">
                    <div class="hidden content">Completed ?</div>
                    <div class="visible content">
                        <i class="check icon"></i>
                    </div>
                </button>    
                
                <button class="fluid ui bottom green basic animated fade button big" v-show="todo.done" v-on:click="toggleTodo(todo)">
                    <div class="hidden content">uncomplete ?</div>
                    <div class="visible content">
                        <i class="check icon"></i>
                    </div>
                </button>                 

            </div>
        </div>        
       

        
        
            <!-- form is visible when we are in editing mode. -->
            <div class="content" v-show="isEditing">
                <div class='ui form'>
                    <div class='field'>
                        <label>Title</label>
                        <input type='text' v-model="todo.title" >
                    </div>
                    <div class='field'>
                        <label>Project</label>
                        <input type='text' v-model="todo.project" >
                    </div>

                    <button class="ui positive left floated vertical animated button big" v-on:click="saveForm(todo)">
                        <div class="hidden content">Save</div>
                        <div class="visible content">
                            <i class="save icon"></i>
                        </div>
                    </button>   

                    <button class="ui negative right floated vertical animated button big" type="reset" v-on:click="cancelForm()">
                        <div class="hidden content">Cancel</div>
                        <div class="visible content">
                            <i class="cancel icon"></i>
                        </div>
                    </button>                   

                </div>
            </div>        
    </div>

</template>


<script type="text/javascript">

    export default {
        props: ['todo'],

        originalData: {},

        data: function () {
            return {
                isEditing: false,
                tasks: []
            };
        },

        methods: {
            
            toggleTodo : function(todo){
                todo.done = (todo.done == true) ? false : true;
                this.$emit('todo-updated');
            },
            

            saveForm: function (todo) {
                this.isEditing = false;
                this.$emit('todo-updated');
            },

            cancelForm: function () {
                this.resetForm();
                this.isEditing = false;
            },

            deleteTodo(todo) {
                this.$emit('delete-todo', todo);
            },

            showForm(todo) {
                this.isEditing = true;
                this.cacheOriginData(todo);
            },

            cacheOriginData: function (todo) {
                for (var i in todo) {
                    this.$options.originalData[i] = todo[i];
                }
            },

            resetForm: function () {
                for (var i in this.$options.originalData) {
                    this.todo[i] = this.$options.originalData[i];
                }
            }
        },
    };
</script>
