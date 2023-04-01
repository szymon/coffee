<template>
    <div class="selector">
        <label>Presets:</label>
        <select v-model="currentPresetId">
            <option v-for="(preset, index) in presets" :key="preset.id" :value="index">
            cups: {{ preset.cupsCount }}, cup size: {{ preset.cupSize }}, ratio: {{ preset.ratioNumber }}
            </option>
        </select>
    </div>
    <CalculatorView :preset="presets[currentPresetId]"/>
</template>


<script>
import CalculatorView from './CalculatorView.vue'

export default {
    name: "CalculatorWrapper",
    components: {
        CalculatorView
    },
    data() {
        return {
            presets: [
                { cupsCount: 4, cupSize: 150, ratioNumber: 65 },
                { cupsCount: 5, cupSize: 120, ratioNumber: 65 },
                { cupsCount: 6, cupSize: 120, ratioNumber: 65 },
                { cupsCount: 1, cupSize: 350, ratioNumber: 65 },
            ],
            currentPresetId: 0,
        }
    }
}
</script>

<style scoped>
.selector {
    padding-bottom: 10px
}

</style>
