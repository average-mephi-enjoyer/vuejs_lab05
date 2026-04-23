<template>
    <div class="clicker">
        <p>Очки: {{ count }}</p>
        <button @click="increment">Кликнуть</button>
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
let count = ref(0)
function increment() { count.value += prop.amount }
</script>

<style scoped>
.clicker {
  min-width: 90px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
}
</style>