<template>
    <div>
      <the-koleksiyon></the-koleksiyon>
      <the-ozellikler></the-ozellikler>
     
    </div>
  </template>
  
  <script lang="ts">


import TheKoleksiyon from '../components/TheKoleksiyon.vue';
import TheOzellikler from '../components/TheOzellikler.vue';
  
  export default {
    components: {
    
        TheKoleksiyon,
        TheOzellikler}
    // Ana uygulama kodu
  };
  </script>
  
  
  
  <style scoped>
  /* Ana uygulama için stil kuralları */
  </style>
  