<template>
  <div>
    <div class=" mb-12 " >
      <h1 class="text-lg">  
          <span class="font-bold dark-text light-text-1"> Cuentos Biblicos </span>        
      </h1>
    </div>
    <div class="flex flex-row justify-center flex-grow">
      <div class="prose mr-4 p-8 light-bg dark-bg-1 rounded-md min-w-[20ch] max-w-[30ch] flex flex-col">
        <!-- All the lessons for the course listed here -->
        <BlogNav/>
        <!-- <Glosario/> -->
      </div>
      <div class="prose p-12 light-bg dark-bg-1 rounded-md w-[65ch]">
        <ContentDoc class="articles-content " />
      </div>
    </div>
  </div>
</template>
    
    <style>
      .articles-content h1 {
        font-weight: bold;
        font-size: 28px;
        padding-bottom: 1em;
      }
      .articles-content h2 {
        font-weight: bold;
        font-size: 22px;
        color: teal;
      }
      .articles-content h3 {
        font-weight: bold;
        font-size: 18px;
      }
      .articles-content p {
        margin-bottom: 20px;
      }
    </style>