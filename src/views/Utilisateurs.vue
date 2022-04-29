<script setup>
const directory = {
      A: [
            {
                  id: 1,
                  name: 'Leslie Abbott',
                  role: 'Co-Founder / CEO',
                  imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                  id: 2,
                  name: 'Hector Adams',
                  role: 'VP, Marketing',
                  imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                  id: 3,
                  name: 'Blake Alexander',
                  role: 'Account Coordinator',
                  imageUrl: 'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                  id: 4,
                  name: 'Fabricio Andrews',
                  role: 'Senior Art Director',
                  imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
      ],
      B: [
            {
                  id: 5,
                  name: 'Angela Beaver',
                  role: 'Chief Strategy Officer',
                  imageUrl: 'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                  id: 6,
                  name: 'Yvette Blanchard',
                  role: 'Studio Artist',
                  imageUrl: 'https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                  id: 7,
                  name: 'Lawrence Brooks',
                  role: 'Content Specialist',
                  imageUrl: 'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
      ],
      C: [
            {
                  id: 8,
                  name: 'Jeffrey Clark',
                  role: 'Senior Art Director',
                  imageUrl: 'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                  id: 9,
                  name: 'Kathryn Cooper',
                  role: 'Associate Creative Director',
                  imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
      ],
      E: [
            {
                  id: 10,
                  name: 'Alicia Edwards',
                  role: 'Junior Copywriter',
                  imageUrl: 'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                  id: 11,
                  name: 'Benjamin Emerson',
                  role: 'Director, Print Operations',
                  imageUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                  id: 12,
                  name: 'Jillian Erics',
                  role: 'Designer',
                  imageUrl: 'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                  id: 13,
                  name: 'Chelsea Evans',
                  role: 'Human Resources Manager',
                  imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
      ],
      G: [
            {
                  id: 14,
                  name: 'Michael Gillard',
                  role: 'Co-Founder / CTO',
                  imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                  id: 15,
                  name: 'Dries Giuessepe',
                  role: 'Manager, Business Relations',
                  imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
      ],
      M: [
            {
                  id: 16,
                  name: 'Jenny Harrison',
                  role: 'Studio Artist',
                  imageUrl: 'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                  id: 17,
                  name: 'Lindsay Hatley',
                  role: 'Front-end Developer',
                  imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                  id: 18,
                  name: 'Anna Hill',
                  role: 'Partner, Creative',
                  imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
      ],
      S: [
            {
                  id: 19,
                  name: 'Courtney Samuels',
                  role: 'Designer',
                  imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                  id: 20,
                  name: 'Tom Simpson',
                  role: 'Director, Product Development',
                  imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
      ],
      T: [
            {
                  id: 21,
                  name: 'Floyd Thompson',
                  role: 'Principal Designer',
                  imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                  id: 22,
                  name: 'Leonard Timmons',
                  role: 'Senior Designer',
                  imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                  id: 23,
                  name: 'Whitney Trudeau',
                  role: 'Copywriter',
                  imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
      ],
      W: [
            {
                  id: 24,
                  name: 'Kristin Watson',
                  role: 'VP, Human Resources',
                  imageUrl: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                  id: 25,
                  name: 'Emily Wilson',
                  role: 'VP, User Experience',
                  imageUrl: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
      ],
      Y: [
            {
                  id: 26,
                  name: 'Emma Young',
                  role: 'Senior Front-end Developer',
                  imageUrl: 'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
      ],
}
</script>
<template>
      <div class="min-h-full">
            <Navigation />
            <div class="lg:pl-64 flex flex-col">
                  <div class="w-full flex">
                        <nav class="h-screen overflow-y-auto relative shadow-lg" aria-label="Directory">
                              <div v-for="letter in Object.keys(directory)" :key="letter" class="relative">
                                    <div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                                          <h3>{{ letter }}</h3>
                                    </div>
                                    <ul role="list" class="relative z-0 divide-y divide-gray-200">
                                          <li v-for="person in directory[letter]" :key="person.id" class="bg-white">
                                                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 outline-none focus-within:bg-opacity-5 focus-within:bg-pink-600">
                                                      <div class="flex-shrink-0">
                                                            <img class="h-10 w-10 rounded-full" :src="person.imageUrl" alt="" />
                                                      </div>
                                                      <div class="flex-1 min-w-0">
                                                            <a href="#" class="focus:outline-none">
                                                                  <!-- Extend touch target to entire panel -->
                                                                  <span class="absolute inset-0" aria-hidden="true" />
                                                                  <p class="text-sm font-medium text-gray-900">
                                                                        {{ person.name }}
                                                                  </p>
                                                                  <p class="text-sm text-gray-500 truncate">
                                                                        {{ person.role }}
                                                                  </p>
                                                            </a>
                                                      </div>
                                                </div>
                                          </li>
                                    </ul>
                              </div>
                        </nav>
                        <div class="h-screen overflow-y-auto flex-auto bg-white p-12">
                              <div class="flex w-full border-b-2 items-center mb-8 pb-6">
                                    <div class="flex-shrink-0">
                                          <img
                                                class="h-12 w-12 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt="" />
                                    </div>
                                    <div class="ml-4">
                                          <h3 class="text-2xl leading-6 font-bold text-fond">Tom Cook</h3>
                                          <p class="text-sm text-gray-500">
                                                <a href="#"> @tom_cook </a>
                                          </p>
                                    </div>
                              </div>

                              <form class="space-y-8 divide-y divide-gray-200 w-8/12">
                                    <div class="space-y-8 divide-y divide-gray-200">
                                          <div>
                                                <div>
                                                      <h3 class="text-lg leading-6 font-medium text-gray-900">Profile</h3>
                                                      <p class="mt-1 text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p>
                                                </div>

                                                <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                                      <div class="sm:col-span-4">
                                                            <label for="username" class="block text-sm font-medium text-gray-700"> Username </label>
                                                            <div class="mt-1 flex rounded-md shadow-sm">
                                                                  <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                                                        workcation.com/
                                                                  </span>
                                                                  <input
                                                                        type="text"
                                                                        name="username"
                                                                        id="username"
                                                                        autocomplete="username"
                                                                        class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300" />
                                                            </div>
                                                      </div>

                                                      <div class="sm:col-span-6">
                                                            <label for="about" class="block text-sm font-medium text-gray-700"> About </label>
                                                            <div class="mt-1">
                                                                  <textarea
                                                                        id="about"
                                                                        name="about"
                                                                        rows="3"
                                                                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md" />
                                                            </div>
                                                            <p class="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
                                                      </div>

                                                      <div class="sm:col-span-6">
                                                            <label for="photo" class="block text-sm font-medium text-gray-700"> Photo </label>
                                                            <div class="mt-1 flex items-center">
                                                                  <span class="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                                                        <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                                              <path
                                                                                    d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                                        </svg>
                                                                  </span>
                                                                  <button
                                                                        type="button"
                                                                        class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                                        Change
                                                                  </button>
                                                            </div>
                                                      </div>

                                                      <div class="sm:col-span-6">
                                                            <label for="cover-photo" class="block text-sm font-medium text-gray-700"> Cover photo </label>
                                                            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                                  <div class="space-y-1 text-center">
                                                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                                              <path
                                                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                                    stroke-width="2"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round" />
                                                                        </svg>
                                                                        <div class="flex text-sm text-gray-600">
                                                                              <label
                                                                                    for="file-upload"
                                                                                    class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                                                    <span>Upload a file</span>
                                                                                    <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                                                              </label>
                                                                              <p class="pl-1">or drag and drop</p>
                                                                        </div>
                                                                        <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                          <div class="pt-8">
                                                <div>
                                                      <h3 class="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
                                                      <p class="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
                                                </div>
                                                <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                                      <div class="sm:col-span-3">
                                                            <label for="first-name" class="block text-sm font-medium text-gray-700"> First name </label>
                                                            <div class="mt-1">
                                                                  <input
                                                                        type="text"
                                                                        name="first-name"
                                                                        id="first-name"
                                                                        autocomplete="given-name"
                                                                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                                            </div>
                                                      </div>

                                                      <div class="sm:col-span-3">
                                                            <label for="last-name" class="block text-sm font-medium text-gray-700"> Last name </label>
                                                            <div class="mt-1">
                                                                  <input
                                                                        type="text"
                                                                        name="last-name"
                                                                        id="last-name"
                                                                        autocomplete="family-name"
                                                                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                                            </div>
                                                      </div>

                                                      <div class="sm:col-span-4">
                                                            <label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
                                                            <div class="mt-1">
                                                                  <input
                                                                        id="email"
                                                                        name="email"
                                                                        type="email"
                                                                        autocomplete="email"
                                                                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                                            </div>
                                                      </div>

                                                      <div class="sm:col-span-3">
                                                            <label for="country" class="block text-sm font-medium text-gray-700"> Country </label>
                                                            <div class="mt-1">
                                                                  <select
                                                                        id="country"
                                                                        name="country"
                                                                        autocomplete="country-name"
                                                                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                                                                        <option>United States</option>
                                                                        <option>Canada</option>
                                                                        <option>Mexico</option>
                                                                  </select>
                                                            </div>
                                                      </div>

                                                      <div class="sm:col-span-6">
                                                            <label for="street-address" class="block text-sm font-medium text-gray-700"> Street address </label>
                                                            <div class="mt-1">
                                                                  <input
                                                                        type="text"
                                                                        name="street-address"
                                                                        id="street-address"
                                                                        autocomplete="street-address"
                                                                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                                            </div>
                                                      </div>

                                                      <div class="sm:col-span-2">
                                                            <label for="city" class="block text-sm font-medium text-gray-700"> City </label>
                                                            <div class="mt-1">
                                                                  <input
                                                                        type="text"
                                                                        name="city"
                                                                        id="city"
                                                                        autocomplete="address-level2"
                                                                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                                            </div>
                                                      </div>

                                                      <div class="sm:col-span-2">
                                                            <label for="region" class="block text-sm font-medium text-gray-700"> State / Province </label>
                                                            <div class="mt-1">
                                                                  <input
                                                                        type="text"
                                                                        name="region"
                                                                        id="region"
                                                                        autocomplete="address-level1"
                                                                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                                            </div>
                                                      </div>

                                                      <div class="sm:col-span-2">
                                                            <label for="postal-code" class="block text-sm font-medium text-gray-700"> ZIP / Postal code </label>
                                                            <div class="mt-1">
                                                                  <input
                                                                        type="text"
                                                                        name="postal-code"
                                                                        id="postal-code"
                                                                        autocomplete="postal-code"
                                                                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                          <div class="pt-8">
                                                <div>
                                                      <h3 class="text-lg leading-6 font-medium text-gray-900">Notifications</h3>
                                                      <p class="mt-1 text-sm text-gray-500">We'll always let you know about important changes, but you pick what else you want to hear about.</p>
                                                </div>
                                                <div class="mt-6">
                                                      <fieldset>
                                                            <legend class="text-base font-medium text-gray-900">By Email</legend>
                                                            <div class="mt-4 space-y-4">
                                                                  <div class="relative flex items-start">
                                                                        <div class="flex items-center h-5">
                                                                              <input
                                                                                    id="comments"
                                                                                    name="comments"
                                                                                    type="checkbox"
                                                                                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                                                        </div>
                                                                        <div class="ml-3 text-sm">
                                                                              <label for="comments" class="font-medium text-gray-700">Comments</label>
                                                                              <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                                                        </div>
                                                                  </div>
                                                                  <div class="relative flex items-start">
                                                                        <div class="flex items-center h-5">
                                                                              <input
                                                                                    id="candidates"
                                                                                    name="candidates"
                                                                                    type="checkbox"
                                                                                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                                                        </div>
                                                                        <div class="ml-3 text-sm">
                                                                              <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                                                                              <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                                                                        </div>
                                                                  </div>
                                                                  <div class="relative flex items-start">
                                                                        <div class="flex items-center h-5">
                                                                              <input
                                                                                    id="offers"
                                                                                    name="offers"
                                                                                    type="checkbox"
                                                                                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                                                        </div>
                                                                        <div class="ml-3 text-sm">
                                                                              <label for="offers" class="font-medium text-gray-700">Offers</label>
                                                                              <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </fieldset>
                                                      <fieldset class="mt-6">
                                                            <div>
                                                                  <legend class="text-base font-medium text-gray-900">Push Notifications</legend>
                                                                  <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                                                            </div>
                                                            <div class="mt-4 space-y-4">
                                                                  <div class="flex items-center">
                                                                        <input
                                                                              id="push-everything"
                                                                              name="push-notifications"
                                                                              type="radio"
                                                                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                                                        <label for="push-everything" class="ml-3 block text-sm font-medium text-gray-700"> Everything </label>
                                                                  </div>
                                                                  <div class="flex items-center">
                                                                        <input
                                                                              id="push-email"
                                                                              name="push-notifications"
                                                                              type="radio"
                                                                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                                                        <label for="push-email" class="ml-3 block text-sm font-medium text-gray-700"> Same as email </label>
                                                                  </div>
                                                                  <div class="flex items-center">
                                                                        <input
                                                                              id="push-nothing"
                                                                              name="push-notifications"
                                                                              type="radio"
                                                                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                                                        <label for="push-nothing" class="ml-3 block text-sm font-medium text-gray-700"> No push notifications </label>
                                                                  </div>
                                                            </div>
                                                      </fieldset>
                                                </div>
                                          </div>
                                    </div>

                                    <div class="pt-5">
                                          <div class="flex justify-end">
                                                <button
                                                      type="button"
                                                      class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                      Cancel
                                                </button>
                                                <button
                                                      type="submit"
                                                      class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                      Save
                                                </button>
                                          </div>
                                    </div>
                              </form>
                        </div>
                  </div>
            </div>
      </div>
</template>
<style lang="scss" scoped></style>
