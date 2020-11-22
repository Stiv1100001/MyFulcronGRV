<template>
  <v-app>
    <NavBarInside />
    <v-main>
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBarInside from '~/components/NavBarInside'
import Footer from '~/components/Footer'

export default {
  components: {
    NavBarInside,
    Footer,
  },
  data() {
    return {
      title: 'My FulcronGRV',
    }
  },
}
</script>
