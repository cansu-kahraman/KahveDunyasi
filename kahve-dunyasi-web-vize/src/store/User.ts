import { defineStore } from 'pinia'
import { auth, onAuthStateChanged, usersCollection } from '../services/firebase.js'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { ref } from 'vue'

export default defineStore('user', () => {
  const firstLogin = ref({ modal: false })
  const isLogged = ref({ logged: false })
  const userCart = ref({ data: [] })
  const userId = ref({ value: '' })

  const userLogin = () => {
    firstLogin.value.modal = true
  }

  const setUserStatus = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isLogged.value.logged = true
      } else {
        isLogged.value.logged = false
      }
    })
  }

  const fetchUserCart = (isLoading:any, errMessage:any) => {
    isLoading.value.state = true
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        userId.value.value = user.uid
        try {
          const fetchUserRef = await getDoc(doc(usersCollection, user.uid))

          if (fetchUserRef.exists()) {
            const cart = fetchUserRef.data().trips
            if (cart.length === 0) {
              errMessage.value.state = true
              errMessage.value.value = "there are no products in your cart"
              userCart.value.data = cart
              isLoading.value.state = false
              return
            }
            const sortedCarts = fetchUserRef.data().trips.reverse()
            userCart.value.data = sortedCarts
          }
        } catch (error) {
          errMessage.value.state = true
          isLoading.value.state = false
        }

        isLoading.value.state = false
      }
    })
  }

  const deleteUserCart = async (id:any, index:any) => {
    const userCartCpy = [...userCart.value.data]

    userCartCpy.splice(index, 1)

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          await setDoc(doc(usersCollection, user.uid), { cart: userCartCpy })
          userCart.value.data.splice(index, 1)
        } catch (error) {
          console.log(error)
        }
      }
    })
  }
  return {
    userLogin,
    firstLogin,
    setUserStatus,
    isLogged,
    fetchUserCart,
    userCart,
    userId,
    deleteUserCart
  }
})