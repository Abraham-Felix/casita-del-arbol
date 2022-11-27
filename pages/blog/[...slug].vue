<template>
  <div>
      <div class="prose mb-12">
        <h1 class="text-lg">  
            <span class="font-bold text-slate-500 "> Blog </span>        
        </h1>
      </div>
  <div class="flex flex-row justify-center flex-grow">
        <div
          class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col"
        >
          <h3>Articulos</h3>
          <!-- All the lessons for the course listed here -->
          <div>
             <BlogNav/>
          </div>
          <div>
             <!-- <Glosario/> -->
          </div>
        </div>
        <div class="prose p-12 bg-white rounded-md w-[65ch]">
          <ContentDoc class="articles-content" />
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
      color: slategray !important;
    }
  </style>