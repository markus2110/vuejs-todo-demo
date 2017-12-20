<template>
    <div id="app">

        <language-switch />

        <!--header-component /-->

        <nav class="navbar">
            <ul>
                <li>
                    <router-link to="/" class="item icon" >
                        <span v-if="this.$route.path === '/'">
                            <i class="fa fa-home fa-2x"></i> Home
                        </span>
                        <span v-else>
                            <i class="fa fa-arrow-left fa-2x"></i> Back
                        </span>
                    </router-link>
                </li>
            </ul>

            <ul class="navbar-right">
                <li>
                    <router-link to="/config" class="item icon">
                        <i class="fa fa-cog fa-2x"></i> Config
                    </router-link>
                </li>
                <li>
                    <router-link to="/about" class="item icon">
                        <i class="fa fa-info-circle fa-2x"></i> About
                    </router-link>
                </li>
            </ul>
        </nav>




        <div>
            APP PAge

            <div>Locale = {{ usedLocale }}</div>

            <div>{{ usedStorage }}</div>

            <div class="" v-for="todo in todos">
                <to-do-item v-bind:todo="todo"></to-do-item>
            </div>

            <router-view></router-view>
        </div>


        <!--footer-component / -->





    </div>
</template>

<script>


//    import HeaderComponent from "./components/header.vue";
//    import FooterComponent from "./components/footer.vue";
    import ToDoItem from "./Component/ToDoItem.vue";

    export default {
//        components: { HeaderComponent, FooterComponent },

        components: {
            ToDoItem : ToDoItem
        },
        computed: {

            usedLocale : function(){
                return this.$root.$data.locale;
            },

            usedStorage : function() { 
                //return this.$store.getters["config/getStorage"]
            },


            todos: function () {
                return this.$store.getters["todos/allTodos"];
            },

            todosInit: function(){
                return this.$store.todos.state.init;
            },

            error : function(){
                return this.$store.todos.state.error;
            }
        },


        created: function () {

            this.$store.dispatch('config/init');

            //this.$store.dispatch('todos/fetchTodos');
        },

    };

</script>