<template>
    <Popover class="relative">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="flex items-center justify-between border-b-2 dark-border light-border py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span class="sr-only">Casita del arbol</span>
              <img class="h-10 w-auto sm:h-12"  title="Image from freeiconspng.com" src="https://img.icons8.com/external-flaticons-flat-flat-icons/512/external-tree-house-stay-at-home-flaticons-flat-flat-icons-2.png" width="450" alt="img tree icon"  />
            </a>
          </div>
          <div class="-my-2 -mr-2 md:hidden">
            <PopoverButton class="inline-flex items-center justify-center rounded-md  p-2 ">
              <span class="sr-only">Open menu</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
          <PopoverGroup as="nav" class="hidden space-x-10 md:flex ">
            <Popover class="relative" v-slot="{ open }">
              <PopoverButton :class="[ 'group  inline-flex items-center rounded-md  text-base font-medium dark-text-hover-1 focus:ring-2 focus:ring-teal-500 ']">
                <span class="pl-3"> Contenido </span>
                <ChevronDownIcon :class="[open ? 'text-slate-200' : 'text-slate-400', 'ml-2 h-5 w-5 group-hover:text-slate-400']" aria-hidden="true" />
              </PopoverButton>
  
              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                <PopoverPanel class="absolute z-10  mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                  <div class="overflow-hidden rounded-lg  shadow-lg ring-1 ring-black ring-opacity-5">
                    <div class="relative grid gap-6 dark-bg-1 light-bg px-5 py-6 sm:gap-8 sm:p-8">
                      <a v-for="item in solutions" :key="item.name" :href="item.href" class="-m-3 flex items-start rounded-lg p-3 dark-bg-hover-1 light-bg-hover">
                        <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-teal-600" aria-hidden="true" />
                        <div class="ml-4">
                          <p class="text-base font-medium light-text ">{{ item.name }}</p>
                          <p class="mt-1 text-sm light-text-1 dark-text-1">{{ item.description }}</p>
                        </div>
                      </a>
                    </div>
                    <div class="space-y-6 light-bg-1 dark-bg px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                      <div v-for="item in callsToAction" :key="item.name" class="flow-root">
                        <a :href="item.href" class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-slate-900 hover:bg-slate-100">
                          <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-slate-400" aria-hidden="true" />
                          <span class="ml-3">{{ item.name }}</span>
                        </a>
                      </div>
                    </div>
                    <div class="light-bg-1 dark-bg px-5 py-5 sm:px-8 sm:py-8">
                      <div>
                        <h3 class="text-base font-medium light-text-1 dark-text">Art??culos recientes</h3>
                        <ul role="list" class="mt-4 space-y-4">
                          <li v-for="post in recentPosts" :key="post.id" class="truncate text-base">
                            <a :href="post.href" class="font-medium text-slate-900 hover:text-slate-700">{{ post.name }}</a>
                          </li>
                        </ul>
                      </div>
                      <div class="mt-5 text-sm">
                        <a href="/cuentos-biblicos/el-comienzo-de-las-cosas" class="font-medium text-teal-600 hover:text-teal-500">
                          Ver todos
                          <span aria-hidden="true"> &rarr;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </PopoverGroup>
          <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <!-- <a href="/login" class="whitespace-nowrap text-base font-medium light-text-1 dark-text-hover-1 light-text-hover-1">Iniciar sesion</a>
            <a href="#" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-teal-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-teal-700">Crear cuenta</a>
            -->
            <ColorMode class="ml-3"/> 
          </div>
        </div>
      </div>
  
      <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <PopoverPanel focus class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div class="divide-y-2 divide-slate-50 rounded-lg light-bg dark-bg-1 shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="px-5 pt-5 pb-6">
              <div class="flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src="https://img.icons8.com/external-flaticons-flat-flat-icons/512/external-tree-house-stay-at-home-flaticons-flat-flat-icons-2.png" alt="Your Company" />
                </div>
                <div class="-mr-2">
                  <PopoverButton class="inline-flex items-center justify-center rounded-md dark-bg-2 p-2 text-slate-400 dark-bg-hover-2 dark-text-hover-1 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-y-8">
                  <a v-for="item in solutions" :key="item.name" :href="item.href" class="-m-3 flex items-center rounded-md p-3 dark-bg-hover-1">
                    <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-teal-600" aria-hidden="true" />
                    <span class="ml-3 text-base font-medium dark-text-1 dark-text-hover-1">{{ item.name }}</span>
                  </a>
                </nav>
              </div>
            </div>
            <div class="space-y-6 py-6 px-5">
              <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                
                <!-- <a href="#" class="text-base font-medium text-slate-900 hover:text-slate-700">Blog</a> -->
                <a v-for="item in resources" :key="item.name" :href="item.href" class="text-base font-medium text-slate-900 hover:text-slate-700">{{ item.name }}</a>
              </div>
              <!-- <div>
                <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-teal-700">Crear cuenta</a>
                <p class="mt-6 text-center text-base font-medium text-slate-500">
                  Ya tienes cuenta?
                  {{ ' ' }}
                  <a href="/login" class="text-teal-600 hover:text-teal-500">Iniciar sesion</a>
                </p>
              </div> -->
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </template>
  
  <script setup>
  import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
  import {
    ArrowPathIcon,
    Bars3Icon,
    BookmarkSquareIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    LifebuoyIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    XMarkIcon,
    BookOpenIcon
  } from '@heroicons/vue/24/outline/index.js'
  import { ChevronDownIcon } from '@heroicons/vue/20/solid/index.js'

  const firstLesson = usarLeccionUno();
  
  const solutions = [
    {
      name: 'Cuentos B??blicos',
      description: 'Conoce sobre la fascinantes historias de la Biblia',
      href: '/cuentos-biblicos/el-jardin-del-eden',
      icon: BookOpenIcon,
    },
    // {
    //   name: 'Mi Escuela',
    //   description: 'Proximamente podras aprender en nuestros talleres',
    //   href: firstLesson.path,
    //   icon: BookmarkSquareIcon,
    // },
    // {
    //   name: 'Ayuda',
    //   description: 'Tienes alguna duda sobre el proyecto? contactate con soporte tecnico.',
    //   href: '#',
    //   icon: LifebuoyIcon,
    // }
  ]
  // const callsToAction = [
  //   { name: 'Contacto', href: '#', icon: PhoneIcon },
  // ]
  // const recentPosts = [
  //   { id: 1, name: 'Boost your conversion rate', href: '#' },
  //   { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  //   { id: 3, name: 'Improve your customer experience', href: '#' },
  // ]
  </script>