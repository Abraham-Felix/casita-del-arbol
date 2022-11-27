<template>
    <div>
    <h3>Glosario</h3>
    <div v-for="obj in data" :key="obj.title">
      {{obj._path}}
      <NuxtLink 
      class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
      :key="toc.id"
      v-for="toc in obj.body.toc.links"
      :to="`#${toc.id}`"
      :class="{
              'text-teal-500':
              `#` + toc.id === $route.hash,
              'text-slate-600':
              `#` + toc.id !== $route.hash,
            }"
      >
       <li>{{toc.text}}</li>
      </NuxtLink >
  </div>
  </div>
</template>

<script setup>
const route = useRoute();

  const { data } = await useAsyncData(
    'hello', () => queryContent('/blog/').find(
      (data) => data._rawValue._path === "/blog/" + route.params.slug
    )
    )
    //console.log(data._rawValue[0]._path)
    //console.log("/blog/" + route.params.slug[0])

    // const chapter = course.chapters.find(
    //     (chapter) => chapter.slug === params.chapterSlug
    //   );

</script>