<template>
    <div>
        <h1>Create new ToDo</h1>
    </div>
</template>

<script>
    export default {
        data : function(){
            return {
                todos : this.$root.$data.todos.get()
            }
        }
    }
</script>