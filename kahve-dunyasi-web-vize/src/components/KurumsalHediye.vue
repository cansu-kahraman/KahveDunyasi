<template>
    <div class="header">
      <div class="header-background"></div>
      <div class="header-content">
        <h1>Kurumsal Hediye</h1>
      </div>
    </div>
    <br />
    <br />
    <p
      class="header-description"
      style="
        text-align: center;
        color: #6c0c33;
        font-size: 24px;
        font-family: Gotham-Light;
      "
    >
      Kurumsal Hediyeler İçin Kahve Dünyası Lezzetleri Harika Bir Seçenek! <br />
      <br />
      Kurumsal firmalara özel fiyat avantajlarıyla, birbirinden farklı Kahve
      Dünyası <br />
      lezzetleri hakkında bilgi almak için çikolata kataloğumuza
       <a href="#" class="link" style="color: #3596B5;"> buradan</a>, kahve <br />
      kataloğumuza <a href="#" class="link" style="color:#3596B5 ;"> buradan</a> göz atabilirsiniz.
       Özel
      günler ve bayramlarda, <br />
      müşterilerinizi veya çalışanlarınızı mutlu edecek hediye alternatiflerini
      size <br />
      anlatabilmemiz için aşağıdaki formu doldurarak bize ulaşabilirsiniz.
    </p>
  
   
    <div class="q-flex q-pa-md my-section">
      <div
        class="q-gutter-y-md column"
        style="display: block; margin: auto; width: 546px;; height:76 ;"
      >
        <q-input
        style="width: 546px;"
          outlined
          v-model="name"
          label="İsim"
          :dense="dense"
          align-self="center"
        />
        <q-input
          outlined
          v-model="surname"
          label="Soyisim"
          :dense="dense"
          align-self="center"
        />
        <q-input
          outlined
          v-model="phone"
          label="Telefon"
          :dense="dense"
          align-self="center"
        />
        <q-input
          outlined
          v-model="email"
          label="E-posta"
          :dense="dense"
          align-self="center"
        />
        <q-input
          outlined
          v-model="companyName"
          label="Firma İsmi"
          :dense="dense"
          align-self="center"
        />
        <q-checkbox
          v-model="specialBox"
          val="teal"
          color="teal"
        >
        <strong style="font-family:Gotham-Medium, sans-serif; font-size: 13px;" > Özel kutu tasarımı istiyorum. </strong>
      </q-checkbox>
      </div>
    </div>
  
    <div class="special-request my-section" >
      <p
        class="special-request-text"
        style="
        
        margin: auto;
         max-width: 50% ;
          text-align: center;
          display : block;
  font-size : 14px;
  height : 46.8px;
  padding : 15px;
  width : 550px;
  bottom: 18px;
        padding-top: 12px;
          padding-left: 5px;
          padding-right: 5px;
          text-align: center;
          font-size: 16px;
          background-color: #f7f8f9;
          font-family: Gotham-Book, sans-serif;
          color: black !important;
          position:relative;
        "
      >
        Özel kutu tasarım isteği minimum 1.000 adet olan siparişlerde geçerlidir.
      </p>
    </div>
  
    <div class="textarea-container" style="text-align: center">
      <textarea
        class="special-request-text"
        placeholder="Mesajınızı yazın"
        id="mesaj"
        cols="58"
        rows="8"
        style="width: 546px
        height: 196px;
        "
        v-model="message"
        @input="updateCharacterCount"
      ></textarea>
    </div>
  
    <p class="character-counter">
    <a href="" style="text-decoration: none; color: black; margin-left: 390px; ">{{ remainingCharacters }} karakter kaldı</a>
  </p>
    <div
      class="checkbox-container"
      style="display: flex; align-items: center; justify-content: center"
    >
    <q-checkbox
    v-model="dataProcessingConsent"
    val="teal"
    color="teal"
    style="white-space: normal; display:flex; padding: 15px;"
    :ripple="true"
    true-value="true"
    false-value="false"
    class="bold-text"
  >
   <strong style="font-family: Gotham-Medium, sans-serif; font-size: 13px;" > Kişisel verilerimin aydınlatma metninde belirtilen işleme amaçlarıyla 
  sınırlı <br> olmak üzere yurtdışına aktarılmasına açık rızamla kabul ediyorum. </strong>
  </q-checkbox>
  
      <span
        class="checkbox-label"
        style="
          color: black;
          font-size: 16px;
          font-family: Gotham-Book, sans-serif;
          margin-bottom: 20px;
          font-weight: bold;
        "
      ></span>
    </div>
  
    <div class="special-request2 my-section">
      <p
        class="special-request2-text"
        style="
        
          text-align: center;
          width: 550px;
          height: 45px;
          margin: auto;
          margin-bottom: 15px;
        
          font-size: 16px;
          background-color: #f7f8f9;
          font-family: Gotham-Book, sans-serif;
          color: black !important;
        "
      >
        Bu sayfadaki bilgiler sizinle iletişime geçebilmek için alınmaktadır. "Kişisel <br> verilerin Korunması Kanunu Aydınlatma Metni"ni <a href="" style="color: #3596B5;">buradan </a> okuyabilirsiniz.
      </p>
    </div>
    <div style="display: flex; justify-content: center; align-items: center; margin-right: 230px;  padding-bottom: 40px;">
   
    <div style="width: 304px; height: 78px;   ">
                <iframe
                  title="reCAPTCHA"
                  width="304"
                  height="78"
                  role="presentation"
                  name="a-kr01n4ufv4sb"
                  frameborder="0"
                  scrolling="no"
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                  src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lfaz6oaAAAAAFl8-H1AKIpOuFhOvOFOaEAoJqrL&amp;co=aHR0cHM6Ly93d3cua2FodmVkdW55YXNpLmNvbTo0NDM.&amp;hl=tr&amp;v=cwQvQhsy4_nYdnSDY4u7O5_B&amp;size=normal&amp;cb=sa5g6vjzbr09"
                ></iframe>
                <textarea
                  id="g-recaptcha-response"
                  name="g-recaptcha-response"
                  class="g-recaptcha-response"
                  style="resize: none; display: none"
                ></textarea>
              </div>
            </div>
    <q-btn
      type="submit"
      label="GÖNDER"
      color="primary"
      dense
      block
      style="
      display : block;
  font-size : 14px;
      margin: auto;
         max-width: 50% ;
          text-align: center;
          display : block;
        padding: 15px;
        width: 550px;
        height: 80px;
  
        margin-bottom: 30px;
        text-align: center;
        background-color: #005e5c !important;
      "
    ></q-btn>
  </template>
  
  <script>
  export default {
    data() {
      return {
      
        specialBox: false,
        message: "",
        dataProcessingConsent: false,
        maxCharacters: 1000,
      };
    },
    computed: {
      remainingCharacters() {
        return this.maxCharacters - this.message.length;
      },
    },
    methods: {
      updateCharacterCount() {
        this.remainingCharacters = this.maxCharacters - this.message.length;
      },
    },
  };
  </script>
  
  <style lang="scss">
  .header {
    position: relative;
    width: 100%;
    height: 145px;
    color: white;
    text-align: center;
    overflow: hidden;
  }
  
    .header-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #69042d;
      opacity: 0.8;
      z-index: 1;
    }
  
    .header-content {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  
    h1 {
      font-size: 2.5em;
    }
  
    .special-request {
      margin-top: 0;
      margin-bottom: 0;
    }
    .my-section {
    margin-bottom: 20px;
  }
  
  
  
  </style>