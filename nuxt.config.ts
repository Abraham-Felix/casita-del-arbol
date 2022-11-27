// https://nuxt.com/docs/api/configuration/nuxt-config
// here we added the talwind and vueuse nuxt modules
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/content'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
    navigation: {
      fields: ['slug', 'fecha']
    }
  }
})
