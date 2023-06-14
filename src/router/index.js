import { createRouter, createWebHashHistory } from 'vue-router'
import tp01shop from "../tp01shop.vue"

const routes = [
    {
        path: '/shop',
        name: 'tp01shop',
        component: () => import('../tp01shop.vue')
    }, {
        path: '/',
        name: '',
        component: () => import('../components/HelloWorld.vue')
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
