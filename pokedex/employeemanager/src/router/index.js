import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import NewTeam from '@/components/NewTeam';
import ViewTeam from '@/components/ViewTeam';
import EditTeam from '@/components/EditTeam';



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-team',
      component: NewTeam
    },
    {
      path: '/edit/:team_id',
      name: ' edit-teams',
      component: EditTeam
    },
    {
      path: '/:team_id',
      name: 'view-team',
      component: ViewTeam
    },
  ],
});
