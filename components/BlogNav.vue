<template>
    <span v-for="blog in navigation" :key="blog._path">
      <h3>{{blog.title}}</h3>
     <NuxtLink 
     v-for="(link, index ) in blog.children" 
     :key="link._path" 
     :to="link._path"
     class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
     >
           <ol> 
            <li>
              <span class="text-slate-500">{{ index + 1 }}.</span> {{ link.title }}
            </li> 
          </ol>
     </NuxtLink>

    </span>
  </template>

<script setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation('cuentos-biblicos'))

console.log(navigation)
</script>
