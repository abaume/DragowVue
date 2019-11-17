<template>
  <div class="container">
    <v-card>
      <v-card-title>Inscription</v-card-title>

      <div>
        <v-form autocomplete="off" @submit.prevent="validate" v-if="!success" method="post">

          <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.email }">
            <v-text-field type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email">E-mail</v-text-field>
            <span class="help-block" v-if="has_error && errors.email">{{ errors.email }}</span>
          </div>

          <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.name }">
            <v-text-field type="text" id="name" class="form-control" v-model="name">Pseudo</v-text-field>
            <span class="help-block" v-if="has_error && errors.name">{{ errors.name }}</span>
          </div>

          <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.password }">
            <v-text-field type="password" id="password" class="form-control" v-model="password">Mot de passe</v-text-field>
            <span class="help-block" v-if="has_error && errors.password">{{ errors.password }}</span>
          </div>

          <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.password }">
            <v-text-field type="password" id="password_confirmation" class="form-control" v-model="password_confirmation">Confirmation du mot de passe</v-text-field>
          </div>

          <v-btn color="success"
                 class="mr-4"
                 @click="validate"
                 type="submit">
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
      has_error: false,
      errors: {},
      success: false
    }
  },

  methods: {
    register () {
      const { username, password } = this
      this.$store.dispatch('AUTH_REQUEST', { username, password }).then(() => {
        this.$router.push('/')
      })
    },
    validate (e) {
      if (this.name === '') {
        this.errors.name = 'Un nom / pseudo est nécessaire'
      }
      if (this.email === '') {
        this.errors.email = 'Un email valide est nécessaire'
      }
      if (this.password === '') {
        this.errors.password = 'Un mot de passe valide est nécessaire'
      }

      if (!this.errors !== {}) {
        this.has_error = true
      }

      e.preventDefault()
    }
  }
}
</script>

<style scoped>

</style>
