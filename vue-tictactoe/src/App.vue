<template>
  <div class="container">
    <h1 class="text-center">Tic Tac Toe</h1>
    <button onclick="Reset()" class="resetButton">Reset</button>
    <div>
      <div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
    </div>
    <h2 class="text-center">Eredmények</h2>
    <div v-text="tictactoeStore.results.value">

    </div>
  </div>
</template>

<script setup>
import { useTicTacToeStore } from './stores/tictactoe';

const tictactoeStore = useTicTacToeStore();

function Reset(){
  tictactoeStore.reset();
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
  font-size: 2em;
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
