<template>
    <img src="https://img.icons8.com/clouds/512/deciduous-tree.png"/>
    <NuxtLink 
      class="underline font-medium" 
      :href="firstLesson.path"
    >
      Cuentos Bíblicos
    </NuxtLink>
    relatos biblicos
  </template>
  
  <script setup lang="ts">
    const firstLesson = usarLeccionUno();
  </script>