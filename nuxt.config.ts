// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '代理管理网',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },  // Site favicon
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
  modules: ['@element-plus/nuxt','@nuxtjs/i18n','@vant/nuxt'],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'zh',
        name: '中文简体',
        file: 'zh.json'
      }
    ],
    defaultLocale: 'zh',
    lazy: true,
    detectBrowserLanguage: false,
    langDir: 'locales/',
    strategy: 'prefix',
  },
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/index.css','~/assets/css/init.scss'],
  plugins: [
    // '~/plugins/bar/baz',
    // '~/plugins/bar/foz'
  ],
  vite: {
    // server: {
    //   proxy: {
    //     '/api': {
    //       target: 'http://localhost/test', // Your backend server
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, '')
    //     }
    //   }
    // },
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