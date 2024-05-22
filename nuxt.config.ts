// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled : true},

  components: [
    {
      path: '~/componentes',
      pathPrefix: false,
    },
  ],

  modules: ["@nuxt/fonts", 'nuxt-icons'],
  
  routeRules: { 
    '/web/v1/**': { 
        proxy: { 
          to: "http://localhost:9300/web/v1/**"
        }, 
    } 
  },
})