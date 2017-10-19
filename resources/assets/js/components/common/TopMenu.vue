<template>
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <router-link :to="{name:'posts.index'}" class="navbar-brand">SPA</router-link>
            </div>

            <ul class="nav navbar-nav navbar-right">
                <router-link tag="li" :to="{name:'users.create'}"><a>注册</a></router-link>
            </ul>
        </div>
    </nav>
</template>