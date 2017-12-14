<template>
        <nav class="navbar navbar-default navbar-fixed-bottom">
            <div class="container-fluid">


                <span>{{ countOpenTodos }}</span>
                <span>{{ countClosedTodos }}</span>

                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <router-link to="/todo/add" class="item icon">
                            <i class="fa fa-plus-circle fa-4x"></i>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed : mapGetters(['countOpenTodos', 'countClosedTodos'])
    }
</script>