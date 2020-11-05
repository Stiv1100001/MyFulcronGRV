<template>
  <div>
    <v-app-bar fixed dense app color="primary" dark elevate-on-scroll>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mobile"
        @click.stop="drawer.show = !drawer.show"
      />
      <v-btn
        v-if="!$vuetify.breakpoint.mobile && $auth.user.ruolo.length > 0"
        color="secondary"
        to="/amministrazione"
      >
        <v-icon left> fa-user-cog </v-icon>
        Amministrazione
      </v-btn>
      <v-spacer />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon @click="changeTheme">
        <v-icon>{{ themeIcon }}</v-icon>
      </v-btn>
      <v-btn
        v-if="!$vuetify.breakpoint.mobile"
        color="error"
        @click="exitDialog = true"
      >
        <v-icon left> fa-power-off </v-icon>
        Esci
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer.show"
      app
      :disable-resize-watcher="true"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> MyFulcronGRV </v-list-item-title>
          <v-list-item-subtitle> Gestione associato </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense nav>
        <v-list-item link to="/amministrazione" nuxt>
          <v-list-item-icon>
            <v-icon color="secondary"> fa-user-cog </v-icon>
          </v-list-item-icon>
          <v-list-item-content v-if="$auth.user.ruolo.length > 0">
            <v-list-item-title>Amministrazione</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="exitDialog = true">
          <v-list-item-icon>
            <v-icon color="error"> fa-power-off </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Esci</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-dialog v-model="exitDialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Sei sicuro?
        </v-card-title>

        <v-card-text />

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn text @click="exitDialog = false"> Annulla </v-btn>
          <v-btn text color="error" @click="esci()"> Esci </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'MyFulcronGRV',
      exitDialog: false,
      drawer: {
        show: false,
      },
    }
  },

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
    esci() {
      this.exitDialog = false
      this.$auth.logout()
    },

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
