import VueRouter from 'vue-router';
import Vue from 'vue';
import index from '../views/index/index.vue';
import question from '../views/question/index.vue';
import result from '../views/result/index.vue';
Vue.use(VueRouter);
const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:index
    },
    {
        path:'/question/:id',
        component:question
    },{
        path:'/result',
        component:result
    }
]
const router = new VueRouter({
    routes:routes
})
export default router;