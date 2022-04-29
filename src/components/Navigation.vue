<script setup>
import { Dialog, DialogOverlay, Menu, MenuButton, MenuItem, MenuItems, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ClockIcon, HomeIcon, MenuAlt1Icon, PhotographIcon, UserIcon, XIcon, AcademicCapIcon } from '@heroicons/vue/outline'
import { useRoute } from 'vue-router'

const route = useRoute()

const navigation = [
      { name: 'Dashboard', href: '/', icon: HomeIcon, current: route.path === '/' },
      { name: 'Utilisateurs', href: '/utilisateurs', icon: UserIcon, current: route.path === '/utilisateurs' },
      { name: 'Médias', href: '/medias', icon: PhotographIcon, current: route.path === '/medias' },
      { name: 'Tutoriels', href: '/tutoriels', icon: AcademicCapIcon, current: route.path === '/tutoriels' },
]

const secondaryNavigation = [
      { name: 'Support', href: '#' },
      { name: 'Confidentialité', href: '#' },
      { name: 'Mentions légales', href: '#' },
      { name: 'Versions', href: '#' },
]
</script>
<template>
      <!-- Static sidebar for desktop -->
      <div class="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-fond text-slate-100">
            <div class="flex items-center flex-shrink-0 px-6">
                  <img class="h-8 w-auto brightness-200" src="https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg" alt="Workflow" />
            </div>
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div class="mt-6 h-0 flex-1 flex flex-col justify-between overflow-y-auto">
                  <div class="block">
                        <Menu as="div" class="px-3 mt-3 relative w-full block text-left">
                              <router-link to="/utilisateur/1">
                                    <MenuButton class="group w-full rounded-md px-3.5 py-2 text-sm text-left font-medium text-white focus:outline-none hover:bg-pink-700">
                                          <span class="flex w-full justify-between items-center">
                                                <span class="flex min-w-0 items-center justify-between space-x-3">
                                                      <img class="w-10 h-10 rounded-full flex-shrink-0" src="https://lezardscreation.com/signatures/matthieu.png" alt="" />
                                                      <span class="flex-1 flex flex-col min-w-0">
                                                            <span class="text-slate-100 text-sm font-medium truncate">Matthieu ANDRE</span>
                                                            <span class="text-slate-300 text-sm truncate">@matthieu</span>
                                                      </span>
                                                </span>
                                                <SelectorIcon class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                          </span>
                                    </MenuButton>
                              </router-link>
                        </Menu>
                        <!-- Navigation -->
                        <nav class="px-3 mt-20">
                              <div class="space-y-1">
                                    <a
                                          v-for="item in navigation"
                                          :key="item.name"
                                          :href="item.href"
                                          :class="[
                                                item.current ? 'text-pink-600' : 'text-slate-200 hover:text-white',
                                                'group flex items-center px-2 py-2 text-base font-medium rounded-md transition hover:translate-x-1',
                                          ]"
                                          :aria-current="item.current ? 'page' : undefined">
                                          <component
                                                :is="item.icon"
                                                :class="[item.current ? 'text-pink-600' : 'text-slate-200 group-hover:text-white', 'mr-2 flex-shrink-0 h-6 w-6']"
                                                aria-hidden="true" />
                                          {{ item.name }}
                                    </a>
                              </div>
                        </nav>
                  </div>

                  <div class="mt-8 p-3">
                        <h3 class="px-3 mb-3 text-xs font-bold text-pink-600 uppercase tracking-normal" id="projects-headline">A propos</h3>
                        <div class="mt-1 space-y-1" aria-labelledby="projects-headline">
                              <a
                                    v-for="item in secondaryNavigation"
                                    :key="item.name"
                                    :href="item.href"
                                    class="group flex items-center px-3 py-1 text-xs font-medium text-slate-200 rounded-md hover:text-white hover:translate-x-1 duration-200 transition">
                                    <span class="truncate">
                                          {{ item.name }}
                                    </span>
                              </a>
                        </div>
                        <div class="mt-3 px-3">
                              <p class="text-xs text-slate-500 italic tracking-tight">Créé par Lézards Création</p>
                        </div>
                  </div>
            </div>
      </div>
</template>
