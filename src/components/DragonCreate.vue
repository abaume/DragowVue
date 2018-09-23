<template>
  <div class="hello">
    <v-container fluid>
      <h1>Créez votre premier dragon</h1>
      <img src="../assets/dragons/the_shear.jpg"/>
      <v-layout row wrap justify-space-around>
        <v-flex xs12 md2>
          <v-form v-model="valid">
            <div class="title ma-3">Choisissez le nom de votre dragon</div>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="30"
              label="Nom"
              required
            ></v-text-field>
            <div class="title">Choisissez le sexe</div>
            <v-radio-group v-model="selectedGend">
              <v-radio
                v-for="n in genders"
                :key="n.name"
                :label="n.name"
                :value="n.value"
              ></v-radio>
            </v-radio-group>
          </v-form>
        </v-flex>
        <v-flex xs12 md6>
          <div v-if="getLoading.race || getLoading.color">
            <v-progress-circular
              indeterminate
              color="primary"
            ></v-progress-circular>
            chargement des couleurs
          </div>
          <div v-else>
            <v-list>
              <ul v-for="c in getColors" v-bind:key="c"><img :src="'../assets/dragons/medusas.jpg'"></ul>
            </v-list>
            <caroussel></caroussel>
          <!--<v-layout>
            <v-carousel :cycle="false" interval="0.00001">
              <v-carousel-item v-for="(color, c) in getColors" src="dragons/medusas.jpg" :key="c">
              </v-carousel-item>
            </v-carousel>
          </v-layout>-->
          </div>
        </v-flex>
        <!--<v-flex xs12 md3>
          <div v-if="getLoading.race">
            <v-progress-circular
              indeterminate
              color="primary"
            ></v-progress-circular>
            chargement des races de dragons
          </div>
          <div v-else>
          <v-card>
            <v-toolbar color="cyan" dark>
              <v-toolbar-title>Races</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>search</v-icon>
              </v-btn>
            </v-toolbar>
            <v-list>
              <template v-for="(item) in getRaces">
                <v-list-tile :key="item.name">
                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.name" @click="loadAppearanceForSelectedRace(item.id)"></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-card>
          </div>
        </v-flex>-->
      </v-layout>
      <v-btn color="blue" :dark='true'>Valider</v-btn>
    </v-container>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import Caroussel from './Caroussel'

export default {
  name: 'DragonCreate',
  components: {Caroussel},
  data: () => ({
    resource: [
      {src: '../assets/dragons/gloom.jpg'}
    ],
    selectedGend: 'male',
    genders: [{name: 'mâle', value: 'male'}, {name: 'femelle', value: 'female'}],
    nameRules: [
      v => !!v || 'Un nom est requis',
      v => (v && v.length <= 30) || 'Le nom de votre dragon ne peut excéder 30 caractères'
    ],
    valid: false
  }),
  mounted () {
    this.$store.dispatch('dragonCreate/loadRaces')
    this.$store.dispatch('dragonCreate/loadAppearance')
  },
  computed: {
    ...mapGetters({
      getRaces: 'dragonCreate/getRaces',
      getGenders: 'dragonCreate/getGenders',
      getDragon: 'dragonCreate/getDragon',
      getColors: 'dragonCreate/getColors',
      getLoading: 'dragonCreate/getLoading'
    }),
    name: {
      get () {
        return this.getDragon.name
      },
      set (value) {
        this.setDragonProperty({prop: 'name', val: value})
      }
    }
  },
  methods: {
    ...mapMutations({
      setDragonProperty: 'dragonCreate/setDragonProperty',
      setSelectedProp: 'dragonCreate/setSelectedProp'
    }),
    loadAppearanceForSelectedRace (race) {
      this.setSelectedProp({prop: 'selectedRace', val: race})
      this.$store.dispatch('dragonCreate/loadAppearance')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
