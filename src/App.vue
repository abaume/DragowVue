<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body {
    background-size: cover;
    background: url('https://png2.kisspng.com/20171208/69b/5a2ab5ce07b3c6.8786003315127484940316.png') no-repeat center fixed;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-size: cover;
  background: url('https://png2.kisspng.com/20171208/69b/5a2ab5ce07b3c6.8786003315127484940316.png') no-repeat center fixed;
}
</style>
