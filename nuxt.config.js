import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - MyFulcronGRV',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/theme.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://github.com/nuxt-community/moment-module
    '@nuxtjs/moment',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://auth.nuxtjs.org/
    '@nuxtjs/auth',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    // '@nuxt/content',
    // https://nuxtjs.org/blog/going-dark-with-nuxtjs-color-mode/
    '@nuxtjs/color-mode',
    // https://www.npmjs.com/package/@nuxtjs/robots
    '@nuxtjs/robots',
  ],

  serverMiddleware: {
    '/api': '~/api',
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseUrl:
      process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3000',
    retry: { retries: 3 },
  },

  auth: {
    resetOnError: true,
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/auth/login',
            method: 'post',
            propertyName: 'token',
          },
          user: {
            url: '/api/auth/user',
            method: 'get',
            propertyName: 'user',
          },
          logout: false,
        },
        tokenRequired: true,
        tokenType: 'Bearer',
        redirect: {
          login: '/', // User will be redirected to this path if login is required.
          home: '/dashboard', // User will be redirect to this path after login. (rewriteRedirects will rewrite this path)
          logout: '/login', // User will be redirected to this path if after logout, current route is protected.
          // callback: '/callback' // User will be redirect to this path by the identity provider after login. (Should match configured Allowed Callback URLs (or similar setting) in your app/client with the identity provider)
        },
      },
    },
    cookie: {
      options: {
        maxAge: 60 * 60 * 24 * 365,
      },
    },
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  // content: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: { icons: 'fa' },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#002d40',
          secondary: colors.teal.darken3,
          info: colors.cyan.accent2,
          warning: colors.yellow.lighten1,
          error: colors.red.darken2,
        },
      },
    },
  },

  moment: {
    locales: ['it'],
    defaultLocale: 'it',
    defaultTimezone: 'Europe/Rome',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
