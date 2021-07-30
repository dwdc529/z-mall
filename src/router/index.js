import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/home',
    component: () => import('../pages/home/Home')
  },
  {
    path: '/category',
    component: () => import('../pages/category/Category')
  },
  {
    path: '/cart',
    component: () => import('../pages/cart/Cart')
  },
  {
    path: '/profile',
    component: () => import('../pages/profile/Profile')
  },
  { path: '', redirect: '/home' }
];

export default new Router({
  routes,
  mode: 'history'
});
