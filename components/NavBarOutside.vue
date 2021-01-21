<template>
  <div>
    <v-app-bar fixed dense app color="primary" dark elevate-on-scroll>
      <v-spacer />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: 'MyFulcronGRV',
    }
  },
}
</script>

<style></style>
