<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="12" md="10" lg="8" xl="6">
      <v-card>
        <v-card-title class="text-center title">Accedi</v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="loginInfo.email" label="Email" outlined />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="loginInfo.password"
                label="Password"
                type="password"
                outlined
              />
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn color="secondary" to="/signup" nuxt>Registrati</v-btn>
          <v-spacer />
          <v-btn color="primary" @click="login()">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'outside',

  data() {
    return {
      loginInfo: {
        email: '',
        password: '',
      },
    }
  },

  head() {
    return {
      title: 'Login',
    }
  },

  methods: {
    login() {
      this.$auth
        .loginWith('local', { data: this.loginInfo })
        .then(() => {
          if (this.$auth.loggedIn) this.$router.push({ path: '/dashboard' })
        })
        .catch((e) => console.dir(e))
    },
  },
}
</script>
