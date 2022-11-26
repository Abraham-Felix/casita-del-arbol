<template>
    <div>
      <div class="prose mb-12">
        <h1>
          <span class="font-medium">
            <span class="font-bold">{{ title }}</span>
          </span>
        </h1>
      </div>
  
      <div class="flex flex-row justify-center flex-grow">
        <div
          class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col"
        >
          <h3>Capitulos</h3>
          <!-- All the lessons for the course listed here -->
          <div
            class="space-y-1 mb-4 flex flex-col"
            v-for="chapter in chapters"
            :key="chapter.slug"
          >
            <h4>{{ chapter.title }}</h4>
            <!-- again here we are using the $ to access the variable
                inside the elements attribute for our nuxt link -->
            <NuxtLink
              v-for="(lesson, index) in chapter.lessons"
              :key="lesson.slug"
              class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
              :to="lesson.path"
              :class="{
              'text-blue-500':
                lesson.path === $route.fullPath,
              'text-gray-600':
                lesson.path !== $route.fullPath,
            }"
            >
              <!-- the +1 makes it start the count from 1 and up 
                    this works because we are using the index in v-for
                  -->
              <span class="text-gray-500">{{ index + 1 }}.</span>
              <span>{{ lesson.title }}</span>
            </NuxtLink>
          </div>
        </div>
  
        <div class="prose p-12 bg-white rounded-md w-[65ch]">
          <!--Handling client side only errors with the error boundary method -->
          <NuxtErrorBoundary>
            <NuxtPage> </NuxtPage>
            <template #error="{ error }">
              <p>
                Oh no, something went wrong with the lesson
                <code>{{ error }}</code>
              </p>
              <p>
                <button
                  class="hover:cursor-pointer bg-gray-500 text-white font-bold py-1 px-3 rounded"
                  @click="resetError(error)"
                >
                  reset
                </button>
              </p>
            </template>
          </NuxtErrorBoundary>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // accesing all composable data from useCourse.ts that loads the courseData.js data
  const { chapters, title } = useCourse();
  // Page title static String
  useHead({
    title: "Chapters",
  });
  // Asign specific layout
  definePageMeta({
    // layout: false,
  });
  const resetError = (error) => {
    error.value = null;
  };
  </script>
  