<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">{{post.title}}</div>

                    <div class="panel-body">{{post.body}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            axios.get('/api/posts/' + this.$route.params.id).then(response => {
                console.log(response);
                this.post = response.data;
            });
        },
        data() {
            return {
                post: {}
            }
        }
    }
</script>
