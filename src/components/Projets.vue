<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BadgeCheckIcon, ChevronDownIcon, ChevronRightIcon, CollectionIcon, SearchIcon, SortAscendingIcon, StarIcon } from '@heroicons/vue/solid'
import { MenuAlt1Icon, XIcon } from '@heroicons/vue/outline'

const projects = [
      {
            name: 'Workcation',
            href: '#',
            siteHref: '#',
            repoHref: '#',
            repo: 'debbielewis/workcation',
            tech: 'Laravel',
            lastDeploy: '3h ago',
            location: 'United states',
            starred: true,
            active: true,
      },
      // More projects...
]
</script>
<template>
      <!-- Projects List -->
      <div class="bg-fond px-12 py-5 h-screen overflow-y-auto">
            <h1 class="text-white text-4xl font-didoni">Dashboard</h1>
            <p class="text-slate-200 text-xs font-medium py-2">
                  Ea laudantium expedita ut sint quod et omnis voluptas et velit ipsa vel atque dolorem. Et debitis maiores aut nemo nisi aut doloribus quod qui optio tenetur.
            </p>
      </div>
</template>
