<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUser } from '../stores/user'
import { LockClosedIcon } from '@heroicons/vue/solid'

// CONST
const router = useRouter()
const user = useUser()
const email = ref()
const password = ref()
const reponse = ref()
const trying = ref(false)
// ACTIONS
const handleLogin = (e) => {
      router.push({ name: 'dashboard' })
      // trying.value = true
      // user.connect({
      //       username: email,
      //       password,
      // })
      //       .then((res) => {
      //             trying.value = false
      //             if (!res) {
      //                   reponse.value = 'Désolé, mais les identifiants semblent incorrects'
      //             } else {
      //                   reponse.value = `Bonjour ${res.nickname} !`
      //                   router.push({ name: 'dashboard' })
      //             }
      //       })
      //       .catch((err) => {
      //             trying.value = false
      //             reponse.value = err
      //       })
}
</script>
<template>
      <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" id="connexion">
            <div class="max-w-md w-full space-y-8">
                  <div>
                        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Connectez-vous</h2>
                        <i class="fa-regular fa-spinner-third fa-spin"></i>
                        <p class="mt-2 text-center text-sm text-gray-600">
                              ou
                              {{ ' ' }}
                              <a href="#" class="font-medium text-blue-600 hover:text-pink-600 transition"> contactez-nous pour obtenir un accès </a>
                        </p>
                  </div>
                  <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
                        <input type="hidden" name="remember" value="true" />
                        <div class="rounded-md shadow-sm -space-y-px">
                              <div>
                                    <label for="email-address" class="sr-only">Email address</label>
                                    <input
                                          id="email-address"
                                          name="email"
                                          type="email"
                                          autocomplete="email"
                                          v-model="email"
                                          required
                                          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                          placeholder="Email address" />
                              </div>
                              <div>
                                    <label for="password" class="sr-only">Password</label>
                                    <input
                                          id="password"
                                          name="password"
                                          type="password"
                                          v-model="password"
                                          autocomplete="current-password"
                                          required
                                          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                          placeholder="Password" />
                              </div>
                        </div>

                        <div class="flex items-center justify-between">
                              <div class="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded" />
                                    <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Se souvenir de moi </label>
                              </div>

                              <div class="text-sm">
                                    <a href="#" class="font-medium text-blue-600 hover:text-pink-600 transition"> Mot de passe oublié ? </a>
                              </div>
                        </div>

                        <div>
                              <button
                                    type="submit"
                                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all translate-y-1 duration-300">
                                    <span v-if="!trying">Connexion</span>
                                    <span v-else>...</span>
                              </button>
                        </div>

                        <div class="reponse text-center text-black text-lg font-bold" v-if="reponse">
                              {{ reponse }}
                        </div>
                  </form>
            </div>
      </div>
</template>
<style lang="scss" scoped></style>
