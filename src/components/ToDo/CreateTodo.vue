<template>
    <div class='ui basic content aligned segment'>
        <button class='ui primary button icon ' v-on:click="openForm">
            <i class='plus icon'></i>
            Add ToDo
        </button>
        

        <create-modal
            v-bind:data="todo"

            approveName="Save"
            modalId="createModal"
            
            @approve="sendForm"
            @cancel="cancelForm"
            >
            <span slot="header">Create Todo</span>

            <div class='ui form'>
                <div class='field'>
                    <label>Title</label>
                    <input v-model="todo.title" type='text' ref='title' defaultValue="">
                </div>
                <div class='field'>
                    <label>Project</label>
                    <input v-model="todo.project" type='text' ref='project' defaultValue="">
                </div>
            </div>


        </create-modal>
        
    </div>
</template>

<script>

    import createModal from '../Modal.vue';
    import ToDoModel from './model/ToDo';

    export default {

        components: { createModal },            

        data: function () {
            return {
                todo : ToDoModel
            };
        },

        methods: {

            clearForm() {
                this.todo.setTitle(null).setProject(null);
            },

            openForm() {
                this.clearForm();

                var self = this;
                $('#createModal')
                    .modal({
                        transition : 'vertical flip',
                        //inverted: true,
                    }).modal("show");
            },

            cancelForm(){
                this.clearForm();
            },

            sendForm( todo ) {
                if (todo.title && todo.project ) {
                    this.$emit('add-todo', {
                        category :  todo.getCategory(),
                        title :     todo.getTitle(),
                        project :   todo.getProject(),
                        done :      false
                    });
                }
                this.clearForm();
            }
        }
    }
</script>