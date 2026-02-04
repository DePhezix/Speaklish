// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt 3 starter",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  modules: ["@pinia/nuxt", "@nuxt/devtools", "nuxt-svgo", "@nuxt/image"],
  css: [
    "~/assets/styles/css/tailwind.css",
    "~/assets/styles/scss/main.scss",
    "~/assets/fonts/index.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  svgo: {
    defaultImport: "component",
  },
  routeRules: {
    "/": { redirect: { to: "/en", statusCode: 301 } },
  },
  image: {
    format: ["avif", "webp", "jpeg", "png"],
    provider: "ipx",
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
});
