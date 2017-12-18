<template>
    <div id="app">


        <header-component />


        <div class="row container-fluid" style="padding-top:75px;">
            <router-view></router-view>
        </div>


        <footer-component />





    </div>
</template>

<script>


    import HeaderComponent from "./components/header.vue";
    import FooterComponent from "./components/footer.vue";

    /*
    import ToDoModel from './model/ToDoModel';
    */
    export default {
        components: { HeaderComponent, FooterComponent },
        created: function () {
            this.$store.dispatch('fetchTodos');
        },

    };

</script>