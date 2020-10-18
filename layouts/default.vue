<template>
  <v-app>
    <NavBarInside />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBarInside from '~/components/NavBarInside'
import Footer from '~/components/Footer'

export default {
  data() {
    return {
      title: 'My FulcronGRV',
    }
  },

  components: {
    NavBarInside,
    Footer,
  },
}
</script>
