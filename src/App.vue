<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
      <Transition name="slide-fade">
            <section>
                  <Navigation />
                  <RouterView />
            </section>
      </Transition>
</template>

<style lang="scss">
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
      transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
      transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
      transform: translate3d(0, -30px, 0);
      opacity: 0;
}
</style>
