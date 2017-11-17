<template>
    
    <div class="right menu">
        
            <div class="item" title="todos closed">
                <i class='checkmark icon green'></i>
                <span class="red">{{todos.filter(todo => {return todo.done === true}).length}}</span>
            </div>
            
            <div class="item" title="todos open">
                <i class='wait icon orange'></i>
                {{todos.filter(todo => {return todo.done === false}).length}}
            </div>
            

    </div>
</template>

<script>
    export default {
        props: ['todos'],
    }
</script>
