<template>
        <nav class="navbar">

            <!--
            <span>{{ countOpenTodos }}</span>
            <span>{{ countClosedTodos }}</span>
            -->

            <ul class="navbar-right">
                <li>
                    <router-link to="/todo/add" class="item icon">
                        <i class="fa fa-plus-circle fa-4x"></i>
                    </router-link>
                </li>
            </ul>
        </nav>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed : mapGetters(['countOpenTodos', 'countClosedTodos'])
    }
</script>