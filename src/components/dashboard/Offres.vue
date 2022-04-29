<script setup>
import { SortAscendingIcon, DocumentTextIcon } from '@heroicons/vue/solid'

const offres = [
      {
            client: 'Offre Lézards Création',
            manager: 'Matthieu ANDRE',
            departement: 'Paul Dev',
            statut: 'Finalisée',
            date: 'Dernière modification le 25 avril 2022 à 16h31',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            client: 'Offre Lézards Création',
            manager: 'Matthieu ANDRE',
            departement: 'Paul Dev',
            statut: 'Brouillon',
            date: 'Dernière modification le 25 avril 2022 à 16h31',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            client: 'Offre Lézards Création',
            manager: 'Matthieu ANDRE',
            departement: 'Paul Dev',
            statut: 'Archivée',
            date: 'Dernière modification le 25 avril 2022 à 16h31',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            client: 'Offre Lézards Création',
            manager: 'Matthieu ANDRE',
            departement: 'Paul Dev',
            statut: 'En relecture',
            date: 'Dernière modification le 25 avril 2022 à 16h31',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            client: 'Offre Lézards Création',
            manager: 'Matthieu ANDRE',
            departement: 'Paul Dev',
            statut: 'Finalisée',
            date: 'Dernière modification le 25 avril 2022 à 16h31',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            client: 'Offre Lézards Création',
            manager: 'Matthieu ANDRE',
            departement: 'Paul Dev',
            statut: 'Brouillon',
            date: 'Dernière modification le 25 avril 2022 à 16h31',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            client: 'Offre Lézards Création',
            manager: 'Matthieu ANDRE',
            departement: 'Paul Dev',
            statut: 'Archivée',
            date: 'Dernière modification le 25 avril 2022 à 16h31',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            client: 'Offre Lézards Création',
            manager: 'Matthieu ANDRE',
            departement: 'Paul Dev',
            statut: 'En relecture',
            date: 'Dernière modification le 25 avril 2022 à 16h31',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            client: 'Offre Lézards Création',
            manager: 'Matthieu ANDRE',
            departement: 'Paul Dev',
            statut: 'Finalisée',
            date: 'Dernière modification le 25 avril 2022 à 16h31',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            client: 'Offre Lézards Création',
            manager: 'Matthieu ANDRE',
            departement: 'Paul Dev',
            statut: 'Brouillon',
            date: 'Dernière modification le 25 avril 2022 à 16h31',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            client: 'Offre Lézards Création',
            manager: 'Matthieu ANDRE',
            departement: 'Paul Dev',
            statut: 'Archivée',
            date: 'Dernière modification le 25 avril 2022 à 16h31',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            client: 'Offre Lézards Création',
            manager: 'Matthieu ANDRE',
            departement: 'Paul Dev',
            statut: 'En relecture',
            date: 'Dernière modification le 25 avril 2022 à 16h31',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            client: 'Offre Lézards Création',
            manager: 'Matthieu ANDRE',
            departement: 'Paul Dev',
            statut: 'Finalisée',
            date: 'Dernière modification le 25 avril 2022 à 16h31',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            client: 'Offre Lézards Création',
            manager: 'Matthieu ANDRE',
            departement: 'Paul Dev',
            statut: 'Brouillon',
            date: 'Dernière modification le 25 avril 2022 à 16h31',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            client: 'Offre Lézards Création',
            manager: 'Matthieu ANDRE',
            departement: 'Paul Dev',
            statut: 'Archivée',
            date: 'Dernière modification le 25 avril 2022 à 16h31',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            client: 'Offre Lézards Création',
            manager: 'Matthieu ANDRE',
            departement: 'Paul Dev',
            statut: 'En relecture',
            date: 'Dernière modification le 25 avril 2022 à 16h31',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            client: 'Offre Lézards Création',
            manager: 'Matthieu ANDRE',
            departement: 'Paul Dev',
            statut: 'Finalisée',
            date: 'Dernière modification le 25 avril 2022 à 16h31',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            client: 'Offre Lézards Création',
            manager: 'Matthieu ANDRE',
            departement: 'Paul Dev',
            statut: 'Brouillon',
            date: 'Dernière modification le 25 avril 2022 à 16h31',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            client: 'Offre Lézards Création',
            manager: 'Matthieu ANDRE',
            departement: 'Paul Dev',
            statut: 'Archivée',
            date: 'Dernière modification le 25 avril 2022 à 16h31',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
            client: 'Offre Lézards Création',
            manager: 'Matthieu ANDRE',
            departement: 'Paul Dev',
            statut: 'En relecture',
            date: 'Dernière modification le 25 avril 2022 à 16h31',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
]
</script>
<template>
      <div class="px-4 sm:px-6 lg:px-8 bg-white shadow mt-7 rounded-lg py-7">
            <div class="sm:flex sm:items-center">
                  <div class="sm:flex-auto">
                        <h1 class="text-3xl font-bold text-gray-900">Offres</h1>
                        <p class="mt-1 text-md text-gray-700">L'ensemble de vos offres est accessible de cette liste</p>
                  </div>
                  <div class="flex gap-4 mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <div class="flex rounded-md shadow-sm">
                              <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                          <DocumentTextIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <input
                                          type="search"
                                          name="search"
                                          id="search"
                                          class="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
                                          placeholder="Offre, client..." />
                              </div>
                              <button
                                    type="button"
                                    class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                    <SortAscendingIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    <span>Trier</span>
                              </button>
                        </div>
                        <button
                              type="button"
                              class="inline-flex gap-4 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                              Nouvelle offre <i class="fa-solid fa-plus"></i>
                        </button>
                  </div>
            </div>
            <div class="mt-8 flex flex-col">
                  <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                              <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg h-50vh overflow-y-auto">
                                    <table class="min-w-full divide-y divide-gray-300">
                                          <thead class="bg-gray-50">
                                                <tr>
                                                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Client</th>
                                                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Manager</th>
                                                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                                                      <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                            <span class="sr-only">Modifier</span>
                                                      </th>
                                                </tr>
                                          </thead>
                                          <tbody class="divide-y divide-gray-200 bg-white">
                                                <tr v-for="offre in offres" :key="offre.email">
                                                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                            <div class="flex items-center">
                                                                  <div class="h-10 w-10 flex-shrink-0">
                                                                        <img class="h-10 w-10 rounded-full" :src="offre.image" alt="" />
                                                                  </div>
                                                                  <div class="ml-4">
                                                                        <div class="font-medium text-gray-900">{{ offre.client }}</div>
                                                                        <div class="text-gray-500">{{ offre.date }}</div>
                                                                  </div>
                                                            </div>
                                                      </td>
                                                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                            <div class="text-gray-900">{{ offre.manager }}</div>
                                                            <div class="text-gray-500">{{ offre.departement }}</div>
                                                      </td>
                                                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                            <span
                                                                  v-if="offre.statut === 'Finalisée'"
                                                                  class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
                                                                  >{{ offre.statut }}</span
                                                            >
                                                            <span
                                                                  v-if="offre.statut === 'Brouillon'"
                                                                  class="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800"
                                                                  >{{ offre.statut }}</span
                                                            >
                                                            <span
                                                                  v-if="offre.statut === 'En relecture'"
                                                                  class="inline-flex rounded-full bg-teal-100 px-2 text-xs font-semibold leading-5 text-teal-800"
                                                                  >{{ offre.statut }}</span
                                                            >
                                                            <span v-if="offre.statut === 'Archivée'" class="inline-flex rounded-full bg-sky-100 px-2 text-xs font-semibold leading-5 text-sky-800">{{
                                                                  offre.statut
                                                            }}</span>
                                                      </td>

                                                      <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                            <a href="#" class="text-indigo-600 hover:text-indigo-900"
                                                                  >Modifier<span class="sr-only">, {{ offre.client }}</span></a
                                                            >
                                                      </td>
                                                </tr>
                                          </tbody>
                                    </table>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</template>
