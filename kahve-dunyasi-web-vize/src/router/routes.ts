import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
    { path: '', component: () => import('pages/IndexPage.vue') },
    { path: '', component: () => import('src/pages/BaslangicPage.vue') },
    { path: 'comp1', component: () => import('src/pages/YeniUrunlerPage.vue') },
    { path: 'comp2', component: () => import('src/pages/OzelliklerPage.vue') },
    { path: 'comp3', component: () => import('src/pages/SepetPage.vue') },
  
    { path: 'comp4', component: () => import('src/pages/MenuPage.vue') },
    { path: 'comp5', component: () => import('src/pages/KoleksiyonPage.vue') },
    { path: 'comp6', component: () => import('src/pages/KartlarPage.vue') },
    { path: 'comp7', component: () => import('src/pages/GirisPage.vue') },
    { path: 'comp8', component: () => import('src/pages/CookiesPage.vue') },
    { path: 'comp9', component: () => import('src/pages/BlogPage.vue') },
    { path: 'comp10', component: () => import('src/pages/KurumsalPage.vue') }
  
  ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
