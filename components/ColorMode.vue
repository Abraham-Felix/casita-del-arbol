<template>
    <select class="focus:ring-inset focus:outline-none focus:ring-2 focus:ring-teal-500 dark-bg text-sm dark-text rounded-md dark-bg-hover" v-model="$colorMode.preference">
      <option value="system">Dark</option>
      <option value="light">Light</option>
    </select>
</template>
