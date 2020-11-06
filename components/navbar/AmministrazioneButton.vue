<template>
  <v-btn v-if="!list" color="secondary" :to="button.to">
    <v-icon left> {{ button.icon }} </v-icon>
    {{ button.title }}
  </v-btn>
  <v-list-item v-else-if="list" link :to="button.to" nuxt>
    <v-list-item-icon>
      <v-icon color="secondary">{{ button.icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>{{ button.title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'AmministrazioneButton',

  props: {
    list: {
      type: Boolean,
      default: () => false,
    },
  },

  computed: {
    button() {
      let button = {}

      if (this.$route.path === '/amministrazione') {
        button.to = '/dashboard'
        button.title = 'Dashboard'
        button.icon = 'fa-user'
      } else if (this.$route.path === '/dashboard') {
        button.to = '/amministrazione'
        button.title = 'Amministrazione'
        button.icon = 'fa-user-cog'
      }

      return button
    },
  },
}
</script>

<style></style>
