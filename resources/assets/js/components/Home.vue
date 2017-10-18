<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">文章列表</div>

                    <ul class="list-group">
                        <li class="list-group-item" v-for="post in posts">
                            <h4>
                                <router-link :to="{'name':'posts','params':{'id':post.id}}">{{post.title}}</router-link>
                            </h4>
                            <p>{{post.body}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            axios.get('/api/posts').then(response => {
                console.log(response);
                this.posts = response.data.data;
            });
        },
        data() {
            return {
                posts: []
            }
        }
    }
</script>
