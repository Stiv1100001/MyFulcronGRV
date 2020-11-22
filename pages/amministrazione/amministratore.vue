<template>
  <v-container fluid>
    <v-row align="start" justify="center">
      <v-col cols="12">
        <v-banner
          elevation="10"
          rounded="lg"
          single-line
          icon="fas fa-user"
          icon-color="primary"
          color="accent"
        >
          Gestisci utenti
        </v-banner>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
    }
  },
}
</script>

<style></style>
