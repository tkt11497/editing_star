// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'EditingStar',
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },  // Site favicon
      ], 
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,viewport-fit=cover' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'white' },
      ],
      // link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }]
    }
  },
  ssr: false,
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/index.css','~/assets/css/tailwind.css','~/assets/css/init.scss'],
  plugins: [
    // '~/plugins/bar/baz',
    // '~/plugins/bar/foz'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/abstracts/variables.scss" as *;@use "~/assets/css/abstracts/mixins.scss" as *;'
        }
      }
    }
  },
  devtools: { enabled: false }
})
