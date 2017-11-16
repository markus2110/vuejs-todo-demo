<template>
    <div class='ui basic content  aligned segment'>
        <button class='ui primary button icon ' v-on:click="openForm">
            <i class='plus icon'></i>
            Add ToDo
        </button>
        <div id="todoForm" class='ui' v-show="isNew">
            <div class='content'>
                <div class='ui form'>
                    <div class='field'>
                        <label>Title</label>
                        <input v-model="title" type='text' ref='title' defaultValue="">
                    </div>
                    <div class='field'>
                        <label>Project</label>
                        <input v-model="project" type='text' ref='project' defaultValue="">
                    </div>


<!--                    <div class='ui two button attached buttons'>
                        <button class='ui basic blue button' v-on:click="sendForm()">
                            Create
                        </button>
                        <button class='ui basic red button' v-on:click="closeForm()">
                            Cancel
                        </button>
                    </div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import ToDoModel from './model/ToDo';
    import sweetalert from 'sweetalert';

    export default {

        data: function () {
            return ToDoModel;
        },

        methods: {

            clearForm() {
                this
                    .setTitle(null)
                    .setProject(null)
                ;
            },

            openForm() {
                this.clearForm();
                this.setIsNew(true);

                var self = this;

                var sw = sweetalert({
                    content: document.getElementById('todoForm'),
                    buttons: {
                        cancel : true,
                        save : {
                            text : "OK",
                            value : "save"
                        }
                    },

                }).then(function(value){

                    switch(value){
                        case 'save':
                            self.sendForm();
                        break;


                        default:
                            self.closeForm();
                        break;

                    }

                    
                });
                
            },
            closeForm() {
                this.clearForm();
                this.setIsNew(false);
            },
            sendForm() {

                if (this.title && this.project ) {
                    this.$emit('add-todo', {
                        category :  this.getCategory(),
                        title :     this.getTitle(),
                        project :   this.getProject(),
                        done :      false
                    });
                }
                this.setIsNew(false);
                this.clearForm();
            }
        }
    }
</script>