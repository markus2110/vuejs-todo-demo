<template>
    <div>
        <h1>Create new ToDo</h1>


        <form class="form-horizontal">
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">Titel</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="Titel" v-model="todo.title" >
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">Description</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="Description" v-model="todo.description">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-default" v-on:click="createToDo(todo)">Save</button>
                </div>
            </div>

            <div class="alert alert-info" v-show="message">
                <i class="fa fa-info-circle"></i>
                {{ message }}
            </div>
        </form>



    </div>
</template>

<script>
    export default {

        data: function () {
            return {

                message : false,

                todo : {
                    title : "",
                    description : ""
                }
            };
        },

        methods: {
            createToDo: function (todo) {

                if(todo.title && todo.description){
                    todo.done = false;
                    this.$store.commit('addTodo', todo);
                    this.message = false;
                    this.$router.push({name:'home'});
                }else{
                    this.message = "Title or description not set";
                }
            }
        }
    }
</script>