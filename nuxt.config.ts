// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
        link: [
            { rel: 'icon', type: 'image/png', href: '/favicon.png' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700;900&display=swap'},
            { rel: 'stylesheet', href: 'assets/css/main.css'},            
            { rel: 'stylesheet', href: 'assets/css/responsive.css'}
            
            // <script src="https://kit.fontawesome.com/2c19e713ed.js" crossorigin="anonymous"></script>
        ],  
        script: [
            { hid: 'fontawesome', src: 'https://kit.fontawesome.com/2c19e713ed.js', defer: true }
          ]
    },        
},  
    // css: [
    //     '@/assets/css/main.css',
    //     '@/assets/css/responsive.css'
    //   ]    
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
