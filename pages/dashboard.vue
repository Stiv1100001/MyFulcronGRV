<template>
  <v-row align="start" justify="start">
    <v-col cols="12" sm="12" md="8" lg="4" xl="4">
      <v-card elevation class="mb-5">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title>
              {{
                $auth.user.anagrafica.nome + ' ' + $auth.user.anagrafica.cognome
              }}
            </v-card-title>
            <v-card-subtitle>
              Tessera N° {{ $auth.user.n_tessera }}
            </v-card-subtitle>
          </div>
          <div>
            <v-avatar tile size="125">
              <v-img :src="profilePic" />
            </v-avatar>
          </div>
        </div>
      </v-card>
      <v-card elevation>
        <v-card-title> Dati giocatore </v-card-title>
        <v-card-text>
          <p>PAB Totali: {{ $auth.user.giocatore.pab_totali }}</p>
          <p>PAB Spendibili: {{ $auth.user.giocatore.pab_spendibili }}</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  middleware: ['auth'],

  head() {
    return {
      title: 'Dashboard',
    }
  },

  computed: {
    profilePic() {
      return this.$auth.user.profileImg ?? '/static/icon.png'
    },
  },
}
</script>

<style></style>
