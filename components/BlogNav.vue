<template>
    <span v-for="blog in navigation" :key="blog._path">
      <h3 class="text-lg mb-1 light-text-1">Lecciones</h3>
     <NuxtLink 
     v-for="(link, index ) in blog.children" 
     :key="link._path" 
     :to="link._path"
     class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
     >
        <ol class="pl-1"> 
        <li>
          <span class="light-text-1 ">
            {{ index + 1 }}. {{ link.title }}
          </span>
        </li> 
      </ol>
     </NuxtLink>

    </span>
  </template>

<script setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation('cuentos-biblicos'))

console.log(navigation)
</script>
