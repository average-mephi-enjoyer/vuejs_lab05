<template>
    <div id="app">
      <h1>100 Vue Clickers</h1>
      <div></div>
      <div class="clicker-grid">
        <Clicker v-for="n in 90" :key="'def' + n" :amount="52" @button-clicked="handleClick(n)" />
        <Clicker :key="'custom1'" :amount="67" @button-clicked="handleClick(91)"><strong>Тык</strong></Clicker>
        <Clicker :key="'custom2'" :amount="52" @button-clicked="handleClick(92)"><span style="font-size: 20px;">🚀</span></Clicker>
        <Clicker v-for="k in 8" :key="'extra' + k + 92" :amount="552" @button-clicked="handleClick(k+92)"><em>Нажми</em> </Clicker>
      </div>
    </div>
</template>

<script setup>
import Clicker from './components/Clicker.vue'
function handleClick(n) {
  alert(`Clicker ${n} clicked!`)
}
</script>

<style>
.clicker-grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 10px;
}
</style>