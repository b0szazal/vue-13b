import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTicTacToeStore = defineStore('tictactoe', () => {
  const games= ref([])
  const currentGame = ref([])
  const results = ref("")

  const pushMark=(row, column, player)=>{
    currentGame.value.push([row, column, player]);
  }

  const CheckIfAlreadyMarked = (row, column)=>{
    let isMarked = false;
    currentGame.value.forEach((element) => {
      if (element[0] === row && element[1] === column) {
        isMarked = true;
      }
    });
    return isMarked;
  }

  const reset=()=>{
    games.value=[]
    currentGame.value=[]
    results.value=[]
  }

  return { games, currentGame, results, pushMark, CheckIfAlreadyMarked, reset }
})
