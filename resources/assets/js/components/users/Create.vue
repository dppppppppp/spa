<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">注册</div>

                    <div class="panel-body">
                        <form class="form-horizontal" v-on:submit.prevent="onSubmit">

                            <div class="form-group">
                                <label for="name" class="col-md-4 control-label">用户名</label>

                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control" name="name" value="" required
                                           autofocus v-model="name">
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="email" class="col-md-4 control-label">邮箱</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" name="email" value="" required
                                           v-model="email">
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="password" class="col-md-4 control-label">密码</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password" required
                                           v-model="password">
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="password-confirm" class="col-md-4 control-label">确认密码</label>

                                <div class="col-md-6">
                                    <input id="password-confirm" type="password" class="form-control"
                                           name="password_confirmation" required v-model="passwordConfirmation">
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    <button type="submit" class="btn btn-primary">
                                        注册
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                password: '',
                passwordConfirmation:''
            }
        },
        methods: {
            onSubmit() {
                let postData = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    'password_confirmation':this.passwordConfirmation
                };
                axios.post('/api/register', postData).then(response => {
                    console.log(response);
                    this.$router.push('/');
                })
            }
        }
    }
</script>