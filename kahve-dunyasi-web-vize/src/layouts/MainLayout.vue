<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <component-link
          v-for="link in componentLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import ComponentLink from '../components/ComponentLink.vue';
import { ComponentLinkProps } from '../components/ComponentLink.vue';

const componentLinks: ComponentLinkProps[] = [
  {
    title: 'Koleksiyon',
    caption: 'quasar.dev',
    icon: 'school',
    link: '/Koleksiyon',
  },
  {
    title: 'Ozellikler',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: '/Ozellikler',
  },
  {
    title: 'Blog',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: '/Blog',
  },
  {
    title: 'YeniUrunler',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: '/YeniUrunler',
  },
  
  {
    title: 'Cookies',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: '/Cookies',
  },


  {
    title: 'Giris',
    caption: 'quasar.dev',
    icon: 'school',
    link: '/Giris',
  },
  {
    title: 'Menu',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: '/Menu',
  },
  {
    title: 'Sepet',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: '/Sepet',
  },
  {
    title: 'KurumsalHediye',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: '/KurumsalHediye',
  },
  
  {
    title: 'Kartlar',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: '/Kartlar',
  },
  {
    title: 'BaslangicPage',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: '/BaslangicPage',
  },
  {
    title: 'UrunlerimPage',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: '/UrunlerimPage',
  },
  {
    title: 'BilgiPage',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: '/BilgiPage',
  },
  
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
