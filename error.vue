<template>
    <NuxtLayout>
        <div class="prose"> 
          <h1>Dang</h1>
          <p>It looks like something broke.</p>
          <p>Sorry about that.</p>
          <p>
            <strong>{{ error.message }}</strong>
          </p>
          <p>
            Got to the 
            <a
              class="hover:cursor-pointer"
              @click="handleError"
            >
                first lesson
            </a>
          </p>
        </div>
    </NuxtLayout>
</template>

<script setup>
//handling server side error with userError and clearError
  const error = useError();
  const handleError = () => {
    clearError({
        redirect:
          '/course/chapter/capitulo-1/lesson/1-el-comienzo'
    });
  };
</script> 