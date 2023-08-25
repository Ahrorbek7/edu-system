
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default {
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon','vue3-carousel-nuxt', 'vue3-carousel-nuxt'],
  carousel: {
    prefix: 'MyPrefix'
  },
  css:[
    "bootstrap-icons/font/bootstrap-icons.css"
  ],
  server: {
    debug: true
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    public: {
      github: {
        clientId: process.env.NUXT_PUBLIC_GITHUB_CLIENT_ID
      },
      issues: {
        sseUrl: process.env.NUXT_PUBLIC_ISSUES_SSE_URL
      }
    },
    github: {
      clientSecret: process.env.NUXT_GITHUB_CLIENT_SECRET
    }
  }
}
