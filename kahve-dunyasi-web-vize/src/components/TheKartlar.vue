<template>
    <div class="q-pa-md row items-start q-gutter-md justify center">
      
      <q-card class="my-card" @click="handleCardClick('coffee')">
        <img src="../assets/images/coffee.jpg" class="card-image" title="Kahve">
        <div class="text-subtitle2 absolute-top text-center" style="color: white; top: 50px; right: 50px; font-size: 20px; font-family: Gotham-Black, sans-serif;">
           <img src="../assets/images/coffee.svg" style="width: 29px;" alt="">
         <b> &nbsp; Kahve</b> 
        </div>
      </q-card>
  
      <q-card class="my-card" @click="handleCardClick('chocolate')">
        <img src="../assets/images/chocolate.jpg" title="Çikolata">
        <div class="text-subtitle2 absolute-top text-center" style="color: white; top: 50px; right: 50px; font-size: 20px; font-family: Gotham-Black, sans-serif;">
           <img src="../assets/images/chocolate.svg" style="width: 29px;" alt="">
         <b> &nbsp; Çikolata</b> 
        </div>
      </q-card>
  
  
      <q-card class="my-card" @click="handleCardClick('accesory')">
        <img src="../assets/images/accesory.jpg" title="Aksesuar">
        <div class="text-subtitle2 absolute-top text-center" style="color: white; top: 50px; right: 50px; font-size: 20px; font-family: Gotham-Black, sans-serif;">
           <img src="../assets/images/accesory.svg" style="width: 29px;" alt="">
         <b> &nbsp; Aksesuar</b> 
        </div>
      </q-card>
  
     
  
      <q-card class="my-card" @click="handleCardClick('diet')">
        <img src="../assets/images/diet.jpg" title="Fit Lezzetler">
        <div class="text-subtitle2 absolute-top text-center" style="color: white; top: 50px; right: 50px; font-size: 20px; font-family: Gotham-Black, sans-serif;">
           <img src="../assets/images/diet.svg" style="width: 29px;" alt="">
         <b> &nbsp; Fit Lezzetler</b> 
        </div>
      </q-card>
      
      <q-card class="my-card" @click="handleCardClick('prom0')">
        <img src="../assets/images/promo.jpg" title="Fırsatlar">
        <div class="text-subtitle2 absolute-top text-center" style="color: white; top: 50px; right: 50px; font-size: 20px; font-family: Gotham-Black, sans-serif;">
           <img src="../assets/images/promo.svg" style="width: 29px;" alt="">
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
  
  <style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 250px
    cursor: pointer // Kartın fare işaretçisi değiştirme özelliği
    margin:23px
  
  .card-image
    width: 100%
    height: auto
  
  .card-text
    position: absolute
    bottom: 0
    left: 0
    right: 0
    background-color: rgba(0, 0, 0, 0.5)
    color: white
    padding: 8px
    text-align: center
  </style>