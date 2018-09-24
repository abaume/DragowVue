<template>
  <div>
    <v-layout row wrap justify-space-around>
      <v-flex sm12 xs12 md12 lg12>
        <img class="principale" :src="maValeur">
      </v-flex>
      <v-flex sm12 xs12 md12 lg12>
        <img class="tip" v-for="(color, i) in colors" v-on:click="maValeur = color.src" :src="color.src" :key="i"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: 'Caroussel',
  data: () => ({
    maValeur: './static/assets/dragons/medusas.jpg',
    colors: [
      {src: './static/assets/dragons/dragonVert.png'},
      {src: './static/assets/dragons/gloom.jpg'},
      {src: './static/assets/dragons/medusas.jpg'},
      {src: './static/assets/dragons/scalebounds.jpg'},
      {src: './static/assets/dragons/sentinel.jpg'}
    ]
  }),
  methods: {
    ...mapMutations({
      setDragonProperty: 'dragonCreate/setDragonProperty'
    })
  },
  computed: {
    ...mapGetters({
      getDragon: 'dragonCreate/getDragon'
    }),
    selectedColor: {
      get () {
        return this.getDragon.color
      },
      set (value) {
        this.setDragonProperty({prop: 'color', val: value})
      }
    }
  }
}
</script>

<style scoped>
  .tip {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .principale {
    width: 400px;
    height: 400px;
    border-radius: 50%;
  }
</style>
