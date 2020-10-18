<template>
  <div>
    <v-app-bar fixed dense app color="primary" dark elevate-on-scroll>
      <v-app-bar-nav-icon
        @click.stop="drawer.show = !drawer.show"
        v-if="$vuetify.breakpoint.mobile"
      />
      <v-btn
        color="secondary"
        v-if="!$vuetify.breakpoint.mobile"
        to="/amministrazione"
      >
        <v-icon left>fa-user-cog</v-icon>
        Amministrazione
      </v-btn>
      <v-spacer />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon @click="changeTheme">
        <v-icon>{{ themeIcon }}</v-icon>
      </v-btn>
      <v-btn
        color="error"
        v-if="!$vuetify.breakpoint.mobile"
        @click="exitDialog = true"
      >
        <v-icon left>fa-power-off</v-icon>
        Esci
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      app
      :disable-resize-watcher="true"
      v-model="drawer.show"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> MyFulcronGRV </v-list-item-title>
          <v-list-item-subtitle> Gestione associato </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item link to="/amministrazione" nuxt>
          <v-list-item-icon>
            <v-icon color="secondary">fa-user-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Amministrazione</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="exitDialog = true">
          <v-list-item-icon>
            <v-icon color="error">fa-power-off</v-icon>
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

        <v-card-text> </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="exitDialog = false">Annulla</v-btn>
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
    esci() {
      this.exitDialog = false
      this.$router.push({
        path: '/login',
      })
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
