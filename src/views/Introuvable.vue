<script setup></script>
<template>
      <div class="min-h-full bg-fond flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
                  <div>
                        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                        <div class="text-center uppercase text-pink-600 font-bold text-xs mt-12">Erreur 404</div>
                        <h2 class="mt-2 text-center text-5xl font-extrabold text-white">Page introuvable.</h2>
                        <p class="text-slate-400 font-base text-center py-2">Désolé, la page que vous recherchez n'a pas pu être trouvée.</p>
                        <p class="mt-4 text-center text-sm text-pink-600">
                              <router-link to="/" class="font-medium flex w-full gap-2 justify-center text-center items-center text-pink-600 hover:text-pink-500 hover:gap-3 transition-all">
                                    Retourner à l'accueil <i class="fa-regular fa-arrow-right"></i
                              ></router-link>
                        </p>
                  </div>
            </div>
      </div>
</template>
<style lang="scss" scoped></style>
