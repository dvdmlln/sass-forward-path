export default defineNuxtConfig({
  modules: ['../src/module'],
  myModule: {},
  devtools: { enabled: true },
  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  additionalData: '@forward "@/assets/variables.scss";',
                  api: 'modern',
              },
          },
      },
  },
  compatibilityDate: '2024-10-09',
})