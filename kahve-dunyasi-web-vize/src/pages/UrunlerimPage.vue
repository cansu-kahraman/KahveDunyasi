<template>
    <div>
     <yeni-urunler></yeni-urunler>
      <the-blog></the-blog>
      
    </div>
  </template>
  
  <script lang="ts">



import TheBlog from '../components/TheBlog.vue';
import YeniUrunler from '../components/YeniUrunler.vue';
  
  export default {
    components: {
        
      
        TheBlog,
        YeniUrunler}
    // Ana uygulama kodu
  };
  </script>
  
  
  
  <style scoped>
  /* Ana uygulama için stil kuralları */
  </style>
  