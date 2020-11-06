<template>
  <v-card elevation="12" rounded="xl">
    <v-card-title> Dati giocatore </v-card-title>
    <v-card-text>
      <v-simple-table dense>
        <thead>
          <tr>
            <th class="text-left">PAB</th>
            <th class="text-left">Quantità</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Totali</td>
            <td>{{ player.pab_totali }}</td>
          </tr>
          <tr>
            <td>Spendibili</td>
            <td>{{ player.pab_spendibili }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'PlayerCard',

  props: {
    player: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
