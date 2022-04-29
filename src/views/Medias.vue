<template>
      <div class="min-h-full">
            <Navigation />
            <div class="lg:pl-64 h-full flex">
                  <div class="flex-1 flex items-stretch overflow-hidden">
                        <main class="flex-1 overflow-y-auto">
                              <div class="pt-8 max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
                                    <div class="flex">
                                          <h1 class="flex-1 text-3xl font-bold text-fond">Photos</h1>
                                          <div class="ml-6 bg-gray-100 p-0.5 rounded-lg flex items-center sm:hidden">
                                                <button
                                                      type="button"
                                                      class="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                      <ViewListIcon class="h-5 w-5" aria-hidden="true" />
                                                      <span class="sr-only">Use list view</span>
                                                </button>
                                                <button
                                                      type="button"
                                                      class="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                      <ViewGridIconSolid class="h-5 w-5" aria-hidden="true" />
                                                      <span class="sr-only">Use grid view</span>
                                                </button>
                                          </div>
                                    </div>

                                    <!-- Gallery -->
                                    <section class="mt-8 pb-16" aria-labelledby="gallery-heading">
                                          <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-4 2xl:grid-cols-5 xl:gap-x-8">
                                                <li v-for="(file, index) in files" :key="`photo${index}`" class="relative" @click="selectFile(file)">
                                                      <div
                                                            :class="[
                                                                  file.current ? 'ring-2 ring-offset-2 ring-pink-600 shadow-lg shadow-red-200' : '',
                                                                  'group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden transition-all',
                                                            ]">
                                                            <img :src="file.source" alt="" :class="[file.current ? '' : 'group-hover:opacity-75', 'object-cover pointer-events-none']" />
                                                      </div>
                                                      <p class="mt-3 block text-sm font-bold text-gray-900 truncate pointer-events-none">{{ file.name }}</p>
                                                      <p class="block text-xs font-medium text-gray-500 pointer-events-none">{{ file.size }}</p>
                                                </li>
                                          </ul>
                                    </section>
                              </div>
                        </main>

                        <!-- Details sidebar -->
                        <aside
                              :class="[
                                    selected_file.value ? 'mr-0 shadow-lg' : '-mr-96',
                                    'block w-96 bg-white p-8 border-l border-gray-200 overflow-y-auto h-screen transition-all duration-300 ease-out',
                              ]">
                              <div class="pb-16 space-y-6" v-if="selected_file.value">
                                    <div>
                                          <div class="block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                                                <img :src="selected_file.value.source" alt="" class="object-cover" />
                                          </div>
                                          <div class="mt-4 flex items-start justify-between">
                                                <div>
                                                      <h2 class="text-lg font-medium text-gray-900"><span class="sr-only">Details for </span>{{ selected_file.value.name }}</h2>
                                                      <p class="text-sm font-medium text-gray-500">{{ selected_file.value.size }}</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div>
                                          <h3 class="font-medium text-gray-900">Information</h3>
                                          <dl class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                                                <div v-for="key in Object.keys(selected_file.value.information)" :key="key" class="py-2 flex justify-between items-center text-sm font-medium">
                                                      <dt class="text-gray-500 text-xs">{{ key }}</dt>
                                                      <dd class="text-gray-900">{{ selected_file.value.information[key] }}</dd>
                                                </div>
                                          </dl>
                                    </div>
                                    <div>
                                          <h3 class="font-medium text-gray-900">Description</h3>
                                          <div class="mt-2 flex items-center justify-between">
                                                <p class="text-sm text-gray-500 italic">Ajouter un description à l'image</p>
                                                <button
                                                      type="button"
                                                      class="bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                                      <PencilIcon class="h-5 w-5" aria-hidden="true" />
                                                </button>
                                          </div>
                                    </div>

                                    <div class="flex">
                                          <button
                                                type="button"
                                                class="flex-1 bg-indigo-600 hover:bg-pink-600 hover:ring-2 hover:ring-offset-2 hover:ring-pink-600 transition-all duration-300 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Télécharger
                                          </button>
                                          <button
                                                type="button"
                                                class="flex-1 ml-3 bg-white hover:bg-red-600 hover:ring-2 hover:ring-offset-2 hover:ring-red-600 hover:text-white hover:shadow-lg hover:border-red-600 hover:shadow-red-100 transition-all duration-300 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Supprimer
                                          </button>
                                    </div>
                              </div>
                        </aside>
                  </div>
            </div>
      </div>
