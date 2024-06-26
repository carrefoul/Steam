// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled : true},
  
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'public/img/favicon.ico' }
      ]
    }
  },

  components: [
    {
      path: '~/componentes',
      pathPrefix: false,
    },
  ],

  modules: ["@nuxt/fonts", 'nuxt-icons', "@nuxt/ui"],
  
  routeRules: { 
    '/web/v1/**': { 
        proxy: { 
          to: "http://localhost:9300/web/v1/**"
        }, 
    } 
  },
})