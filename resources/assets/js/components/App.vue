<template>
    <div class="">
        <top-menu></top-menu>
        <router-view></router-view>
    </div>
</template>

<script>
    import TopMenu from './common/TopMenu';
    export default {
        components:{
            'top-menu':TopMenu
        }
    }
</script>
