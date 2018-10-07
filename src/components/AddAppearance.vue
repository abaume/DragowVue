<template>
  <div>
    <h1>Ajouter une couleur à une race</h1>
    <v-form>
      <v-text-field
        v-model="name"
        :counter="30"
        label="Race"
        required
      ></v-text-field>
      <v-text-field
        v-model="color"
        :counter="30"
        label="Couleur"
        required
      ></v-text-field>

    </v-form>
  </div>
</template>

<script>
export default {
  name: 'AddAppearance',
  data: () => ({
  }),
  mounted () {
    this.$store.dispatch('loadRaces')
  },
  computed: {
    name: {
      get () {
        return this.getDragon.name
      },
      set (value) {
        this.setDragonProperty({prop: 'name', val: value})
      }
    }
  }
}
</script>

<style scoped>

</style>
