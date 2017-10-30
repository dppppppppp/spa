<template>
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <router-link :to="{name:'posts.index'}" class="navbar-brand">SPA</router-link>
            </div>

            <ul class="nav navbar-nav navbar-right">
                <router-link v-if="!user.authenticated" tag="li" :to="{name:'users.create'}"><a>注册</a></router-link>
                <router-link v-if="!user.authenticated" tag="li" :to="{name:'users.login'}"><a>登录</a></router-link>
                <router-link v-if="user.authenticated" tag="li" :to="{name:'users.show'}"><a>个人主页</a></router-link>
                <li v-if="user.authenticated" @click="logout"><a>退出登录</a></li>
            </ul>
        </div>
    </nav>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        computed: {
            ...mapState({
                user: state => state.AuthUser,
            })
        },
        methods:{
            logout(){
                this.$store.dispatch('logout').then(response=>{
                    this.$router.push({name:'users.login'});
                });
            }
        }
    }
</script>