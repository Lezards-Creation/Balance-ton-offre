import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCounterStore = defineStore('counter', {
      // arrow function recommended for full type inference
      state: () => ({
            counter: 0,
      }),
      actions: {
            increment() {
                  this.counter++
            },
      },
})

if (import.meta.hot) {
      import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}
