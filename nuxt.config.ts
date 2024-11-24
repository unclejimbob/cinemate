// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js",
        },
      ],
    },
  },

  runtimeConfig: {
    // Private
    accessToken: process.env.NUXT_ACCESS_TOKEN,
    apiKey: process.env.NUXT_API_KEY,

    public: {
      movieURL: process.env.NUXT_PUBLIC_MOVIE_URL,
      seriesURL: process.env.NUXT_PUBLIC_SERIES_URL,
      imageSiteURL: process.env.NUXT_PUBLIC_IMAGE_SITE_URL,
      nowPlayingURL: process.env.NUXT_PUBLIC_NOW_PLAYING_URL,
      popularMoviesURL: process.env.NUXT_PUBLIC_POPULAR_MOVIES_URL,
      popularSeriesURL: process.env.NUXT_PUBLIC_POPULAR_SERIES_URL,
      movieSearchURL: process.env.NUXT_PUBLIC_SEARCH_MOVIE_URL,
      seriesSearchURL: process.env.NUXT_PUBLIC_SEARCH_SERIES_URL,
      topRatedMoviesURL: process.env.NUXT_PUBLIC_TOP_RATED_MOVIES_URL,
      topRatedSeriesURL: process.env.NUXT_PUBLIC_TOP_RATED_SERIES_URL,
      upcomingMoviesURL: process.env.NUXT_PUBLIC_UPCOMING_MOVIES_URL,
    },
  },
});
