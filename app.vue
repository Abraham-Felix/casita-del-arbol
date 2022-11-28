<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
  const colorMode = useColorMode()
  console.log(colorMode.preference)
</script>
