// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
    css: ['~/main.css'],
   postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // Tambahkan base URL agar cocok dengan GitHub Pages
  app: {
    baseURL: '/lulus-murni/',
        buildAssetsDir: 'assets' // Ganti <nama-repo> dengan nama repositori GitHub kamu
  },

  // Tambahkan preset static agar build ke static
  nitro: {
    preset: 'static'
  }
})
