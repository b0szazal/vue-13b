<template>
  <div class="container">
    <h1 class="text-center">Tic Tac Toe</h1>
    <button @click="reset()" class="resetButton">Reset</button>
    <div>
      <div>
        <div class="box" @click="markBox(1,1)" v-text="board[0][0]"></div>
        <div class="box" @click="markBox(1,2)" v-text="board[0][1]"></div>
        <div class="box" @click="markBox(1,3)" v-text="board[0][2]"></div>
      </div>
      <div>
        <div class="box" @click="markBox(2,1)" v-text="board[1][0]"></div>
        <div class="box" @click="markBox(2,2)" v-text="board[1][1]"></div>
        <div class="box" @click="markBox(2,3)" v-text="board[1][2]"></div>
      </div>
      <div>
        <div class="box" @click="markBox(3,1)" v-text="board[2][0]"></div>
        <div class="box" @click="markBox(3,2)" v-text="board[2][1]"></div>
        <div class="box" @click="markBox(3,3)" v-text="board[2][2]"></div>
      </div>
    </div>
    <h2 class="text-center">Eredmények</h2>
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
}

const markBox=(row, column)=>{
  if(!tictactoeStore.CheckIfAlreadyMarked(row, column)){
    tictactoeStore.pushMark(row, column, currentPlayer.value);
    board.value[row-1][column-1]=currentPlayer.value;
    currentPlayer.value = currentPlayer.value=='X' ? 'O' : 'X';
  }
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
  display: inline-block;
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
</style>
