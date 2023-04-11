// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        // Load a Node.js module directly (here it's a Sass file)
        // CSS file in the project
        '@/assets/css/main.css',
        // SCSS file in the project
        '@/assets/css/responsive.css'
      ]    
    // vite: {
    //     css: {
    //       preprocessorOptions: {
    //         scss: {
    //           additionalData: '@use "@/assets/main.scss" as *;'
    //         }
    //       }
    //     }
    //   }
})
