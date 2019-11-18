<template>
  <div class="container">
    <v-card>
      <v-card-title>Inscription</v-card-title>

      <div>
        <v-form v-model="valid">

          <div class="form-group">
            <v-text-field
              type="email"
              :rules="emailRules"
              v-model="email"
              label="email"
              required></v-text-field>
          </div>

          <div class="form-group">
            <v-text-field
              v-model="name"
              label="Pseudo"
              required></v-text-field>
          </div>

          <div class="form-group">
            <v-text-field
              type="password"
              v-model="password"
              label="Mot de passe"
              required></v-text-field>
          </div>

          <div class="form-group">
            <v-text-field
              type="password"
              :rules="passwordRules"
              v-model="password_confirmation"
              label="Confirmation du mot de passe"
              required></v-text-field>
          </div>

          <v-btn color="success"
                 :dark="true"
                 @click="register">
            Inscription
          </v-btn>
        </v-form>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      emailRules: [
        v => !!v || 'Un email est requis',
        v => this.validEmail(v) || 'Votre adresse mail n\'est pas correcte'
      ],
      passwordRules: [
        v => this.password === v || 'Les mots de passe ne correspondent pas'
      ],
      valid: false
    }
  },

  methods: {
    register () {
      const { username, password } = this
      this.$store.dispatch('authentication/REGISTER_REQUEST', { username, password }).then(() => {
        this.$router.push('/')
      })
    },
    validEmail: function (email) {
      // eslint-disable-next-line no-useless-escape
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>

<style scoped>

</style>
