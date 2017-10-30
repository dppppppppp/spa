<template>
    <div class="">
        <top-menu></top-menu>
        <router-view></router-view>
    </div>
</template>

<script>
    import TopMenu from './common/TopMenu';
    import JWT_TOKEN from '../helper/jwt';

    export default {
        components: {
            'top-menu': TopMenu
        },
        created() {
            if (JWT_TOKEN.getToken()) {
                this.$store.dispatch('setAuthUser');
            }
        }
    }
</script>
