
<template>
    <div>
      <p class="mt-0 uppercase font-bold text-slate-500 mb-1">
        Capitulo {{ chapter.number }} Leccion {{ lesson.number }}
      </p>
      <h1 class="my-0">{{ lesson.title }}</h1>
      <div class="flex space-x-4 mt-2 mb-8">
        <a
          v-if="lesson.sourceUrl"
          class="font-normal text-md text-slate-500"
          :href="lesson.sourceUrl"
        >
          Download Source Code
        </a>
        <a
          v-if="lesson.downloadUrl"
          class="font-normal text-md text-slate-500"
          :href="lesson.downloadUrl"
        >
          Download Video
        </a>
      </div>
      <VideoPlayer 
        v-if="lesson.videoId" 
        :video-id="lesson.videoId"
      ></VideoPlayer>
      <p class="mb-10" >{{ lesson.text }}</p>
      <!-- client only component <ClientOnly></ClientOnly>
         allows  only to render on client side we can also
         use .client.vue in file-->

        <LessonCompleteButton 
          :model-value="isLessonComplete"
          @update:model-value="toggleComplete" 
        />

    </div>
  </template>

<script setup>
const course = useCourse();
const route = useRoute();

//route validation with page meta a specific form of route middleware
//warning this is a midware, so we conot run other midware in same pg
definePageMeta({
  middleware: [ 
      function ({ params }, from) {
      const course = useCourse();

      const chapter = course.chapters.find(
        (chapter) => chapter.slug === params.chapterSlug
      );

      if (!chapter) {
        return abortNavigation(
          createError({
          statusCode: 404,
          message: "Chatper not found",
        })
        );
      }
      
      const lesson = chapter.lessons.find(
        (lesson) => lesson.slug === params.lessonSlug
      );

      if (!lesson) {
        return abortNavigation (
          createError({
          statusCode: 404,
          message: 'Lesson not found'
        })
        );
      }
    },
    // this is our middleware coming from midware directory
    //'auth',
  ],
})

//assigning route param as the chapater slug property
const chapter = computed(() => {
  return course.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

//assigning route param as the lesson slug property
const lesson = computed(() => {
  return chapter.value.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug
  );
});

// dynamic title for pages
const title = computed(() => {
  return `${lesson.value.title} - ${course.title}`
});
useHead ({
  title,
});

//tracks state of button 
const progress = useLocalStorage('progress', [] );
//checks for current lesson progress value exists else ruturns false
const isLessonComplete = computed(() => {
  if (!progress.value[chapter.value.number - 1]) {
    return false;
  }
  if (
    !progress.value[chapter.value.number - 1][
      lesson.value.number - 1
    ]
  ) {
    return false;
  }
  return progress.value[chapter.value.number - 1][
    lesson.value.number - 1
  ];
});
const toggleComplete = () => {
  if (!progress.value[chapter.value.number - 1]) {
    progress.value[chapter.value.number - 1] = [];
  }
  progress.value[chapter.value.number - 1][
    lesson.value.number - 1
  ] = !isLessonComplete.value;
};

</script>