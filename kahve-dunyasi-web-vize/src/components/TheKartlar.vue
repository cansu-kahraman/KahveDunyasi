<template>
    <div class="q-pa-md row items-start q-gutter-md justify-center">
      <q-card class="my-card" @click="handleCardClick('coffee')">
        <img src="../assets/coffee.jpg" class="card-image" title="Kahve">
        <div class="text-subtitle2 absolute-top text-center" style="color: white; top: 50px; right: 50px; font-size: 20px; font-family: Gotham-Black, sans-serif;">
           <img src="../assets/coffee.jpg" style="width: 29px;" alt="">
         <b> &nbsp; Kahve</b> 
        </div>
      </q-card>
  
      <q-card class="my-card" @click="handleCardClick('chocolate')">
        <img src="../assets/chocolate.jpg" title="Çikolata">
        <div class="text-subtitle2 absolute-top text-center" style="color: white; top: 50px; right: 50px; font-size: 20px; font-family: Gotham-Black, sans-serif;">
           <img src="../assets/chocolate.jpg" style="width: 29px;" alt="">
         <b> &nbsp; Çikolata</b> 
        </div>
      </q-card>
  
  
      <q-card class="my-card" @click="handleCardClick('accesory')">
        <img src="../assets/accesory.jpg" title="Aksesuar">
        <div class="text-subtitle2 absolute-top text-center" style="color: white; top: 50px; right: 50px; font-size: 20px; font-family: Gotham-Black, sans-serif;">
           <img src="../assets/accesory.jpg" style="width: 29px;" alt="">
         <b> &nbsp; Aksesuar</b> 
        </div>
      </q-card>
  
     
  
      <q-card class="my-card" @click="handleCardClick('diet')">
        <img src="../assets/diet.jpg" title="Fit Lezzetler">
        <div class="text-subtitle2 absolute-top text-center" style="color: white; top: 50px; right: 50px; font-size: 20px; font-family: Gotham-Black, sans-serif;">
           <img src="../assets/diet.jpg" style="width: 29px;" alt="">
         <b> &nbsp; Fit Lezzetler</b> 
        </div>
      </q-card>
      
      <q-card class="my-card" @click="handleCardClick('promo')">
        <img src="../assets/promo.jpg" title="Fırsatlar">
        <div class="text-subtitle2 absolute-top text-center" style="color: white; top: 50px; right: 50px; font-size: 20px; font-family: Gotham-Black, sans-serif;">
           <img src="../assets/promo.jpg" style="width: 29px;" alt="">
         <b> &nbsp; Fırsatlar</b> 
        </div>
      </q-card>
  
      
    </div>
  </template>
  
  <script>
  export default {
    setup() {
      const handleCardClick = (imageName) => {
        // Tıklanan kartın işlemlerini burada gerçekleştirebilirsiniz
        console.log(`Tıklanan kart: ${imageName}`);
      };
  
      return {
        handleCardClick
      };
    }
  };
  </script>
  <style  scoped>
  .my-card{
    width: 100%;
    max-width: 250px;
    cursor: pointer; 
    margin:23px;
  }
  .card-image{
    width: 100%;
    height: auto;
  }
  </style>