<template>
  <v-card rounded="xl" elevation="12" :height="height" :max-height="height">
    <v-card-title>Notizie</v-card-title>
    <v-list v-if="news.length > 0" dense>
      <v-list-item v-for="notizia in news" :key="notizia.titolo">
        <v-list-item-content>
          <v-list-item-title> {{ notizia.titolo }} </v-list-item-title>
          <v-list-item-subtitle> {{ notizia.text }} </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-card-text v-else> Nessuna notizia al momento </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'NewsCard',

  props: {
    news: {
      type: Array,
      default: () => [],
    },

    height: {
      type: Number,
      default: () => null,
    },
  },
}
</script>

<style></style>
