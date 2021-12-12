import { createRouter, createWebHistory } from "vue-router";
import Login from '@/views/account/Login.vue';
import Register from '@/views/account/Register.vue';

import Friend from '@/views/Friend.vue';
import Home from '@/views/Home.vue';
import Team from '@/views/Team.vue';
import Pokemon from '@/views/Pokemon.vue';


const routes = [
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
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Account/Login',
    name: 'Login',
    component: Login
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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
