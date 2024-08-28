import Vue from 'vue';
import Router from 'vue-router';
import studentform_component from '@/components/studentform_component.vue';
import studentlist_component from '@/components/studentlist_component.vue';
import studentdetail_component from '@/components/studentdetail_component.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StudentList',
      component: studentlist_component
    },
    {
      path: '/add',
      name: 'StudentForm',
      component: studentform_component
    },
    {
      path: '/student/:id',
      name: 'StudentDetails',
      component: studentdetail_component
    }
  ]
});