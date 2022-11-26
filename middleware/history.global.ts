// the . global on this file defines the midware as global midware

export default defineNuxtRouteMiddleware((to, from) => {
    const navigationHistory = useLocalStorage('history', []);

    navigationHistory.value.push(to.path);

    // console.log(
    //     `Navigation history: ${navigationHistory.value.join(
    //         '/n'
    //     )}`
    // );
});