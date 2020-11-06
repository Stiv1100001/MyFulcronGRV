<template>
  <div>
    <v-btn v-if="!list" color="error" @click="exitDialog = true">
      <v-icon left> fa-power-off </v-icon>
      Esci
    </v-btn>

    <v-btn v-else block color="error" @click="exitDialog = true">
      <v-icon left> fa-power-off </v-icon>
      Esci
    </v-btn>

    <v-dialog v-model="exitDialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Sei sicuro?
        </v-card-title>

        <v-card-text>
          <p class="body-2">
            Se esci, al prossimo accesso dovrai reinserire i dati di login
          </p>
        </v-card-text>

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
  name: 'LogoutButton',

  props: {
    list: {
      type: Boolean,
      default: () => false,
    },
  },

  data() {
    return {
      exitDialog: false,
    }
  },

  methods: {
    esci() {
      this.exitDialog = false
      this.$auth.logout()
    },
  },
}
</script>

<style></style>
