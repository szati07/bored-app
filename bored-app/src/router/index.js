import Vue from 'vue';
import VueRouter from 'vue-router';
import Activities from '../views/Activities.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/activities',
  },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities,
  },
  {
    path: '/my-list',
    name: 'MyList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyList.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
