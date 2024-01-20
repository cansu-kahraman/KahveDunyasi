import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') },
    { path: 'Blog', component: () => import('components/TheBlog.vue') },
    { path: 'Koleksiyon', component: () => import('components/TheKoleksiyon.vue') },
    { path: 'Ozellikler', component: () => import('components/TheOzellikler.vue') },
    { path: 'YeniUrunler', component: () => import('components/YeniUrunler.vue') },
    { path: 'Cookies', component: () => import('components/TheCookies.vue') },
    { path: 'Giris', component: () => import('components/TheGiris.vue') },
    { path: 'Kartlar', component: () => import('components/TheKartlar.vue') },
    { path: 'Menu', component: () => import('components/TheMenu.vue') },
    { path: 'KurumsalHediye', component: () => import('components/KurumsalHediye.vue') },
    { path: 'Sepet', component: () => import('components/TheSepet.vue') },
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
