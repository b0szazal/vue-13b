<template>
  <h1>{{ cim }}</h1>
  <p> {{ 1 + 1 }} </p>
  <p> {{ "1" + 1 }} </p>
  <p> {{ true ? "igaz" : "hamis" }}</p>
  <p v-html="html"></p>
  <p v-show="latszik">Látszik vagy sem?</p>
  <button @click="latszik = !latszik">I / O</button>
  <p v-if="latszik">A "latszik" most igaz</p>
  <p v-else="latszik">A "latszik" most hamis</p>
  <ol>
    <li v-for="t in tomb"> {{ t }}</li>
  </ol>
  <ul>
    <li v-for="a, key in auto"> {{key}} : {{ a }}</li>
  </ul>
  <div>
    <label for="szoveg">Szöveg beírása:</label>
    <input type="text" v-model="bemenet" id="szoveg" placeholder="Szöveges adat bevitele">
  </div>
  <p>Ezt írtad az űrlapon: <span class="kiemelt"> {{ bemenet }} </span></p>
</template>

<!-- A "setup" kulcsszó nélkül nem fog működni az alkalmazás -->
<script setup>
  import {ref} from 'vue'

  const bemenet = ref("valami")
  const cim = ref("Az oldal címe")
  const html = ref("<span> Szöveg </span>")
  const latszik = ref(true)
  const tomb = ref(["alma", "mangó", "paradicsom", "gránátalma", "sárkánygyümölcs"])
  const auto = ref({
    "gyártó" : "Ford",
    "szín" : "kék",
    "model" : "Focus",
    "év" : "2015",
    "teljesítmény" : "85 KW"
  })
</script>

<style scoped>
  .kiemelt{
    color: red;
    font-size: 150%;
    font-weight: 700;
  }
</style>