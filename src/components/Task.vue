<template>
    <div>   
        
        <div class='ui form' v-if="allowAdd">
            <input type='text' v-model="newTask.name">
            <button type="button" v-on:click='addTask(newTask)'>save</button>
        </div>
    
        <div v-for="task in tasks">
            <input tabindex="0" class="hidden" type="checkbox">
            <label>{{ task.name }}</label>
        </div>
    </div>
</template>

<script>
    
    
    
    export default {
        
        props : {
            tasks :          {type:  Array, default: () => { return [] } },
            allowAdd :       {type : Boolean, default : false}
        },        
        
        data: function () {
            return {
                newTask : {
                    name : '',
                    done : false
                }
            };
        },
        
        methods : {
            'addTask' : function(data){
                this.newTask = {};
                this.$emit('addTask', data);
            }
        }        
        
    }
</script>
