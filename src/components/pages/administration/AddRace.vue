<template>
  <div>
    <v-container text-xs-center>
      <v-layout row wrap justify-center>
        <v-flex md12>
          <h1>Créer une nouvelle race</h1>
        </v-flex>
        <v-flex md12>
          <v-form>
            <v-flex md6>
              <v-text-field
                label="nom"
                v-model="name"
              ></v-text-field>
            </v-flex>
            <v-flex md12>
              <label>Force</label>
              <input type="range" :min="min" :max="max" :step="step" v-model="strength">
              <span v-text="strength"></span>
            </v-flex>
            <v-flex md12>
              <label>Resistance</label>
              <input type="range" :min="min" :max="max" :step="step" v-model="resistance">
              <span v-text="resistance"></span>
            </v-flex>
            <v-flex md12>
              <label>Intelligence</label>
              <input type="range" :min="min" :max="max" :step="step" v-model="intelligence">
              <span v-text="intelligence"></span>
            </v-flex>
            <v-flex md12>
              <label>Rapidité</label>
              <input type="range" :min="min" :max="max" :step="step" v-model="speed">
              <span v-text="speed"></span>
            </v-flex>
            <v-flex md12>
              <label>Discrétion</label>
              <input type="range" :min="min" :max="max" :step="step" v-model="discretion">
              <span v-text="discretion"></span>
            </v-flex>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'AddRace',
  data: () => ({
    min: 1,
    max: 10,
    step: 1
  }),
  mounted () {
  },
  computed: {
    ...mapGetters({
      getStats: 'addRace/getStats',
      getName: 'addRace/getName'
    }),
    name: {
      get () {
        return this.getName
      },
      set (value) {
        this.setName(value)
      }
    },
    strength: {
      get () {
        return this.getStats.strength
      },
      set (value) {
        this.setStats({prop: 'strength', val: parseInt(value)})
      }
    },
    resistance: {
      get () {
        return this.getStats.resistance
      },
      set (value) {
        this.setStats({prop: 'resistance', val: parseInt(value)})
      }
    },
    intelligence: {
      get () {
        return this.getStats.intelligence
      },
      set (value) {
        this.setStats({prop: 'intelligence', val: parseInt(value)})
      }
    },
    speed: {
      get () {
        return this.getStats.speed
      },
      set (value) {
        this.setStats({prop: 'speed', val: parseInt(value)})
      }
    },
    discretion: {
      get () {
        return this.getStats.discretion
      },
      set (value) {
        this.setStats({prop: 'discretion', val: parseInt(value)})
      }
    }
  },
  methods: {
    ...mapMutations({
      setStats: 'addRace/setStats',
      setName: 'addRace/setName'
    })
  }
}
</script>

<style scoped>

</style>
