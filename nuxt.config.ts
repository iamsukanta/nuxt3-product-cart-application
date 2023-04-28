// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Nuxt 3 product list',
      meta: [
        {name:'description', content: 'Nuxt 3 product list content description.'}
      ],
      link: [
        {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"}
      ]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  }
})

