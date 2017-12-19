<template>
    <div v-bind:id="modalId" class="ui modal">
        
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="image content">
            <slot name="image"></slot>
            <div class="description">
                <slot></slot>
            </div>
        </div>

        <div class="actions">
            <slot name="actions">
              <div class="ui approve button primary" v-on:click='approve(data)'>{{ approveName }}</div>
              <div class="ui cancel button" v-on:click='cancel(data)'>{{ cancelName }}</div>
            </slot>
        </div>

    </div>
</template>

<script>
    export default {

            props : {
                data :          {type:  Object, default: () => { return {} } },
                modalId :       {type : String, default : 'modal'},
                approveName :   {type : String, default : 'OK'},
                cancelName :    {type : String, default : 'Cancel'},
            },


            methods : {
                'approve' : function(data){
                    this.$emit('approve', data);
                },

                'cancel' : function(data){
                    this.$emit('cancel', data);
                }
            }

    }
</script>