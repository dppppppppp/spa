import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        name: 'posts.index',
        component: require('./components/posts/Index')
    },
    {
        path: '/about',
        name: 'about',
        component: require('./components/pages/About')
    },
    {
        path: '/posts/:id',
        name: 'posts.show',
        component: require('./components/posts/show')
    }
];

export default new VueRouter({
    mode: 'history',
    routes
});