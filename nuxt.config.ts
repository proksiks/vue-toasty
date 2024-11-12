// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    baseURL: '/vue-toasty/',
  },
  srcDir: 'src/',
  dir: {
    public: 'app/public',
  },
  imports: { dirs: ['app/composables', 'app/utils'] },
})
