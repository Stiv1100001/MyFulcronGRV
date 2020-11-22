<template>
  <v-row align="start" justify="start">
    <v-col cols="12" sm="12" md="12" lg="8" xl="8">
      <v-row align="start">
        <v-col cols="12" sm="12" md="8" lg="6" xl="6">
          <UserCard id="ucard" ref="ucard" :user="$auth.user" />
          <PlayerCard id="pcard" ref="pcard" :player="$auth.user.giocatore" />
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="6" xl="6">
          <NewsCard id="ncard" :height="height" />
        </v-col>
        <v-col cols="12">
          <PlayersSlot
            id="pgcard"
            :personaggi="$auth.user.giocatore.personaggi"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" sm="12" md="12" lg="4" xl="4">
      <EventSlot id="ecard" class="mt-3" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  middleware: ['auth'],

  data() {
    return {
      height: null,
    }
  },

  head() {
    return {
      title: 'Dashboard',
    }
  },

  mounted() {
    const refs = this.$refs
    this.height = refs.ucard.$el.clientHeight + refs.pcard.$el.clientHeight + 20
  },
}
</script>

<style></style>
