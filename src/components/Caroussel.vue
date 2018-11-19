<template>
  <div>
    <v-layout row wrap justify-space-around>
      <v-flex sm12 xs12 md12 lg12>
        <img class="principale" :src="pathImgDragon">
      </v-flex>
      <v-flex sm12 xs12 md12 lg12>
        <img class="tip" v-for="(color, i) in getColors" v-on:click="setDragonToPathColor(color.color.name)" :src="path + color.race.name + '/' + color.color.name + '.png'" :key="i"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'Caroussel',
  data: () => ({
    path: window.IMG_PATH_DRAGONS + '/'
  }),
  mounted () {
    this.pathImgDragon = window.IMG_PATH_DRAGONS + '/' + this.getDragonToPath.dragonToPathRace + '/' + this.getDragonToPath.dragonToPathColor + '.png'
  },
  methods: {
    ...mapMutations({
      setDragonProperty: 'dragonCreate/setDragonProperty',
      setDragonToPathProp: 'dragonCreate/setDragonToPathProp'
    }),
    setDragonToPathColor (color) {
      this.setDragonToPathProp({prop: 'dragonToPathColor', val: color})
      this.pathImgDragon = window.IMG_PATH_DRAGONS + '/' + this.getDragonToPath.dragonToPathRace + '/' + this.getDragonToPath.dragonToPathColor + '.png'
    }
  },
  computed: {
    ...mapGetters({
      getColors: 'dragonCreate/getColors',
      getDragon: 'dragonCreate/getDragon',
      getDragonToPath: 'dragonCreate/getDragonToPath',
      getRaces: 'dragonCreate/getRaces'
    }),
    pathImgDragon: function () {
      return window.IMG_PATH_DRAGONS + '/' + this.getDragonToPath.dragonToPathRace + '/' + this.getDragonToPath.dragonToPathColor + '.png'
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
