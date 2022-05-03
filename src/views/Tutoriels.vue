<script setup>
import { useCounterStore } from '../stores/counter'
const counter = useCounterStore()
</script>
<template>
      <div class="min-h-full">
            <Navigation />
            <div class="py-10 pl-64">
                  <div class="p-6">
                        <h1 class="text-xl font-bold">Test PINIA State</h1>
                        {{ counter.counter }}
                        <button @click="counter.increment" class="py-1 px-3 bg-white shadow">Increment</button>
                  </div>
            </div>
      </div>
</template>
