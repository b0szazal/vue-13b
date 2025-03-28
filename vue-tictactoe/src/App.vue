<template>
  <div class="container">
    <h1 class="text-center">Tic Tac Toe</h1>
    <h3 class="text-center">Player to move:  {{ currentPlayer }}</h3>
    <button @click="reset()" class="resetButton">Reset</button>
    <div>
      <div class="row">
        <div class="box" @click="markBox(1,1)" v-text="board[0][0]"></div>
        <div class="box" @click="markBox(1,2)" v-text="board[0][1]"></div>
        <div class="box" @click="markBox(1,3)" v-text="board[0][2]"></div>
      </div>
      <div class="row">
        <div class="box" @click="markBox(2,1)" v-text="board[1][0]"></div>
        <div class="box" @click="markBox(2,2)" v-text="board[1][1]"></div>
        <div class="box" @click="markBox(2,3)" v-text="board[1][2]"></div>
      </div>
      <div class="row">
        <div class="box" @click="markBox(3,1)" v-text="board[2][0]"></div>
        <div class="box" @click="markBox(3,2)" v-text="board[2][1]"></div>
        <div class="box" @click="markBox(3,3)" v-text="board[2][2]"></div>
      </div>
    </div>
    <h2 class="text-center">Results</h2>
    <div v-text="tictactoeStore.results.value">

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTicTacToeStore } from './stores/tictactoe';

const tictactoeStore = useTicTacToeStore();
const currentPlayer = ref('X');
const board=ref([['', '', ''], ['', '', ''], ['', '', '']])

const reset=()=>{
  tictactoeStore.reset();
  board.value=[['', '', ''], ['', '', ''], ['', '', '']]
  currentPlayer.value = 'X';
}

const markBox=(row, column)=>{
  if(!tictactoeStore.CheckIfAlreadyMarked(row, column)){
    tictactoeStore.pushMark(row, column, currentPlayer.value);
    board.value[row-1][column-1]=currentPlayer.value;
    AddToLine(row, column);
    if(CheckIfWinner(row, column)){
      alert(currentPlayer.value+" won");
    }
    currentPlayer.value = currentPlayer.value=='X' ? 'O' : 'X';
  }
}

const lines={
  1: [[1,1], [1,2], [1,3]],
  2: [[2,1], [2,2], [2,3]],
  3: [[3,1], [3,2], [3,3]],
  4: [[1,1], [2,1], [3,1]],
  5: [[1,2], [2,2], [3,2]],
  6: [[1,3], [2,3], [3,3]],
  7: [[1,1], [2,2], [3,3]],
  8: [[1,3], [2,2], [3,1]]
}

const currentLines=ref({
  1: ['', 0],
  2: ['', 0],
  3: ['', 0],
  4: ['', 0],
  5: ['', 0],  
  6: ['', 0],
  7: ['', 0],
  8: ['', 0]
});
const AddToLine = (row, column)=>{
  for(let i=1; i<=8; i++){
    if(lines[i].contains([row, column])){
      if(currentLines.value[i][0]==currentPlayer.value || currentLines.value[i][0]==''){
        currentLines.value[i][1]= currentLines.value[i][1]+1 ||1;
      }
    }
  }
}

const CheckIfWinner=(row, column)=>{
  let player=currentPlayer.value;
  let line=lines[row*3+column];
  for(let i=0; i<line.length; i++){
    let [r, c]=line[i];
    if(board.value[r-1][c-1]!=player){
      return false;
    }
  }
  return true;
}
</script>

<style scoped>
.container{
  max-width: 75vw;
  width: fit-content;
  padding: 25px;
  margin: auto;
  height: 100vh;
  background-color: #f5f5f5;
}
.box{
  width: 100px;
  height: 100px;
  border: 1px solid black;
   margin: 5px;
  text-align: center;
  line-height: 100px;
  font-size: 5em;
  cursor: pointer;
}
.resetButton{
  display: block;
  margin:  auto;
  padding: 15px;
  border-radius: 15px;
}
.text-center{
  text-align: center;
}
.row{
  display: flex;
  flex-direction: row;
}
</style>
