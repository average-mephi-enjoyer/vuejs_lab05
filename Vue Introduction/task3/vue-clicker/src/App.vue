<template>
  <div id="app">
    <h1>100 Vue Clickers</h1>
    <div></div>
    <div class="clicker-grid">
      <Clicker v-for="n in 100" :key="n" />
    </div>
  </div>
</template>

<script setup>
import Clicker from './components/Clicker.vue'
</script>

<style>
.clicker-grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 10px;
}
</style>