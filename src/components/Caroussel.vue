<template>
  <div>
    <div v-for="color in colors" v-bind:key="color.id" style="background-image:url(../assets/dragons/gloom.jpg)"></div>
    <!--<img v-for="color in colors" :src="color.src" v-bind:key="color.id"/>-->
    <!--<img src="../assets/dragons/gloom.jpg"/>-->
  </div>
</template>

<script>
export default {
  name: 'Caroussel',
  data: () => ({
    colors: [
      {src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', id: '1'},
      {src: 'assets/dragons/gloom.jpg', id: '2'},
      {src: '/assets/dragons/gloom.jpg', id: '3'},
      {src: '', id: '4'},
      {src: '', id: '5'}
    ]
  })
}
</script>

<style scoped>

</style>
