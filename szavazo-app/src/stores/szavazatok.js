import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useSzavazoStore = defineStore('szavazatok', () => {
  const temak = ref([])
  const opciok = ref([])
  
  const loadTemak = () => {
    axios.get('http://localhost:3000/temak')
    .then(resp => temak.value = resp.data)
  }
  const loadOpciok = (id) => {
    axios.get('http://localhost:3000/opciok')
    .then(resp => opciok.value = resp.data.filter(o => o.temaId == id))
  }

  return { temak, opciok, loadTemak, loadOpciok }
})
