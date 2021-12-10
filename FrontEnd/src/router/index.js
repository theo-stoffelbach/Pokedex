import { createRouter, createWebHistory } from "vue-router";
import Account from '@/views/account/Log-in.vue';
import Friend from '@/views/Friend.vue';
import Home from '@/views/Home.vue';
import Team from '@/views/Team.vue';
import Pokemon from '@/views/Pokemon.vue';
import Json from '@/views/account/json.vue';


const routes = [
    {
        name: 'Account',
        path: "/Account/log-in",
        component: Account,
    },
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