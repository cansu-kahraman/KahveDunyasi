<template>
  <q-page class="login-page">
    <div class="background-image"></div>
    <q-container class="q-pa-md">
      <q-card class="q-ma-auto">
        <q-card-section>
          <div class="text-left" style="margin-top: 20px; margin-bottom: -30px">
            <strong
              style="
                font-family: Gotham-Medium, sans-serif;
                font-size: 29.4px;
                margin-left: 18px;
                padding: 15px;
                margin-top: 20px;
              "
            >
              Üye Girişi
            </strong>
          </div>
        </q-card-section>

        <q-card-section
          class="q-pt-lg"
          style="display: flex; justify-content: center"
        >
          <q-form @submit="login">
            <q-input
              v-model="email"
              filled
              type="email"
              placeholder="E-posta"
              dense
              class="my-custom-input"
              style="padding: 15px; width: 400px; height: 55px; font-size: 17px"
            ></q-input>

            <q-input
              v-model="password"
              filled
              type="password"
              placeholder="Şifre"
              dense
              style="padding: 15px; width: 400px; height: 55px; font-size: 16px"
            ></q-input>
            <div
              style="
                width: 304px;
                height: 78px;
                margin-left: 20px;
                margin-top: 40px;
              "
            >
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
            <q-btn
              type="submit"
              label="Giriş Yap"
              color="primary"
              dense
              block
              style="
                left: 18px;
                padding: 15px;
                width: 370px;
                height: 70px;
                top: 30px;
                background-color: #005e5c !important;
              "
            ></q-btn>
          </q-form>
        </q-card-section>

        <q-card-actions align="left" class="q-pb-lg">
          <router-link
            to=""
            class="text-primary"
            style="
              position: absolute;
              top: 185px;
              left: 23px;
              padding: 15px;
              font-size: 13px;
              color: #3596b5 !important;
              margin-top: 10px;
              margin-left: 14px;
            "
            >Parolanızı mı Unuttunuz?</router-link
          >
        </q-card-actions>

        <p
          style="
            text-align: center;
            position: absolute;
            margin-top: -170px;
            margin-left: 135px;
            font-family: Gotham-Book, sans-serif;
            font-size: 15px;
          "
        >
          Hesabınız yok mu?
        </p>

        <q-card-actions align="left" class="q-pb-lg">
          <router-link
            to=""
            class="text-primary"
            style="
              position: absolute;
              margin-top: -334px;
              left: 223px;
              padding: 15px;
              color: #3596b5 !important;
              font-family: Gotham-Book, sans-serif;
              font-size: 14px;
              margin-left: 34px;
            "
          >
            Kayıt ol</router-link
          >
        </q-card-actions>
      </q-card>
    </q-container>
  </q-page>
</template>

<script>
//import { Form as veeForm, Field, ErrorMessage } from 'vee-validate'
//import { useRouter } from 'vue-router'
//import { ref, reactive, defineEmits } from 'vue'
//import {useUserStore} from '../../store/User.js'
//import { auth, signInWithEmailAndPassword } from '/src/services/firebase.ts'

export default {
  data() {
    return {
      email: '',
      password: '',
      remember: false,
    };
  },
  methods: {
    showCaptcha() {
      grecaptcha.ready(() => {
        grecaptcha
          .execute('6LcpNSopAAAAADPuw70ItFfdC3_gMJsQBAKe4cLN', {
            action: 'submit',
          })
          .then((token) => {
            // Captcha doğrulaması başarılı, token'i kullanarak istediğiniz işlemleri yapabilirsiniz.
            console.log('Captcha doğrulandı, token:', token);
            // Örneğin, token'i sunucuya göndererek doğrulama yapabilirsiniz.
          })
          .catch((error) => {
            // Captcha doğrulaması sırasında hata oluştu
            console.error('Captcha doğrulama hatası:', error);
          });
      });
    },
  },
};



const emits = defineEmits(['updatePathRef'])

function updatePathRef() {
  emits('updatePathRef', 'register')
}

function validateEmail(value) {
  // if the field is empty
  if (!value) {
    return 'This field is required'
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value)) {
    return 'This field must be a valid email'
  }
  // All is good
  return true
}

function validatePassword(value) {
  // if the field is empty
  if (!value) {
    return 'This field is required'
  }
  const spacesRegex = /^\S*$/
  if (!spacesRegex.test(value)) return 'Cannot contain white spaces'
  // All is good
  return true
}

//handling submission
const email = ref('')
const password = ref('')

const message = reactive({
  value: '',
  type: ''
})

const isSubmitting = ref(false)
const router = useRouter()
const { userLogin } = useUserStore()

function onSubmit() {
  isSubmitting.value = true

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      // Signed in
      // ...
      isSubmitting.value = false
      userLogin()
      //Check if user has an on-going search query
      const searchQuery = JSON.parse(localStorage.getItem('searchQuery'))
      if (searchQuery) {
        message.type = 'success'
        message.value = 'Successfully Logged in, running your search query.'
        setTimeout(() => {
          router.push({ name: 'results' })
        }, 500)
      } else {
        message.type = 'success'
        message.value = 'Successfully Logged in, redirecting to home page.'
        setTimeout(() => {
          router.push('/')
        }, 500)
      }
    })
    .catch((error) => {
      const extractMsg = error.message.split('auth/')[1].split(')')[0];
      const msgNoHypthens = extractMsg.replace(/-/g, ' ');
      message.value = '${msgNoHypthens.charAt(0).toUpperCase()}${msgNoHypthens.slice(1)}'
      //console.log(${error.message.split('auth/')[1].split(')')[0]})
      message.type = 'error';
      isSubmitting.value = false;

      // ..
    })
}
</script>

<style scoped>
.login-page {
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/banner-bean-desktop.jpg');
  filter: contrast(150%);
  background-size: cover;
  z-index: -1;
  opacity: 0.6; /* İstediğiniz opaklık seviyesini ayarlayabilirsiniz */
}
.login-card {
  max-width: 1000px;
}
.q-pt-lg {
  width: 470px;
  height: 501px;
}
</style>
