import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import About from '../components/about'
import Works from '../components/works'
import Blog from '../components/blog'

const routes = [
    {
        path:'/',
        component: About
    },
    {
        path:'/works',
        component: Works
    },
    {
        path:'/blog',
        component: Blog
    }

];


export default new VueRouter({
    routes
});