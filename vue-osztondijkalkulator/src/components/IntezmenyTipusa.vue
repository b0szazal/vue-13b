<template>
    <div>
          <label for="intezmeny">Intézmény típusa: &nbsp; &nbsp;</label><br>
          <span>Technikum: </span><input type="radio" v-model="intezmenyTipusa" id="intezmeny" value="technikum" name="tipus"><br>
          <span>Szakképző iskola: </span><input type="radio" v-model="intezmenyTipusa" id="intemeny" value="szakkepzo" name="tipus">
        </div>
</template>

<script setup>
import { ref } from 'vue';
    const intezmenyTipusa = ref("")
    const emit = defineEmits(['tipus'])

    emit('tipus', intezmenyTipusa)
</script>