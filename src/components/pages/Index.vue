<template>
  <div>
    <h1>Bienvenue sur dragow</h1>
    <div class="connexion">
      <h2>Je me connecte</h2>
      <v-form>
        <v-text-field label="Pseudo" ></v-text-field>
        <v-text-field label="Mot de Passe"></v-text-field>
        <v-btn>Envoyer</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'Index',
  data: () => ({
    pseudo: '',
    password: ''
  }),
  methods: {
    ...mapActions({
      connectUser: 'authentication/connectUser'
    })
  }
}
</script>

<style scoped>

</style>
