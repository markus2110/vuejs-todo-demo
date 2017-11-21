<template>
    <div>   

        <div class="ui action input" v-if="allowAdd">

            <div class="ui action input">
                <input placeholder="Task..." type="text" v-model="newTask.name">
                <select class="ui selection dropdown" v-model="newTask.status">
                    <option v-for="status in taskStatus" v-bind:value="status">{{ status }}</option>
                </select>
                <button class="ui icon button" v-on:click="addTask(newTask)">
                    <i class="plus icon"></i>
                </button>
            </div>
        </div>


        <table class="ui compact celled definition table">
          <thead>
            <tr>
              <th>Done</th>
              <th>Task</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="task in tasks">
                  <td class="collapsing">
                      <div class="ui fitted checkbox">
                          <input type="checkbox" checked> <label></label>
                      </div>
                  </td>
                  <td>{{ task.name }}</td>
                  <td>{{ task.status }}</td>
              </tr>
          </tbody>
        </table>
    </div>
</template>

<script>
    
    
    
    export default {
        
        props : {
            tasks :          {type:  Array, default: () => { return [] } },
            taskStatus:        {type:  Array, default: () => { return ["importand", "normal", "low"] } },
            allowAdd :       {type : Boolean, default : false},

        },        
        
        data: function () {
            return {
                newTask : {
                    name : '',
                    status: '',
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