</template>
<script setup>
import { Dialog, DialogOverlay, Menu, MenuButton, MenuItem, MenuItems, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {
      CogIcon,
      CollectionIcon,
      HeartIcon,
      HomeIcon,
      MenuAlt2Icon,
      PhotographIcon,
      PlusSmIcon as PlusSmIconOutline,
      UserGroupIcon,
      ViewGridIcon as ViewGridIconOutline,
      XIcon,
} from '@heroicons/vue/outline'
import { PencilIcon, PlusSmIcon as PlusSmIconSolid, SearchIcon, ViewGridIcon as ViewGridIconSolid, ViewListIcon } from '@heroicons/vue/solid'
import { ref, computed } from 'vue'
const navigation = [
      { name: 'Home', href: '#', icon: HomeIcon, current: false },
      { name: 'All Files', href: '#', icon: ViewGridIconOutline, current: false },
      { name: 'Photos', href: '#', icon: PhotographIcon, current: true },
      { name: 'Shared', href: '#', icon: UserGroupIcon, current: false },
      { name: 'Albums', href: '#', icon: CollectionIcon, current: false },
      { name: 'Settings', href: '#', icon: CogIcon, current: false },
]
const userNavigation = [
      { name: 'Your profile', href: '#' },
      { name: 'Sign out', href: '#' },
]
const tabs = [
      { name: 'Recently Viewed', href: '#', current: true },
      { name: 'Recently Added', href: '#', current: false },
      { name: 'Favorited', href: '#', current: false },
]
const files = ref([
      {
            name: 'IMG_4985.HEIC',
            size: '3.9 MB',
            source: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
            current: false,
            information: {
                  'Uploaded by': 'Marie Culver',
                  Created: 'June 8, 2020',
                  'Last modified': 'June 8, 2020',
                  Dimensions: '4032 x 3024',
                  Resolution: '72 x 72',
            },
      },
      {
            name: 'IMG_4985.HEIC',
            size: '3.9 MB',
            source: 'https://images.unsplash.com/photo-1648737965955-735637020c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
            current: false,
            information: {
                  'Uploaded by': 'Marie Culver',
                  Created: 'June 8, 2020',
                  'Last modified': 'June 8, 2020',
                  Dimensions: '4032 x 3024',
                  Resolution: '72 x 72',
            },
      },
      {
            name: 'IMG_4985.HEIC',
            size: '3.9 MB',
            source: 'https://images.unsplash.com/photo-1650542914986-30a677e3414a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            current: false,
            information: {
                  'Uploaded by': 'Marie Culver',
                  Created: 'June 8, 2020',
                  'Last modified': 'June 8, 2020',
                  Dimensions: '4032 x 3024',
                  Resolution: '72 x 72',
            },
      },
      {
            name: 'IMG_4985.HEIC',
            size: '3.9 MB',
            source: 'https://images.unsplash.com/photo-1651084969294-03a2b0c02c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            current: false,
            information: {
                  'Uploaded by': 'Marie Culver',
                  Created: 'June 8, 2020',
                  'Last modified': 'June 8, 2020',
                  Dimensions: '4032 x 3024',
                  Resolution: '72 x 72',
            },
      },
      {
            name: 'IMG_4985.HEIC',
            size: '3.9 MB',
            source: 'https://images.unsplash.com/photo-1651084481456-5e88727b167f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            current: false,
            information: {
                  'Uploaded by': 'Marie Culver',
                  Created: 'June 8, 2020',
                  'Last modified': 'June 8, 2020',
                  Dimensions: '4032 x 3024',
                  Resolution: '72 x 72',
            },
      },
      {
            name: 'IMG_4985.HEIC',
            size: '3.9 MB',
            source: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
            current: false,
            information: {
                  'Uploaded by': 'Marie Culver',
                  Created: 'June 8, 2020',
                  'Last modified': 'June 8, 2020',
                  Dimensions: '4032 x 3024',
                  Resolution: '72 x 72',
            },
      },
      {
            name: 'IMG_4985.HEIC',
            size: '3.9 MB',
            source: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
            current: false,
            information: {
                  'Uploaded by': 'Marie Culver',
                  Created: 'June 8, 2020',
                  'Last modified': 'June 8, 2020',
                  Dimensions: '4032 x 3024',
                  Resolution: '72 x 72',
            },
      },
])
const selected_file = computed(() => ref(files.value.find((el) => el.current === true)))
const selectFile = (file) => {
      files.value.forEach((el) => {
            if (el.current === true && el != file) {
                  el.current = false
            }
      })
      file.current = !file.current
}
</script>

<style lang="scss" scoped></style>
