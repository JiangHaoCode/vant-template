import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/home.vue';
import About from '@/views/about.vue';
import BackendLayout from '@/layout/BackendLayout.vue';
import Login from '@/views/login/login.vue';

const routers: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'yield',
    redirect: '/login',
  },
  {
    path: '/transition',
    name: 'transition',
    component: () => import('@/views/transition.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/backend',
    name: 'Backend',
    component: BackendLayout,
    meta: {
      transition: 'aside-right', // 不需要缓存
    },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
      },
      {
        path: 'about',
        name: 'About',
        component: About,
      },
    ],
    // meta: { transition: 'aside-right' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routers,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

router.beforeEach((to, from, next) => {
  // console.log(to, from, next); 跳转处理
  next();
});

export default router;
