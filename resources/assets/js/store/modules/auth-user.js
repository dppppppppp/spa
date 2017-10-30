import {SET_AUTH_USR,LOGOUT} from "../mutation-type";
import JWT_TOKEN from '../../helper/jwt';

export default {
    state: {
        authenticated: false,
        name: null,
        email: null
    },
    mutations: {
        [SET_AUTH_USR](state, payload) {
            state.authenticated = true;
            state.name = payload.user.name;
            state.email = payload.user.email;
        },
        [LOGOUT](state){
            state.authenticated = false;
            state.name = null;
            state.email = null;
        }
    },
    actions: {
        setAuthUser({commit}) {
            return axios.get('/api/user').then(response => {
                commit({
                    type: SET_AUTH_USR,
                    user: response.data
                });
            }).catch(error => {
                console.log(error);
            });
        },
        logout({commit}){
            JWT_TOKEN.removeToken();
            commit({
                type:LOGOUT
            });
        }
    }
}