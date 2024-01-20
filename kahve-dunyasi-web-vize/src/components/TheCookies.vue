<template>
    <div class="row cookie-disclaimer" style="height: 80px;">
      <div class="col1 q-pa-md q-gutter-sm" >
        <a href="" class>
        <img src="../assets/cookie.png" style="height: 35px;">
      </a>
       
      </div>
  
      <div class="col" style="width: 1200px;">
        <p>
            Size daha iyi bir alışveriş deneyimi sunabilmek için yasal düzenlemelere uygun çerezler (cookies) kullanıyoruz. 
         Detaylı bilgi için <a href="https://www.kahvedunyasi.com/sozlesmeler/cerez-politikasi-2c04"><span style="color: white;">Çerez Politikası </span></a> açıklama metnini inceleyebilirsiniz
         </p> 
      </div>


      <div class="col3 q-pa-md ">
        <a href="" class>
        <img src="../assets/close.png" style="height: 35px;">
      </a>
      </div>

      <div class="col4 q-pa-md ">
        <q-btn unelevated rounded color="green" label=" Canlı Destek" />
      </div>
      
     
    </div>
  </template>
  
  <script>
  export default {
    
  };
  </script>

  <style scoped>
.cookie-disclaimer {
    position: fixed;
    background-color: #6c0c33;
    color: #fff;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 3px;
    font-size: 17px;
    box-shadow: 0 5px 20px rgba(0,0,0,.5);
    z-index: 1001;
}
.col1{
    padding-right: 150px;
}
.col3{
    padding-right: 20px;
}

</style>