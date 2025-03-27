import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTicTacToeStore = defineStore('tictactoe', () => {
  const games= ref([])
  const results = ref("")


  return { games, results }
})
