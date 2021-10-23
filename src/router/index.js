import { createRouter, createWebHistory } from 'vue-router'
import Todo from '../pages/todo/Todo.vue';
import Home from '../Home.vue';
import Edit from '../pages/todo/Edit.vue';

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
    },
    {
        path: '/edit',
        name: 'Edit Todo',
        component: Edit
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
