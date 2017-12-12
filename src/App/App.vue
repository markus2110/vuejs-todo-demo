<template>
    <div id="app">



        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="/" class="item icon" >
                            <span v-if="this.$route.path === '/'">
                                <i class="fa fa-home fa-2x"></i>
                            </span>
                            <span v-else>
                                <i class="fa fa-arrow-left fa-2x"></i>
                            </span>
                        </router-link>
                    </li>
                </ul>

                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <router-link to="/config" class="item icon">
                            <i class="fa fa-cog fa-2x"></i>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about" class="item icon">
                            <i class="fa fa-info-circle fa-2x"></i>
                        </router-link>
                    </li>
                </ul>

            </div>
        </nav>


        <div>
            <div class="ui grid container" style="padding-top:75px;">
                <router-view></router-view>
            </div>
        </div>



        <nav class="navbar navbar-default navbar-fixed-bottom">
            <div class="container-fluid">


                <span>{{ todos | openCount }}</span>
                <span>{{ todos | closedCount }}</span>

                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <router-link to="/todo/add" class="item icon">
                            <i class="fa fa-plus-circle fa-4x"></i>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>


    </div>
</template>

<script>

    /*
    import ToDoModel from './model/ToDoModel';
    */
    export default {

        data : function(){
            return {
                todos: this.$store.state.todos    
            }
        },

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
    };

</script>