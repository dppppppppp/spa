<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">注册</div>

                    <div class="panel-body">
                        <form class="form-horizontal" v-on:submit.prevent="onSubmit">

                            <div class="form-group" :class="{'has-error':errors.has('name')}">
                                <label for="name" class="col-md-4 control-label">用户名</label>

                                <div class="col-md-6">
                                    <input id="name"
                                           v-validate="{ required: true, min:4 }"
                                           type="text" class="form-control" name="name" value="" required
                                           autofocus v-model="name">
                                    <span v-show="errors.has('name')" class="help-block">{{errors.first('name')}}</span>
                                </div>
                            </div>

                            <div class="form-group" :class="{'has-error':errors.has('email')}">
                                <label for="email" class="col-md-4 control-label">邮箱</label>

                                <div class="col-md-6">
                                    <input id="email"
                                           v-validate="{ required: true, email:true }"
                                           type="email" class="form-control" name="email" value="" required
                                           v-model="email">
                                    <span v-show="errors.has('email')" class="help-block">{{errors.first('email')}}</span>
                                </div>
                            </div>

                            <div class="form-group" :class="{'has-error':errors.has('password')}">
                                <label for="password" class="col-md-4 control-label">密码</label>

                                <div class="col-md-6">
                                    <input id="password"
                                           v-validate="{ required: true, min:6 }"
                                           type="password" class="form-control" name="password" required
                                           v-model="password">
                                    <span v-show="errors.has('password')" class="help-block">{{errors.first('password')}}</span>
                                </div>
                            </div>

                            <div class="form-group" :class="{'has-error':errors.has('password_confirmation')}">
                                <label for="password-confirm" class="col-md-4 control-label">确认密码</label>

                                <div class="col-md-6">
                                    <input id="password-confirm"
                                           v-validate="{ required: true, confirmed:'password' }"
                                           type="password" class="form-control"
                                           name="password_confirmation" required v-model="passwordConfirmation">
                                    <span v-show="errors.has('password_confirmation')" class="help-block">{{errors.first('password_confirmation')}}</span>
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
                passwordConfirmation: ''
            }
        },
        methods: {
            onSubmit() {
                let postData = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    'password_confirmation': this.passwordConfirmation
                };
                axios.post('/api/register', postData).then(response => {
                    console.log(response);
                    this.$router.push('/');
                })
            }
        }
    }
</script>