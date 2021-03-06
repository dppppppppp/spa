import VueRouter from 'vue-router';
import JWT_TOKEN from './helper/jwt';
import Store from './store/index';

let routes = [
    {
        path: '/',
        name: 'posts.index',
        component: require('./components/posts/Index'),
        meta: {}
    },
    {
        path: '/about',
        name: 'about',
        component: require('./components/pages/About'),
        meta: {}
    },
    {
        path: '/posts/:id',
        name: 'posts.show',
        component: require('./components/posts/Show'),
        meta: {}
    },
    {
        path: '/register',
        name: 'users.create',
        component: require('./components/users/Create'),
        meta: {requireGuest: true}
    },
    {
        path: '/login',
        name: 'users.login',
        component: require('./components/users/Login'),
        meta: {requireGuest: true}
    },
    {
        path: '/profile',
        name: 'users.show',
        component: require('./components/users/show'),
        meta: {requireAuth: true}
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (JWT_TOKEN.getToken() || Store.state.AuthUser.authenticated) {
            return next();
        } else {
            return next({name: 'users.login'})
        }
    }
    if (to.meta.requireGuest) {
        if (JWT_TOKEN.getToken() || Store.state.AuthUser.authenticated) {
            return next({name: 'posts.index'});
        } else {
            return next()
        }
    }
    return next();
});

export default router;