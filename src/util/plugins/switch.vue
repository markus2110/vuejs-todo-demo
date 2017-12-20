<template>
    <div>
        <button v-on:click="switchLang">This is the lang switch</button>
    </div>
</template>

<script>
    export default {

            methods:{
                switchLang : function(){
                    this.$switchLocale();
                }

            }
    }
</script>