// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  app: {
    baseURL: "/lulus-murni/",
    buildAssetsDir: "assets",
  },
  vite: {
    ssr: {
      noExternal: ["form-data"],
    },
  },

  // Tambahkan preset static agar build ke static
  nitro: {
    preset: "static",
    prerender: {
      ignore: [
        "/lulus-murni/product-detail",
        "/lulus-murni/product-list",
        "/lulus-murni/checkout-page",
        "/lulus-murni/login",
        "/lulus-murni/register",
      ],
    },
  },
  alias: {
    "form-data/lib/browser.js": "form-data",
  },
});
