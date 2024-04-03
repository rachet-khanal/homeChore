// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/ionic",
    // https://pinia.vuejs.org/ssr/nuxt.html
    '@pinia/nuxt',
    // https://nuxt.com/modules/pinia-plugin-persistedstate
    '@pinia-plugin-persistedstate/nuxt',
    // https://tailwindcss.nuxtjs.org/getting-started/installation
    '@nuxtjs/tailwindcss',
  ],
  ssr: false,
  pwa: {
    // https://nuxt.com/modules/vite-pwa-nuxt
    meta: {
      title: "Home Chore Application",
      author: "Rachet",
    },
    manifest: {
      name: "Home Chore",
      short_name: "Home Chore",
      lang: "en",
      description:
        "Home Chore, shows and notifies the chore needed to be done.",
    },
  },
  runtimeConfig: {
    public:{
      firebase: {
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
      }
    }
  },
  ionic: {
    // https://ionic.nuxtjs.org/get-started/configuration
    integrations: {
      //
    },
    css: {
      //
    },
    config: {
      //
    }
  },
});
