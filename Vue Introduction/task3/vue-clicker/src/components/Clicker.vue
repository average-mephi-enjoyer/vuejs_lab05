<template>
  <div class="clicker">
    <p>Очки: {{ count }}</p>
    <button @click="increment">
      <slot>Кликнуть</slot>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let prop = defineProps({
  amount: {
    type: Number,
    default: 1
  }
})
let emit = defineEmits(['button-clicked'])
let count = ref(0)
function increment() { 
    count.value += prop.amount
    emit('button-clicked')
}
</script>

<style scoped>
.clicker {
  min-width: 100px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
}
button {
  cursor: pointer;
}
</style>