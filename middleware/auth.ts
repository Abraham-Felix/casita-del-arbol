export default defineNuxtRouteMiddleware((to, from) => {
    if (to.params.chapterSlug === 'capitulo-1') {
        return;
      }
      return navigateTo('/login');
});