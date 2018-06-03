<template>
  <div class="hello">
    <v-container fluid>
      <h1>Créez votre premier dragon</h1>
      <v-layout row>
        <v-flex xs8>
          <v-form v-model="valid">
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
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'DragonCreate',
  data: () => ({
    selectedGend: 1,
    genders: [{name: 'mâle', value: 'male'}, {name: 'femelle', value: 'female'}],
    nameRules: [
      v => !!v || 'Un nom est requis',
      v => (v && v.length <= 10) || 'Le nom de votre dragon ne peut excéder 30 caractères'
    ],
    valid: false
  }),
  mounted () {
    this.$store.dispatch('dragonCreate/loadRaces')
  },
  computed: {
    ...mapGetters({
      getRaces: 'dragonCreate/getRaces',
      getGenders: 'dragonCreate/getGenders',
      getDragon: 'dragonCreate/getDragon'
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
      setDragonProperty: 'dragonCreate/setDragonProperty'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
