<template>
  <div>
    <div class="prose mb-12 " >
      <h1 class="text-lg">  
          <span class="font-bold dark-text light-text-1"> Cuentos Biblicos </span>        
      </h1>
    </div>
    <div class="md:flex flex-row justify-center flex-grow">
      <div class="prose md:mr-4 mb-3 p-3 md:p-8 light-bg dark-bg-1 rounded-md min-w-[15ch] md:min-w-[20ch] md:max-w-[30ch] flex flex-col">
        <!-- All the lessons for the course listed here -->
        <BlogNav/>
        <!-- <Glosario/> -->
      </div>
      <div class="prose flex flex-row flex-grow p-3 md:p-12 light-bg dark-bg-1 rounded-md shrink md:w-[65ch]">
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