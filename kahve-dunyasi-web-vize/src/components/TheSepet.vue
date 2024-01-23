<template>
    <div>
      <div class="cart-header" style="background-color: #f7f8f9; padding: 20px">
        <div style="display: flex; align-items: center; justify-content: center">
          <img
            src="../assets/cargo-car.png"
            alt="Kargo Arabası"
            style="max-width: 32px; max-height: 20px"
          />
          <a
            href=""
            class=""
            style="
              text-decoration: none;
              color: #005e5c;
              font-weight: 530;
              font-family: Gotham-Bold, sans-serif;
            "
          >
            <strong
              >&nbsp; &nbsp; 500 TL VE ÜZERİ SİPARİŞLERİNİZDE KARGO BEDAVA</strong
            >
          </a>
        </div>
      </div>
      <div
        class="additional-section"
        style="
          background-color: #ffffff;
          padding: 20px;
          display: flex;
          justify-content: space-between;
        "
      >
        <div class="link-wrapper">
          <i class="fas fa-arrow-left"></i>
          <!-- Font Awesome sol ok ikonu -->
          <router-link
            to="comp3"
            style="text-decoration: none; margin-left: 5px; color: #6c0c33"
            >Alışverişe Dön</router-link
          >
        </div>
        <a href="#comp3" class="additional-section">
          <img
            src="../assets/logo.svg"
            alt="Alt Sol Köşe Resmi"
            style="width: 92.5px; height: 92.5px"
          />
        </a>
        <img
          src="../assets/guvenliodeme.jpeg"
          alt="Sağdaki Resim"
          style="max-width: 150px; max-height: 40.44px"
        />
      </div>
    </div>
    <div
      class="empty-cart"
      v-if="isCartEmpty"
      style="
        padding: 20px;
        height: 220px;
        text-align: center;
        font-family: Gotham-Book, sans-serif;
        font-size: 15px;
      "
    >
      <p>
        Sepetinizde herhangi bir ürün bulunmamaktadır. <br />
        Alışverişe devam etmek için
        <router-link
          to="comp3"
          style="text-decoration: none; color: black"
          >tıklayınız.</router-link
        >
      </p>
    </div>
    <a href="#" class="bottom-left-image">
      <img
        src="../assets/cerez.jpeg"
        alt="Alt Sol Köşe Resmi"
        style="width: 42.5px; height: 42.5px"
      />
    </a>
  </template>
  
  <!-- ... -->
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'CartHeader',
    props: {
      totalPrice: {
        type: Number,
        required: true,
      },
    },
    setup(props) {
      // Sepetin boş olup olmadığını kontrol etmek için bir değişken
      const isCartEmpty = ref(true); // Sepet boş olduğunu varsayalım, gerçek duruma göre değiştirin
  
      // Örnek bir bedava kargo eşik değeri, istediğiniz değere göre güncelleyebilirsiniz.
      const freeShippingThreshold = 500;
      // Kargo bedava durumu kontrolü
      const freeShipping = ref(props.totalPrice >= freeShippingThreshold);
  
      return {
        freeShipping,
        isCartEmpty,
      };
    },
  });
  </script>
  
  <style scoped>
  /* ... */
  
  /* Boş sepet durumu için stil */
  .empty-cart {
    background-color: #f7f8f9;
    padding: 20px;
    text-align: center;
    align-items: center;
  }
  
  .empty-cart {
    background-color: #f7f8f9;
    padding: 20px;
    text-align: center;
    display: flex;
    align-items: center; /* Yükseklik açısından ortalamak için */
    justify-content: center;
    height: 200px; /* Örnekteki yükseklik değeri, istediğiniz gibi ayarlayabilirsiniz */
  }
  
  .empty-cart a:hover {
    color: #000000;
  }
  .bottom-left-image {
    position: fixed;
    width: 18.5px;
    bottom: 0px; /* İstenilen alt boşluk değeri */
    left: 10px; /* İstenilen sol boşluk değeri */
  }
  </style>
  