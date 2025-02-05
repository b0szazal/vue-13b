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
      if(product.store === existing.quantity){
        return
      }
      existing.quantity++
      return
    }
    cart.value.push({
      id: product.id,
      quantity: 1,
    })
  }

  const removeOneFromCart = (id)=>{
    let existing = cart.value.find(p => p.id === id)
    if (existing) {
      existing.quantity--
      if(existing.quantity === 0){
        cart.value = cart.value.filter(p => p.id !== id)
      }
    }
  }

  const order = ()=>{
    if(cart.value.length === 0){
      return
    }
    axios.post('http://localhost:3000/orders', cart.value)
      .then(res => {
        for (let i = 0; i < cart.value.length; i++) {
          let existing = products.value.find(p => p.id === cart.value[i].id)
          if (existing) {
            existing.store -= cart.value[i].quantity
            if(existing.store == 0){
              products.value = products.value.filter(p => p.id !== existing.id)
            }
          }
        }
        cart.value = []
      })
  }

  const addProduct=(object)=>{
    object.id = products.value.length.toString()
    axios.post('http://localhost:3000/bolt', object)
    .then(res => {
      products.value=fetchProducts()
    })
  }

  return { products , cart , fetchProducts, addToCart, removeOneFromCart, order, addProduct}
})
