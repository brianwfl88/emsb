// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'normalize.css',
    '@fortawesome/fontawesome-free/css/all.css',
    '@/assets/font.scss',
    '@/assets/app.scss',
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon/favicon.ico' },
      ],
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: './client',
})
