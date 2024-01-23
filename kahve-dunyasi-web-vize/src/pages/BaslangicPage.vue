<template>
    <div>
      <the-menu></the-menu>
      <the-kartlar></the-kartlar>
      <the-cookies></the-cookies>
    </div>
  </template>
  
  <script lang="ts">

import TheMenu from '../components/TheMenu.vue';
import TheKartlar from '../components/TheKartlar.vue';
import TheCookies from '../components/TheCookies.vue';
  
  export default {
    components: {
        TheKartlar,
        TheMenu,
        TheCookies}
    // Ana uygulama kodu
  };
  </script>
  
  
  
  <style scoped>
  /* Ana uygulama için stil kuralları */
  </style>
  