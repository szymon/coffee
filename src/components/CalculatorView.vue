<template>
  <h1>Coffee Calculator</h1>
  <div>
    <label for="coffee">Coffee per 1000g of water:</label>
    <input type="number" id="coffee" v-model="ratioNumber" v-on:change="calculateRatio"/>
  </div>
  <p>Ratio (coffee to water): 1:{{ ratio }}</p>
  <div>
    <label for="cups">Number of cups to serve</label>
    <input type="number" id="cups" v-model="cupsNumber" v-on:change="calculateCoffee" />
  </div>
  <div>
    <label for="cupSize">Size of a serving (in grams)</label>
    <input type="number" id="capSize" v-model="cupSize" v-on:change="calculateCoffee" />
  </div>
  <p>Coffee: {{coffee}}g, water: {{water}}g</p>
</template>

<script>
export default {
  name: 'CalculatorView',
  data() {
    return {
      cupsNumber: 1,
      cupSize: 120,
      ratioNumber: 60,
      ratio: null,
      coffee: null,
      water: null
    }
  },
  beforeMount() {
    this.calculateRatio()
    this.calculateCoffee()
  },
  methods: {
    calculateRatio() {
      this.ratio = Math.round(1000 / this.ratioNumber * 10) / 10
    },
    calculateCoffee() {
      this.water = this.cupsNumber * this.cupSize
      this.coffee = Math.round(this.water / this.ratio * 10) / 10
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
