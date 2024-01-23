import { defineStore } from 'pinia'
import { doc, getDoc } from 'firebase/firestore'
import { db, collection } from '../services/firebase'
import { ref } from 'vue'
//import useFilterationStore from './ProductsFilteration.ts'

//hotels -> products

const { queryData } = useFilterationStore()

export default defineStore('products', () => {
  const productsData = ref({ data: {} })
  const isLoading = ref({ value: false })
  const errMessage = ref({
    state: false,
    value: ''
  })

  const fetchProducts = async (page = localStorage.getItem('currentPage') || 1) => {
    //clear inputs
    const searchInput = document.querySelector('#property-search') 
    if (searchInput.value) {
      searchInput.value = ''
    }

    if (queryData) queryData.search = null
/*
    const budgetBtns = document.querySelectorAll('.ranges__check')
    budgetBtns.forEach((btn) => {
      btn.checked = false
      if (queryData) queryData.budget = null
    })

    const budgetSwitch = document.querySelector('#budget-switch')
    if (budgetSwitch.checked) {
      const budgetInput = document.querySelectorAll('.budget__input')
      budgetInput.forEach((input) => {
        input.value = ''
        if (queryData) queryData.budget = null
      })
    }

    const ratingRadios = document.querySelectorAll('.rating-radio')
    ratingRadios.forEach((input) => {
      input.checked = false
      if (queryData) queryData.rate = null
    })
    
    const sort = document.querySelector('.results__view--sort')
    sort.value = ''
    if (queryData) queryData.sortBy = null
*/
    //
    isLoading.value.value = true
    errMessage.value.state = false
    const searchData = JSON.parse(localStorage.getItem('searchQuery'))
    if (searchData) {
      try {
        const productsCollection = collection(db, searchData.destinationValue)
        const productsRef = doc(productsCollection, `${searchData.destinationValue}-${page}`)
        const productsSnap = await getDoc(productsRef)

        if (productsSnap.exists()) {
            productsData.value.data = productsSnap.data()
          localStorage.setItem('currentPage', page)
          isLoading.value.value = false
        } else {
            productsData.value.data = {}
          isLoading.value.value = false
        }
      } catch (err) {
        console.log(err)
        isLoading.value.value = false
        errMessage.value.state = true
        errMessage.value.value =
          ' Failed to connect to the server please check your connection and try again'
      }
    } else {
      isLoading.value.value = false
      errMessage.value.state = true
      errMessage.value.value = ' No query detected please submit a search query to see results'
    }
  }

  return { fetchProducts, productsData, isLoading, errMessage }
})