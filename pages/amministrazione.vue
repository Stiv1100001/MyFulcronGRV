<template>
  <div>
    <v-tabs fixed-tabs align-with-title>
      <v-tab v-if="$auth.user.ruolo.includes('ADM')">Amministratore</v-tab>
      <v-tab
        v-if="
          $auth.user.ruolo.includes('ADM') || $auth.user.ruolo.includes('DIR')
        "
      >
        Direttivo
      </v-tab>
      <v-tab
        v-if="
          $auth.user.ruolo.includes('ADM') || $auth.user.ruolo.includes('GA')
        "
      >
        Ambientazione
      </v-tab>
      <v-tab
        v-if="
          $auth.user.ruolo.includes('ADM') || $auth.user.ruolo.includes('REG')
        "
      >
        Regolamento
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  middleware: ['auth', 'admin'],

  head() {
    return {
      title: 'Amministrazione',
    }
  },
}
</script>

<style></style>
