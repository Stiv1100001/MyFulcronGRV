<template>
  <div>
    <v-app-bar fixed dense app color="primary" dark elevate-on-scroll>
      <v-spacer />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <ThemeButton />
    </v-app-bar>
  </div>
</template>

<script>
import ThemeButton from '~/components/navbar/ThemeButton'

export default {
  components: {
    ThemeButton,
  },
  data() {
    return {
      title: 'MyFulcronGRV',
    }
  },
}
</script>

<style></style>
