<!-- This component is a .client.vue file wich
only renders on the client side and the reason is 
that we are using vue local storage to evaluate 
the progress -->
<template>
    <label
      class="rounded text-white font-bold py-2 px-4 cursor-pointer"
      :class="{
        'bg-green-500': modelValue,
        'bg-gray-500': !modelValue,
      }"
    >
      <input
        type="checkbox"
        :value="modelValue"
        @input="() => $emit('update:modelValue', !modelValue)"
        class="hidden"
      />
      {{ modelValue ? 'Leido!' : 'Marcar como leido' }}
    </label>
  </template>
  
  <script setup>
  defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
  });
  defineEmits(['update:modelValue']);
  </script>
  
  <style scoped>
  ::selection {
    display: none;
  }
  </style>