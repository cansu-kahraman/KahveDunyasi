<template>
    <div class="main-content" q-pb-lg>
      <div class="menu">
        <!-- Menu component -->
        <div
          v-for="(item, index) in menuItems"
          :key="index"
          @click="handleItemClick(item)"
          :class="{
            'menu-item': true,
            'special-item': item === 'YILBAŞI ÖZEL',
            'green-text': item === 'DONDURMA',
            dropdown: item === 'KAHVE',
          }"
        >
          <img
            v-if="item === 'YILBAŞI ÖZEL'"
            src="../assets/yilbasi.svg"
            alt="Yılbaşı özel"
            class="menu-icon"
            style="width: 10px"
          />
          <img
            v-if="item === 'DONDURMA'"
            src="../assets/dondurma.svg"
            alt="Dondurma"
            class="menu-icon"
            style="width: 30px"
          />
          {{ item }}
  
          <!-- Dropdown menu content -->
          <div v-if="item === 'KAHVE'" class="dropdown-content">
            <!-- Add your dropdown menu items here -->
            <a
              style="font-size: 12px"
              href="https://www.kahvedunyasi.com/turk-kahvesi-c-3400"
            >
              <img
                src="../assets/turk_kahvesi.svg"
                alt=""
                style="width: 50px; height: 50px; top: 1px"
              />
              TÜRK KAHVESİ</a
            >
            <a href="https://www.kahvedunyasi.com/filtre-kahve-c-3401">
              <img
                src="../assets/filtre_kahve.svg"
                alt=""
                style="width: 50px; height: 50px; top: 1px"
              />
              FİLTRE KAHVE</a
            >
            <a href="https://www.kahvedunyasi.com/yoresel-kahve-c-3402">
              <img
                src="../assets/yoresel_kahve.svg"
                alt=""
                style="width: 50px; height: 50px; top: 1px"
              />
              YÖRESEL KAHVE</a
            >
            <a href="https://www.kahvedunyasi.com/espresso-c-3403">
              <img
                src="../assets/espresso.svg"
                alt=""
                style="width: 50px; height: 50px; top: 1px"
              />
              ESPRESSO</a
            >
            <a href="https://www.kahvedunyasi.com/hazir-kahveler-c-3404">
              <img
                src="../assets/hazir_kahve.svg"
                alt=""
                style="width: 50px; height: 50px; top: 1px"
              />
              HAZIR KAHVELER</a
            >
            <a href="https://www.kahvedunyasi.com/salep-ve-sicak-cikolata-c-3405">
              <img
                src="../assets/sahlep_sicakcikolata.svg"
                alt=""
                style="width: 50px; height: 50px; top: 1px"
              />
              SALEP VE SICAK ÇİKOLATA</a
            >
            <a href="https://www.kahvedunyasi.com/suruplar-c-3406">
              <img
                src="../assets/surup.svg"
                alt=""
                style="width: 50px; height: 50px; top: 1px"
              />
              ŞURUPLAR</a
            >
          </div>
        </div>
      </div>
  
      <div
        class="carousel"
        style="max-width: 100%; height: 500px; background-color: white !important"
      >
        <!-- Move the q-carousel navigation outside of q-carousel -->
        <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="black"
          navigation
          padding
          :arrows-absolute="true"
          height="600px"
          class="text-white shadow-1"
        >
          <!-- Carousel slides -->
          <q-carousel-slide name="1" class="no-column no-wrap flex-center">
            <a href="https://www.kahvedunyasi.com/yilbasi-ozel-cl-195">
              <img
                src="../assets/img1.jpg"
                alt="Slide 1"
                style="width: 100%; height: 100%; object-fit: contain"
              />
            </a>
          </q-carousel-slide>
  
          <q-carousel-slide name="2" class="no-column no-wrap flex-center">
            <a href="https://www.kahvedunyasi.com/arama/Rochetta">
              <img
                src="../assets/img2.jpg"
                alt="Slide2"
                style="width: 100%; height: 100%; object-fit: contain"
              />
            </a>
          </q-carousel-slide>
  
          <q-carousel-slide name="3" class="no-column no-wrap flex-center">
            <a
              href="https://www.kahvedunyasi.com/arama/%C3%87%C4%B1t%C4%B1r%20Ceviz"
            >
              <img
                src="../assets/img3.jpg"
                alt="Slide 1"
                style="width: 100%; height: 100%; object-fit: contain"
              />
            </a>
          </q-carousel-slide>
          <q-carousel-slide name="4" class="no-column no-wrap flex-center">
            <a href="https://www.kahvedunyasi.com/sonbahar-lezzetleri-cl-174">
              <img
                src="../assets/img4.jpg"
                alt="Slide 1"
                style="width: 100%; height: 100%; object-fit: contain"
              />
            </a>
          </q-carousel-slide>
          <q-carousel-slide name="5" class="no-column no-wrap flex-center">
            <a href="https://www.kahvedunyasi.com/yilbasi-ozel-cl-195">
              <img
                src="../assets/img5.jpg"
                alt="Slide 1"
                style="width: 100%; height: 100%; object-fit: contain"
              />
            </a>
          </q-carousel-slide>
          <q-carousel-slide name="6" class="no-column no-wrap flex-center">
            <a href="https://www.kahvedunyasi.com/yilbasi-ozel-cl-195">
              <img
                src="../assets/img6.jpg"
                alt="Slide 1"
                style="width: 100%; height: 100%; object-fit: contain"
              />
            </a>
          </q-carousel-slide>
  
          <!-- Add more carousel slides here -->
        </q-carousel>
  
        <!-- Place the q-carousel navigation here -->
        <div class="q-carousel-navigation absolute-top">
          <q-btn
            v-if="slide !== '1'"
            dense
            flat
            round
            icon="arrow_back"
            class="q-ml-md q-mr-sm bg-grey-8 text-white"
            @click="slide--"
          />
  
          <q-btn
            v-if="slide !== '6'"
            dense
            flat
            round
            icon="arrow_forward"
            class="q-mr-md q-ml-sm bg-grey-8 text-white"
            @click="slide++"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  
  export default {
    data() {
      return {
        menuItems: [
          'YILBAŞI ÖZEL',
          'DONDURMA',
          'KAHVE',
          'ÇİKOLATA',
          'AKSESUAR',
          'PASTACILIK',
          'KAMPANYALAR',
          'HAKKIMIZDA',
        ],
        slide: '1',
      };
    },
    methods: {
      handleItemClick(item) {
        console.log('Tıklanan öğe:', item);
      },
    },
  };
  </script>
  <style scoped>
  .menu {
    display: flex;
    justify-content: center; /* Center the text horizontally */
    height: 30px; /* Height equal to screen height */
    padding: 20px;
  }
  
  .menu-item {
    padding: 10px;
    cursor: pointer;
    margin-right: 10px;
    display: flex;
    align-items: center;
    margin-bottom: 495px;
    position: relative;
  }
  
  .menu-item:hover {
    background-color: white;
  }
  .menu-item:hover {
    color: #9a385f;
  }
  .special-item {
    color: #e9255d; /* Make the text color pink for 'YILBAŞI ÖZEL' */
  }
  .special-item:hover {
    color: #e9255d; /* Make the text color pink for 'YILBAŞI ÖZEL' on hover */
  }
  .green-text {
    color: #00ccc2; /* Set the text color to green for 'DONDURMA' */
  }
  .green-text:hover {
    color: #00ccc2; /* Set the text color to green for 'DONDURMA' on hover */
  }
  
  .menu-icon {
    width: 24px !important;
    margin-right: 5px;
  }
  .q-carousel {
    max-width: 100%;
    overflow: hidden;
  }
  
  /* ... Your existing styles ... */
  
  .dropdown {
    position: relative;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #800000; /* Burgundy background color */
    width: 100%; /* Set the width to 100% */
    top: 100%; /* Position it below the menu item */
    left: -260px; /* Align with the left edge of the menu item */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  
  .dropdown:hover .dropdown-content {
    display: flex; /* Display the dropdown content horizontally */
    flex-direction: row; /* Align items horizontally */
  }
  
  .dropdown-content a {
    padding: 40px;
    text-decoration: none;
    color: white; /* Text color for dropdown items */
    display: block;
    background-color: #692121; /* Set background color to burgundy for all options */
    transition: background-color 0.3s;
  }
  
  .dropdown-content a:hover {
    background-color: #a52a2a; /* Darker burgundy color on hover */
  }
  </style>