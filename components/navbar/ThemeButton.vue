<template>
  <v-btn icon @click="changeTheme">
    <v-icon>{{ themeIcon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'ThemeButton',

  computed: {
    themeIcon() {
      let currentTheme = this.$nuxt.$colorMode.preference

      if (currentTheme === 'light') return 'fa-sun'
      else if (currentTheme === 'dark') return 'fa-moon'
      else if (currentTheme === 'sepia') return 'fa-scroll'
      else if (currentTheme === 'system') return 'fa-desktop'
      else return ''
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
