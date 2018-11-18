<template>
  <div>
    <h1>Ajouter une couleur à une race</h1>
    <v-form>
      <v-flex md6>
      <v-select
        v-model="race"
        :items="this.getRaces"
        item-text="name"
        item-value="id"
        label="Race"></v-select>
        <v-text-field
          label="Nom de la couleur"
          v-model="color"
        >
        </v-text-field>
        <input type="file" accept="image/png" ref="image" v-on:change="setImage()">
        <v-btn @click="addAppearance">Enregistrer</v-btn>
      </v-flex>
    </v-form>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: 'AddAppearance',
  data: () => ({
  }),
  mounted () {
    this.$store.dispatch('addAppearance/loadRaces')
  },
  computed: {
    ...mapGetters({
      getRaces: 'addAppearance/getRaces',
      getAppearance: 'addAppearance/getAppearance'
    }),
    race: {
      get () {
        return this.getAppearance.race
      },
      set (value) {
        this.setAppearance({prop: 'race', val: value})
      }
    },
    color: {
      get () {
        return this.getAppearance.colorName
      },
      set (value) {
        this.setAppearance({prop: 'colorName', val: value})
      }
    }
  },
  methods: {
    ...mapActions({
      addAppearance: 'addAppearance/addAppearance'
    }),
    ...mapMutations({
      setAppearance: 'addAppearance/setAppearance'
    }),
    setImage () {
      this.setAppearance({prop: 'colorImg', val: this.$refs['image'].files[0]})
    }
  }
}
</script>

<style scoped>

</style>
