<template>
  <div>
    <v-app-bar fixed dense app color="primary" dark elevate-on-scroll>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mobile"
        @click.stop="drawer.show = !drawer.show"
      />
      <AmministrazioneButton
        v-if="!$vuetify.breakpoint.mobile && $auth.user.ruolo.length > 0"
      />
      <v-spacer />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <ThemeButton />
      <LogoutButton v-if="!$vuetify.breakpoint.mobile" />
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
        <AmministrazioneButton v-if="$auth.user.ruolo.length > 0" list />
        <v-list-item v-for="gt in goto" :key="gt.title" @click="myGoTo(gt.to)">
          <v-list-item-icon>
            <v-icon>{{ gt.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ gt.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!-- eslint-disable-next-line vue/v-slot-style -->
      <template v-slot:append>
        <div class="pa-2">
          <LogoutButton list />
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import LogoutButton from '~/components/navbar/LogoutButton'
import AmministrazioneButton from '~/components/navbar/AmministrazioneButton'
import ThemeButton from '~/components/navbar/ThemeButton'

export default {
  components: {
    LogoutButton,
    AmministrazioneButton,
    ThemeButton,
  },

  data() {
    return {
      title: 'MyFulcronGRV',
      drawer: {
        show: false,
      },
      goto: [
        { title: 'Dati associato', to: '#ucard', icon: 'fas fa-file-alt' },
        { title: 'Dati giocatore', to: '#pcard', icon: 'fas fa-table' },
        { title: 'Notizie', to: '#ncard', icon: 'fas fa-newspaper' },
        { title: 'Personaggi', to: '#pgcard', icon: 'fas fa-people-arrows' },
        { title: 'Eventi', to: '#ecard', icon: 'fas fa-calendar-week' },
      ],
      gotoOptions: {
        duration: 300,
        offset: 5,
        easing: 'easeInQuad',
      },
    }
  },

  methods: {
    myGoTo(where) {
      this.$vuetify.goTo(where, this.gotoOptions)
      this.drawer.show = false
    },
  },
}
</script>

<style></style>
