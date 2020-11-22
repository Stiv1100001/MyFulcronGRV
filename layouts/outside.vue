<template>
  <v-app>
    <NavBarOutside />
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import cookie from '~/mixins/cookie'

export default {
  name: 'Outside',

  mixins: [cookie],

  data() {
    return {
      title: 'My FulcronGRV',
    }
  },

  mounted() {
    setTimeout(() => this.checkCookie(), 3000)
  },
}
</script>
