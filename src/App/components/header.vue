<template>

        <nav class="navbar">
            <ul>
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

            <ul class="navbar-right">
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
        </nav>

</template>


<script>
    export default {
    }
</script>