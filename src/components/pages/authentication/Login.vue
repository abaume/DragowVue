<template>
  <div>
    <div class="connexion">
      <h2>Connexion</h2>
      <v-form v-model="valid">
        <v-text-field label="Pseudo" v-model="pseudo"></v-text-field>
        <v-text-field type="password" label="Mot de Passe" v-model="password"></v-text-field>
        <v-btn @click="login">Envoyer</v-btn>
      </v-form>
      <a href="/register">Pas encore enregistré ? Je me crée un compte de suite !</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Login',
      pseudo: '',
      password: '',
      valid: false
    }
  },
  methods: {
    login () {
      const { pseudo, password } = this
      this.$store.dispatch('authentication/AUTH_REQUEST', { pseudo, password }).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style scoped>

</style>
