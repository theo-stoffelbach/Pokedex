import { createRouter, createWebHistory } from "vue-router";
import Login from '@/views/account/Log-in.vue';
import Register from '@/views/account/Register.vue';

import Friend from '@/views/Friend.vue';
import Home from '@/views/Home.vue';
import Team from '@/views/Team.vue';
import Pokemon from '@/views/Pokemon.vue';
import Json from '@/views/account/json.vue';


const routes = [

    {
        name: 'Json',
        path: "/Account/Json",
        component: Json,
    },

    {
        name: 'Friend',
        path: "/Friend",
        component: Friend,
    },
    {
        name: 'Team',
        path: '/Team',
        component: Team,
    },
    {
        name: 'Pokemon',
        path: "/Pokemon/:name_pokemon",
        component: Pokemon,
        props: true,
    },
    {
        name: 'Login',
        path: "/Account/log-in",
        component: Login,
    },
    {
        name: 'Register',
        path: "/Account/Register",
        component: Register,
    },
    {
        name: 'Home',
        path: "/",
        component: Home,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;