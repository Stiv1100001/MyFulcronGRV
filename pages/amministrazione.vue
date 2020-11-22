<template>
  <div>
    <v-tabs v-model="currentTab" fixed-tabs>
      <v-tab
        v-show="$auth.user.ruolo.includes('ADM')"
        nuxt
        to="/amministrazione/amministratore"
      >
        Amministratore
      </v-tab>
      <v-tab
        v-show="
          $auth.user.ruolo.includes('ADM') || $auth.user.ruolo.includes('DIR')
        "
        nuxt
        to="/amministrazione/direttivo"
      >
        Direttivo
      </v-tab>
      <v-tab
        v-show="
          $auth.user.ruolo.includes('ADM') || $auth.user.ruolo.includes('GA')
        "
        nuxt
        to="/amministrazione/ambientazione"
      >
        Ambientazione
      </v-tab>
      <v-tab
        v-show="
          $auth.user.ruolo.includes('ADM') || $auth.user.ruolo.includes('REG')
        "
        nuxt
        to="/amministrazione/regolamento"
      >
        Regolamento
      </v-tab>
    </v-tabs>
    <div>
      <nuxt-child />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'defaultNoContainer',

  middleware: ['auth', 'admin'],

  data() {
    return {
      currentTab: 0,
    }
  },

  head() {
    return {
      title: 'Amministrazione',
    }
  },

  mounted() {
    const currentPath = this.$nuxt.$route.path

    if (currentPath === '/amministrazione') {
      const nextPath = '/amministrazione/' + this.currentTabContent()
      this.$router.replace({ path: nextPath })
    }
  },

  methods: {
    currentTabContent() {
      switch (this.currentTab) {
        case 0: {
          return 'amministratore'
        }

        case 1: {
          return 'direttivo'
        }

        case 2: {
          return 'ambientazione'
        }

        case 3: {
          return 'regolamento'
        }

        default: {
          return ''
        }
      }
    },
  },
}
</script>

<style></style>
