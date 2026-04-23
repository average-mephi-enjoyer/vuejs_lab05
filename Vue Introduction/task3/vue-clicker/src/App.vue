<template>
    <div id="app">
      <h1>100 Vue Clickers</h1>
      <div></div>
      <div class="clicker-grid">
        <Clicker v-for="n in 90" :key="'def' + n" :amount="67" />
        <Clicker :key="'custom1'" :amount="52"><strong>Тык</strong></Clicker>
        <Clicker :key="'custom2'" :amount="53"><span style="font-size: 20px;">🚀</span></Clicker>
        <Clicker v-for="n in 7" :key="'extra' + n" :amount="552"><em>Нажми</em></Clicker>
        <Clicker @button-clicked="console.log('Клик!')" />
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