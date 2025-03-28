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

  const CheckIfWinner=()=>{
    const winningLines=[
      [[1, 1], [1, 2], [1, 3]],
      [[2, 1], [2, 2], [2, 3]],
      [[3, 1], [3, 2], [3, 3]],
      [[1, 1], [2, 2], [3, 3]],
      [[3, 1], [2, 2], [3, 1]],
      [[1, 1], [2, 1], [3, 1]],
      [[1, 2], [2, 2], [3, 2]],
      [[1, 3], [2, 3], [3, 3]],
    ]
    let currentLines={
      0: ['',0],
      1: ['',0],
      2: ['',0],
      3: ['',0],
      4: ['',0],
      5: ['',0],
      6: ['',0],
      7: ['',0],
    }

    for(let i=0; i<currentGame.value.length ; i++){
      for(let j=0; j<winningLines.length; j++) {
        for(let k=0; k<3; k++){
          if(currentGame.value[i][0]==winningLines[j][k] && currentGame.value[i][1]==winningLines[j][k] && (currentLines[i][0]=='' ||currentLines[i][0]==currentGame.value[i][2])){
            currentLines[j][1]++;
          }
  
        }
        if(currentLines[j][1]==3){
          return true;
        }
      }
    }
    return false;
  }

  const reset=()=>{
    games.value=[]
    currentGame.value=[]
    results.value=[]
  }

  return { games, currentGame, results, pushMark, CheckIfAlreadyMarked, reset, CheckIfWinner }
})
