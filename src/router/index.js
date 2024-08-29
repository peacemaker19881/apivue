import Vue from 'vue';
import VueRouter from 'vue-router';
import loginview_component from '@/views/loginview_component_component.vue';
import studentview_component from '@/views/studentview_component.vue';
import authService from '@/services/authService';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: loginview_component },
  { path: '/student-registration', component: studentview_component, meta: { requiresAuth: true } },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !authService.isAuthenticated()) {
    next('/login');
  } else {
    next();
  }
});

export default router;