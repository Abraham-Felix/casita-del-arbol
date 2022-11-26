

<template>
    <!-- We can access variables in the attrubutes as url 
         using the js dollar sign $ and we can use a prop 
         to access the data and define the data source as
         shown below in the script, remember the data source
         is auto imported from composables, we can access it 
         using the data property name such as videoID in this case. 
    -->
    <div>
    <iframe
      class="sm:w-full"
      width="auto"
      height="315"
      :src="`https://player.vimeo.com/video/${props.videoId}`"
      title="Video Player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      >
    </iframe>
    </div>
  </template>
  
  <script setup>
    const props = defineProps({
      videoId: {
        type: Number,
        required: true,
      },
    })
  </script>