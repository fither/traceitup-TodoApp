import { createRouter, createWebHistory } from 'vue-router'
import Todo from '../pages/todo/Todo.vue';
import Home from '../Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/todo',
        name: 'Todo',
        component: Todo
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
