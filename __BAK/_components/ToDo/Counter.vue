<template>
    
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
</template>

<script>
    export default {
        props: ['todos'],
        
        filters: {
            closedCount : function(value){
                var closed = value.filter(todo => {return todo.done === true});
                return closed.length;
            },
            
            openCount : function(value){
                var open = value.filter(todo => {return todo.done === false});
                return open.length;                
            }          

        }
        
    }
</script>
