<template>
  <h1>Coffee Calculator</h1>

  <CalculatorWrapper />
</template>

<script>
import CalculatorWrapper from './components/CalculatorWrapper.vue'

export default {
  name: 'App',
  components: {
    CalculatorWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3em;
}
</style>
