<template>
  <v-card rounded="xl" elevation="12">
    <v-card-title>Personaggi</v-card-title>
    <v-row align="start">
      <div v-if="personaggi.length > 3">
        <v-col
          v-for="(personaggio, index) in personaggi"
          :key="index"
          cols="12"
          sm="12"
          md="6"
          lg="4"
          xl="4"
        >
          <CharacterCard :personaggio="personaggio" />
        </v-col>
      </div>
    </v-row>
    <v-card-actions>
      <v-btn text :disabled="personaggi.length === 0">Storico personaggi</v-btn>
      <v-spacer />
      <v-btn v-if="personaggi.length < 3" text>Crea personaggio</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import CharacterCard from '~/components/dashboard/CharacterCard'

export default {
  name: 'PlayersSlot',

  components: {
    CharacterCard,
  },

  props: {
    personaggi: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
