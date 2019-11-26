<template>
  <div class="container">
    <v-card>
      <v-card-title>Inscription</v-card-title>
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
              :rules="nameRules"
              label="Pseudo"
              required></v-text-field>
          </div>

          <div class="form-group">
            <v-text-field
              type="password"
              :rules="passwordRequiredRule"
              v-model="password"
              label="Mot de passe"
              required></v-text-field>
          </div>

          <div class="form-group">
            <v-text-field
              type="password"
              :rules="passwordRules"
              v-model="passwordConfirmation"
              label="Confirmation du mot de passe"
              required></v-text-field>
          </div>

          <v-btn color="success"
                 :dark="true"
                 :disabled="!valid"
                 @click="register">
            Inscription
          </v-btn>
        </v-form>
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
      passwordConfirmation: '',
      emailRules: [
        v => !!v || 'Un email est requis',
        v => this.validEmail(v) || 'Votre adresse mail n\'est pas correcte'
      ],
      nameRules: [
        v => !!v || 'Un pseudo est requis'
      ],
      passwordRequiredRule: [
        v => !!v || 'Un mot de passe est requis'
      ],
      passwordRules: [
        v => !!v || 'Un mot de passe de confirmation est requis',
        v => this.password === v || 'Les mots de passe ne correspondent pas'
      ],
      valid: false
    }
  },

  methods: {
    register () {
      const { email, name, password, passwordConfirmation } = this
      this.$store.dispatch('authentication/REGISTER_REQUEST', { email, name, password, passwordConfirmation }).then(() => {
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
