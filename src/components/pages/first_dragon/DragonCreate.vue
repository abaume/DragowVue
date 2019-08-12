<template>
  <div class="hello">
    <v-container fluid>
      <h1>Créez votre premier dragon</h1>
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
            <v-radio-group v-model="gender">
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
            <caroussel></caroussel>
          </div>
        </v-flex>
        <v-flex xs12 md3>
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
                    <v-list-tile-title v-html="item.name" @click="changeRace(item.id, item.name)"></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-card>
          </div>
        </v-flex>
      </v-layout>
      <v-btn color="blue" :dark='true' @click="addDragon">Valider</v-btn>
    </v-container>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import Caroussel from '../../modules/Caroussel'

export default {
  name: 'DragonCreate',
  components: {Caroussel},
  data: () => ({
    genders: [{name: 'mâle', value: 'male'}, {name: 'femelle', value: 'female'}],
    nameRules: [
      v => !!v || 'Un nom est requis',
      v => (v && v.length <= 30) || 'Le nom de votre dragon ne peut excéder 30 caractères'
    ],
    valid: false
  }),
  mounted () {
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
    },
    gender: {
      get () {
        return this.getDragon.gender
      },
      set (value) {
        this.setDragonProperty({prop: 'gender', val: value})
      }
    }
  },
  methods: {
    ...mapMutations({
      setDragonProperty: 'dragonCreate/setDragonProperty',
      setDragonToPathProp: 'dragonCreate/setDragonToPathProp'
    }),
    ...mapActions({
      addDragon: 'dragonCreate/addDragon'
    }),
    changeRace (race, name) {
      this.setDragonProperty({prop: 'race', val: race})
      this.setDragonToPathProp({prop: 'dragonToPathRace', val: name})
      let newColors = []
      this.getColors.forEach(color => {
        if (color.race.id === race) {
          newColors.push(color)
        }
      })
      this.setDragonToPathProp({prop: 'dragonToPathColor', val: newColors[0].color.name})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
