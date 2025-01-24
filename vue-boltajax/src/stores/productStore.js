import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const cart= ref([])

  const fetchProducts = () => {
    axios.get('http://localhost:3000/bolt')
      .then(response => {
        products.value = response.data
      })
  }

  const addToCart = (product) => {
    let existing = cart.value.find(p => p.id === product.id)
    if (existing) {
      if(existing.store === existing.quantity){
        return
      }
      existing.quantity++
      return
    }
    product.quantity = 1
    cart.value.push(product)
  }

  return { products , cart , fetchProducts, addToCart  }
})
