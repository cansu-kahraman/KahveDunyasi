<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="black"
      navigation
      padding
      arrows
      height="650px"

      class="rounded-borders"
    >
      <!-- 1 -->
      <q-carousel-slide :name="1" class="column no-wrap" style="text-align: center;">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <a href="https://www.kahvedunyasi.com/blog/citir-fontetinli-findik-kremasi-137">
            <q-img class="rounded-borders col-6 full-height" src="../assets/11.png" style="width: 350px;"/> 
          </a>
          <a href="https://www.kahvedunyasi.com/blog/kahve-dunyasi-granola-ve-musli-ile-sa%C4%9Fl%C4%B1kli-lezzetler-120">
            <q-img class="rounded-borders col-6 full-height" src="../assets/22.png" style="width: 350px;"/>
          </a>
          <a href="https://www.kahvedunyasi.com/blog/seker-ilavesiz-beyaz-cikolatali-ve-granolali-muhallebi-84">
            <q-img class="rounded-borders col-6 full-height" src="../assets/33.png" style="width: 350px;"/>
          </a>
        </div>
      </q-carousel-slide>

      <!-- 2 -->
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <a href="https://www.kahvedunyasi.com/blog/kahve-dunyasi-granola-ve-musli-ile-sa%C4%9Fl%C4%B1kli-lezzetler-120">
            <q-img class="rounded-borders col-6 full-height" src="../assets/22.png" style="width: 350px;"/>
          </a>
          <a href="https://www.kahvedunyasi.com/blog/seker-ilavesiz-beyaz-cikolatali-ve-granolali-muhallebi-84">
            <q-img class="rounded-borders col-6 full-height" src="../assets/33.png" style="width: 350px;"/>
          </a>
          <a href="https://www.kahvedunyasi.com/blog/aydodulununkazananikahvedunyasi-116">
           <q-img class="rounded-borders col-6 full-height" src="../assets/44.png" style="width: 350px;"/>
          </a>
        </div>
      </q-carousel-slide>

      <!-- 3 -->
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <a href="https://www.kahvedunyasi.com/blog/seker-ilavesiz-beyaz-cikolatali-ve-granolali-muhallebi-84">
            <q-img class="rounded-borders col-6 full-height" src="../assets/33.png" style="width: 350px;"/>
          </a>
          <a href="https://www.kahvedunyasi.com/blog/aydodulununkazananikahvedunyasi-116">
           <q-img class="rounded-borders col-6 full-height" src="../assets/44.png" style="width: 350px;"/>
          </a>
          <a href="https://www.kahvedunyasi.com/blog/findikaromalifiltrekahveilemacchiato-114">
           <q-img class="rounded-borders col-6 full-height" src="../assets/55.png" style="width: 350px;"/>
          </a>
        </div>
      </q-carousel-slide>

      <!-- 4 -->
      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <a href="https://www.kahvedunyasi.com/blog/aydodulununkazananikahvedunyasi-116">
           <q-img class="rounded-borders col-6 full-height" src="../assets/44.png" style="width: 350px;"/>
          </a>
          <a href="https://www.kahvedunyasi.com/blog/findikaromalifiltrekahveilemacchiato-114">
           <q-img class="rounded-borders col-6 full-height" src="../assets/55.png" style="width: 350px;"/>
          </a>
          <a href="https://www.kahvedunyasi.com/blog/termosveaksesuarlar-118">
            <q-img class="rounded-borders col-6 full-height" src="../assets/66.png" style="width: 350px;"/>
          </a>
        </div>
      </q-carousel-slide>

      <!-- 5 -->
      <q-carousel-slide :name="5" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <a href="https://www.kahvedunyasi.com/blog/findikaromalifiltrekahveilemacchiato-114">
           <q-img class="rounded-borders col-6 full-height" src="../assets/55.png" style="width: 350px;"/>
          </a>
          <a href="https://www.kahvedunyasi.com/blog/termosveaksesuarlar-118">
            <q-img class="rounded-borders col-6 full-height" src="../assets/66.png" style="width: 350px;"/>
          </a>
          <a href="https://www.kahvedunyasi.com/blog/kahvenizinasilsaklamalisiniz-117">
            <q-img class="rounded-borders col-6 full-height" src="../assets/77.png" style="width: 350px;"/>
          </a>  
        </div>
      </q-carousel-slide>

      <!-- 6 -->
      <q-carousel-slide :name="6" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <a href="https://www.kahvedunyasi.com/blog/termosveaksesuarlar-118">
            <q-img class="rounded-borders col-6 full-height" src="../assets/66.png" style="width: 350px;"/>
          </a>
          <a href="https://www.kahvedunyasi.com/blog/kahvenizinasilsaklamalisiniz-117">
            <q-img class="rounded-borders col-6 full-height" src="../assets/77.png" style="width: 350px;"/>
          </a> 
          <a href="https://www.kahvedunyasi.com/blog/dunyacikolatagunuanketi-119">
            <q-img class="rounded-borders col-6 full-height" src="../assets/88.png" style="width: 350px;"/>
          </a>
        </div>
      </q-carousel-slide>

      <!-- 7 -->
      <q-carousel-slide :name="7" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <a href="https://www.kahvedunyasi.com/blog/kahvenizinasilsaklamalisiniz-117">
            <q-img class="rounded-borders col-6 full-height" src="../assets/77.png" style="width: 350px;"/>
          </a> 
          <a href="https://www.kahvedunyasi.com/blog/dunyacikolatagunuanketi-119">
            <q-img class="rounded-borders col-6 full-height" src="../assets/88.png" style="width: 350px;"/>
          </a>
          <a href="https://www.kahvedunyasi.com/blog/kahve-dunyasi-algotur-tekne-139">
            <q-img class="rounded-borders col-6 full-height" src="../assets/99.png" style="width: 350px;"/>
          </a>
        </div>
      </q-carousel-slide>

      <!-- 8 -->
      <q-carousel-slide :name="8" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <a href="https://www.kahvedunyasi.com/blog/dunyacikolatagunuanketi-119">
            <q-img class="rounded-borders col-6 full-height" src="../assets/88.png" style="width: 350px;"/>
          </a>
          <a href="https://www.kahvedunyasi.com/blog/kahve-dunyasi-algotur-tekne-139">
            <q-img class="rounded-borders col-6 full-height" src="../assets/99.png" style="width: 350px;"/>
          </a>
          <a href="https://www.kahvedunyasi.com/blog/colombiaespressokapsuluilemocha-115">
           <q-img class="rounded-borders col-6 full-height" src="../assets/10.png" style="width: 350px;"/>
          </a>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
