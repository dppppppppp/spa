import JWT_TOKEN from '../../helper/jwt';
export default {
    actions: {
        loginRequest({dispatch}, postData) {
            axios.post('/api/login', postData).then(response => {
                JWT_TOKEN.setToken(response.data.access_token);
                dispatch('setAuthUser');
            }).catch(error => {
                console.log(error);
            });

        }
    }
}