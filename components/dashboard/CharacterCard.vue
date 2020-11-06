<template>
  <v-card outlined>
    <v-img height="250" :src="personaggioImg">
      <v-card-title> {{ personaggio.nome || '' }}</v-card-title>
    </v-img>
    <v-card-actions>
      <v-spacer />
      <v-btn text>Modifica</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CharacterCard',

  props: {
    personaggio: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    personaggioImg() {
      return this.personaggio?.img ?? '/icon.png'
    },
  },
}
</script>

<style></style>
