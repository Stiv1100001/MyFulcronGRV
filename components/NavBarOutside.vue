<template>
  <div>
    <v-app-bar fixed dense app color="primary" dark elevate-on-scroll>
      <v-spacer />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon @click="changeTheme">
        <v-icon>{{ themeIcon }}</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'MyFulcronGRV',
    }
  },

  computed: {
    themeIcon() {
      let currentTheme = this.$nuxt.$colorMode.preference

      switch (currentTheme) {
        case 'light':
          {
            return 'fa-sun'
          }
          break

        case 'dark':
          {
            return 'fa-moon'
          }
          break

        case 'sepia':
          {
            return 'fa-scroll'
          }
          break

        case 'system':
          {
            return 'fa-desktop'
          }
          break

        case dafault: {
          return ''
        }
      }
    },
  },

  methods: {
    changeTheme() {
      const themes = ['light', 'dark', 'sepia', 'system']
      let currentTheme = this.$nuxt.$colorMode.preference
      let currentThemeIndex = themes.indexOf(currentTheme)

      if (currentThemeIndex + 1 > themes.length - 1)
        this.$nuxt.$colorMode.preference = themes[0]
      else this.$nuxt.$colorMode.preference = themes[currentThemeIndex + 1]
    },
  },
}
</script>

<style></style>
