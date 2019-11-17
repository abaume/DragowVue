<template>
  <div>
    <div class="connexion">
      <h2>Connexion</h2>
      <v-form>
        <v-text-field label="Pseudo" ></v-text-field>
        <v-text-field type="password" label="Mot de Passe"></v-text-field>
        <v-btn>Envoyer</v-btn>
      </v-form>
      <a href="/register">Pas encore enregistré ? Je me crée un compte de suite !</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>

</style>
