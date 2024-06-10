export default defineNuxtConfig({
  css: [
      '@/assets/css/roboto.css',
      '@/assets/css/main.css'
  ],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 's7ett65hTahER1XldB9YbQtt',
        apiOptions: {
          region: '' // Set 'US" if your space is created in US region (EU default)
        }
      },
    ],
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@hypernym/nuxt-anime',
  ],
  googleFonts: {
    families: {
      'Junge': true,
      'Poppins': true
    }
  },
})
