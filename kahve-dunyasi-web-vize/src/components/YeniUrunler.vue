<template>
  <div class="row q-pa-xl">
    <div class="row text-center">
      <div class="text-h5 text-center">Yeni Ürünler</div>
      <q-separator />
    </div>

    <div class="row q-pa-lg">
      <div class="col q-pr-lg">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pt-md">
              <q-img
                class="my-card-image"
                src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/3b3e3_Rochetta_Sutlu_250_gr.jpg"
               style="width: 100%;"/>
              <q-separator />
              <div class="text-caption text-black"><h2>Rochetta Sütlü 250 gr</h2></div>
              
              <div class="text-caption text-red"><h2>275 TL</h2></div>
            </q-card-section>
            <q-separator />
           <q-card-section>
          <q-btn
            flat
            color="primary"
            text-color="blue"
          >
            Sepete Ekle
          </q-btn>
        </q-card-section>
        </q-card-section>
        </q-card>
      </div>

      <div class="col q-pr-lg">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pt-md">
              <q-img
                class="my-card-image"
                src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/4c805_Citir_Ceviz_Bitter_250_gr.jpg"
               style="width: 100%;"/>
              <q-separator />
              <div class="text-caption text-black"><h2>Çıtır Ceviz Bitter 250 gr</h2></div>
            
              <div class="text-caption text-red"><h2>245 TL</h2></div>
            </q-card-section>
            <q-separator />
           <q-card-section>
          <q-btn
            flat
            color="primary"
            text-color="blue"
          >
            Sepete Ekle
          </q-btn>
        </q-card-section>
        </q-card-section>
        </q-card>
      </div>

      <div class="col q-pr-lg">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pt-md">
              <q-img
                class="my-card-image"
                src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/9c37a_Rochetta_Bitter_250_gr.jpg"
               style="width: 100%;"/>
              <q-separator />
              <div class="text-caption text-black"><h2>Rochetta Bitter 250 gr</h2></div>
           
              <div class="text-caption text-red"><h2>275 TL</h2></div>
            </q-card-section>
            <q-separator />
           <q-card-section>
          <q-btn
            flat
            color="primary"
            text-color="blue"
          >
            Sepete Ekle
          </q-btn>
        </q-card-section>
        </q-card-section>
        </q-card>
      </div>

      <div class="col">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pt-md">
              <q-img
                class="my-card-image"
                src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/e4ca4_Citir_Ceviz_Sutlu_250_gr.jpg"
               style="width: 100%;"/>
              <q-separator />
              <div class="text-caption text-black"><h2>Çıtır Ceviz Sutlu</h2> <h2>250 gr</h2></div>
            
              <div class="text-caption text-red"><h2>245 TL</h2></div>
            </q-card-section>
            <q-separator />
           <q-card-section>
          <q-btn
            flat
            color="primary"
            text-color="blue"
          >
            Sepete Ekle
          </q-btn>
        </q-card-section>
        </q-card-section>
        </q-card>
      </div>

    </div>
  </div>
</template>

<script setup>

export default {
  data() {
    return {
      products: [
        {
          name: 'Rochetta Sütlü 250 gr',
          image: 'https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/3b3e3_Rochetta_Sutlu_250_gr.jpg',
          price: '275 TL'
        },
         {
          name: 'Citir_Ceviz Bitter 250 gr',
          image: 'https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/4c805_Citir_Ceviz_Bitter_250_gr.jpg',
          price: '245 TL'
        },
         {
          name: 'Rochetta Bitter 250 gr',
          image: 'https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/9c37a_Rochetta_Bitter_250_gr.jpg',
          price: '275 TL'
        },
         {
          name: 'Citir_Ceviz_Sutlu 250 gr',
          image: 'https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/e4ca4_Citir_Ceviz_Sutlu_250_gr.jpg',
          price: '245 TL'
        },
        
      ]
      
    };
  }
};
</script>

<style scoped>
.row {
  margin-left: -10px;
  margin-right: -10px;
}

.col {
  padding-left: 10px;
  padding-right: 10px;
}

.my-card {
  border: 1px solid #ccc;
  position: relative;
}

.my-card-image {
  width: 100%;
  height: auto; 
}
.full-height {
  height: 100%;
  width: 100%;
}

.text-caption {
  font-size: 14px;
}

.text-black {
  color: #000;
}

.text-red {
  color: red;
}

h2 {
  font-weight: bold;
  font-size: 1.2em;
  
  }

q-btn {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  transition: background-color 0.3s, color 0.3s;
}

q-btn:hover {
  background-color: #1976D2;
  color: white;
}
</style>