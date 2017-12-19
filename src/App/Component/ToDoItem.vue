<template>

    <div class="todo-item">
        <div class="panel-heading">
            <h3 class="panel-title">{{ todo.title }}</h3>
        </div>
        <div class="panel-body">
            {{ todo.description }}
        </div>

        <div class="panel-footer clearfix">
            <div class="pull-right">
                <a href="#" v-on:click="markAsDone(todo)">Done
                    <i class='fa fa-edit fa-1x'></i>
                </a>
                <a href="#" v-on:click="removeToDo(todo)" class="text-danger">Remove
                    <i class='fa fa-trash fa-1x'></i>
                </a>
            </div>
        </div>
    </div>

</template>


<script>
export default {
    props: ['todo'],

    methods: {
        removeToDo : function(todo){
            this.$store.dispatch("todos/removeTodo", todo)
        },
        //markAsDone : (todo) => {},
    }
}
</script>