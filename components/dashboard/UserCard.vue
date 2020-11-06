<template>
  <div>
    <v-card elevation="12" class="mb-5" rounded="xl">
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title>
            {{ user.anagrafica.nome + ' ' + user.anagrafica.cognome }}
          </v-card-title>
          <v-card-subtitle> Tessera N° {{ user.n_tessera }} </v-card-subtitle>
          <v-card-text>
            <div>
              Scadenza tessera:
              {{ $moment(user.scadenza_tessera).format('DD/MM/YYYY') }}
            </div>
            <div v-if="tesseraScaduta" class="red--text">
              Devi rinnovare la tessera!
            </div>
          </v-card-text>
        </div>
        <div>
          <v-avatar tile size="125">
            <v-img :src="profilePic" />
          </v-avatar>
        </div>
      </div>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="show = !show">
          {{ show ? 'Mostra di meno' : 'Mostra di più' }}
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider />

          <v-card-text>
            <div>
              Nato il:
              {{ $moment(user.anagrafica.data_nascita).format('DD/MM/YYYY') }}
            </div>
            <div>Sesso: {{ sessoEsteso }}</div>
            <div>Codice fiscale: {{ user.anagrafica.codice_fiscale }}</div>
            <div>
              Residente in:
              {{
                // eslint-disable
                user.anagrafica.residenza.via +
                ', ' +
                user.anagrafica.residenza.citta +
                ' (' +
                user.anagrafica.residenza.provincia +
                ')'
              }}
            </div>
            <div>Email: {{ user.email }}</div>
            <div>
              Telefono: {{ user.telefono ? user.telefono : 'Non disponibile' }}
            </div>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'UserCard',

  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      show: false,
    }
  },

  computed: {
    profilePic() {
      return this.user.profileImg ?? '/icon.png'
    },

    tesseraScaduta() {
      return this.$moment(this.user.scadenza_tessera).isBefore(new Date())
    },

    sessoEsteso() {
      switch (this.user.anagrafica.sesso) {
        case 'M':
          return 'Maschio'
        case 'F':
          return 'Femmina'
        case 'A':
          return 'Altro'
        case 'N':
          return 'Non specificato'
        default:
          return ''
      }
    },
  },
}
</script>

<style></style>
