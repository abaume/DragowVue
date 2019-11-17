<template>
  <div>
    <h1>Bienvenue sur dragow</h1>
    <Login/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Login from './authentication/Login'

export default {
  name: 'Index',
  components: {Login},
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
