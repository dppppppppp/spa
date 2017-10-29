import {SET_AUTH_USR} from "../mutation-type";

export default {
    state: {
        authenticated: false,
        name: null,
        email: null
    },
    mutations: {
        [SET_AUTH_USR](state, payload) {
            state.name = payload.user.name;
            state.email = payload.user.email;
        }
    },
    actions: {
        setAuthUser({commit}) {
            axios.get('api/user').then(response => {
                commit({
                    type: SET_AUTH_USR,
                    user: response.data
                })
            });
        }
    }
}