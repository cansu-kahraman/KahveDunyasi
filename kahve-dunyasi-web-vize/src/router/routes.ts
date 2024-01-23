import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
    { path: '', component: () => import('pages/IndexPage.vue') },
    { path: 'BaslangicPage', component: () => import('src/pages/BaslangicPage.vue') },
    { path: 'UrunlerimPage', component: () => import('src/pages/UrunlerimPage.vue') },
    { path: 'BilgiPage', component: () => import('src/pages/BilgiPage.vue') },

    { path: 'YeniUrunlerPage', component: () => import('src/pages/YeniUrunlerPage.vue') },
    
    { path: 'SepetPage', component: () => import('src/pages/SepetPage.vue') },
   
    { path: 'GirisPage', component: () => import('src/pages/GirisPage.vue') },
    
    { path: 'KurumsalPage', component: () => import('src/pages/KurumsalPage.vue') }
  
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
