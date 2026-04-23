<template>
  <div class="clicker">
    <p>Очки: {{ count }}</p>
    <button @click="increment">Кликнуть</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let count = ref(0)

function increment() {
  count.value += 1
}
</script>

<style scoped>
.clicker {
    width: 90px;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    display: inline-block;
}
</style>