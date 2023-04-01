<template>
  <div>
    <label for="coffee">Grams of coffee per 1000g of water</label>
    <input type="number" id="coffee" v-model="ratioNumber" v-on:change="recalculate"/>
  </div>
  <div>
    <label for="cups">Number of cups to serve</label>
    <input type="number" id="cups" v-model="cupsCount" v-on:change="calculateCoffee" />
  </div>
  <div>
    <label for="cupSize">Size of a serving in grams</label>
    <input type="number" id="capSize" v-model="cupSize" v-on:change="calculateCoffee" />
  </div>
  <p>Ratio (coffee to water): 1:{{ ratio }}</p>
  <p>Coffee: {{ coffee }}g, water: {{ water }}g</p>
</template>

<script>
export default {
  name: 'CalculatorView',
  props: ["preset"],
  data() {
    return {
      cupsCount: 1,
      cupSize: 120,
      ratioNumber: 65,
    }
  },
  created() {
      this.updateFromPreset(this.preset)
  },
  watch: {
      preset: function(val) {
          this.updateFromPreset(val)
      }
  },
  computed: {
    ratio() { return Math.round(1000 / this.ratioNumber * 10) / 10 } ,
    water() { return this.cupsCount * this.cupSize },
    coffee() { return Math.round(this.water / this.ratio * 10) / 10 }
  },
  methods: {
      updateFromPreset(preset) {
          this.cupsCount = preset.cupsCount
          this.cupSize = preset.cupSize
          this.ratioNumber = preset.ratioNumber
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
