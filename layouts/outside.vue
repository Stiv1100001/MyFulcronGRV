<template>
  <v-app>
    <NavBarOutside />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBarOutside from '~/components/NavBarOutside'
import Footer from '~/components/Footer'

export default {
  name: 'Outside',

  components: {
    NavBarOutside,
    Footer,
  },
  data() {
    return {
      title: 'My FulcronGRV',
    }
  },
}
</script>
