<template>
  <div class="row">
    <div class="col q-pa-md">
      <div class="caption1">
        <img
          src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static/img/icons/icon-1.svg"
          style="width: 60px; height: 60px"
        />
        <h2>Daima<br />Taze</h2>
        <p>
          Ürünlerimiz direkt fabrikadan gönderilir, tedarik süreci olmadan taze
          taze hazırlanır.
        </p>
      </div>
    </div>

    <q-separator></q-separator>

    <div class="col q-pa-md">
      <div class="caption2">
        <img
          src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static/img/icons/icon-3.svg"
          style="width: 60px; height: 60px"
        />
        <h2>Güvenli<br />Taşıma</h2>
        <p>
          Darbeye ve ısı değişimine karşı tam korunma sağlayan özel paketler ile
          gönderilir.
        </p>
      </div>
    </div>

    <q-separator></q-separator>

    <div class="col q-pa-md">
      <div class="caption3">
        <img
          src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static/img/icons/icon-5-v2.svg"
          style="width: 60px; height: 60px"
        />
        <h2>Çekirdek<br />Puan</h2>
        <p>
          Profilinize telefon numaranızı girin, siparişiniz teslim edilince
          Çekirdek kazanın.
        </p>
      </div>
    </div>
  </div>

  <!--  2 -->

  <div class="row">
    <div class="caption4">
      <h1>Mobil Uygulamamızı İndirin</h1>
      <p>
        Mobil uygulamamıza özel kampanyalardan yararlanabilmek için uygulamamızı
        indirin.
      </p>
    </div>
  </div>
 
  <!--  3 -->
<div class="row">
  <div class="col">
    <div class="row q-pa-md">
      <div class="logo1">
        <a
          href="https://play.google.com/store/apps/details?id=com.kahvedunyasi.app&hl=tr_TR&pli=1"
          class
        >
          <img src="../assets/google.png" style="height: 50px" />
        </a>
      </div>
    </div>

    <div class="row q-pa-md">
      <div class="logo2">
        <a
          href="https://apps.apple.com/us/app/kahve-d%C3%BCnyas%C4%B1-%C3%A7ekirdek-kazan/id1364478029"
          class
        >
          <img src="../assets/apple.png" style="height: 50px" />
        </a>
      </div>
    </div>

    <div class="row q-pa-md">
      <div class="logo2">
        <a
         href="https://appgallery.huawei.com/app/C100896347?sharePrepath=ag&channelId=kahvedunyasi.com&id=d6a728280c304319a0ce47af5da076ba&s=D8C73A1C75463CCAAF75F399E99817574D048927F8138F441D6BD23E242462CB&detailType=0&v="
          class
        >
          <img src="../assets/huawei.png" style="height: 50px " />
        </a>
      </div>
    </div>
  </div>

  <!--  4 -->
  <q-separator></q-separator>

  <div class="col2">
    <div class="row q-pa-md">
      <div class="qr">
          <img src="../assets/qr.png" style="height: 120px" />
      </div>
    </div>

    <div class="row q-pa-md">
      <div class="text2">
          <p>Uygulamamızı QR kod ile hemen indirin.</p>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {};
</script>

<style scoped>
.link-wrapper {
  display: block;
  text-decoration: none;
}

.caption1 {
  text-align: center;
  margin-top: 10px;
  margin-left: 150px;
}
.caption2 {
  text-align: center;
  margin-top: 10px;
}
.caption3 {
  text-align: center;
  margin-top: 10px;
  margin-right: 150px;
}

h2 {
  font-weight: bold;
  font-size: 1.7em;
  color: #333;
}

h1 {
  font-weight: bold;
  font-size: 2.7em;
  color: #333;
}

p {
  color: #666;
}

.caption4 {
  position: absolute; 
  top: 35%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  margin-top: 100px;
  text-align: center;
}

.logo1 {
  margin-top: 200px;
  margin-left: 500px;
}
.logo2 {
  margin-left: 500px;
}

.qr {
  margin-top: 200px;
  margin-left: 20px;
}
.text2 {
  margin-top: 200px;
  margin-left: 500px;
}

</style>
