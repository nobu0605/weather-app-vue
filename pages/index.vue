<template>
  <div class="h-full">
    <div v-show="isLoading" class="flex items-center justify-center h-full">
      <VProgressCircular
        :size="90"
        :width="7"
        indeterminate
        color="primary"
      ></VProgressCircular>
    </div>

    <div v-show="!isLoading">
      <TheHeader />
      <h1 class="text-2xl font-bold p-4 text-center">
        Current weather in Japan
      </h1>
      <div class="flex justify-center">
        <div class="index-japan-map">
          <ul
            v-for="(cityCard, key) in cityCards"
            :key="key"
            class="index-cities"
          >
            <CityCard :key-number="key" :city="cityCard" />
          </ul>
        </div>
      </div>
      <CityList
        :regions="japanRegions"
        :cities-in-region="japanCitiesInRegion"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { getCityWeather } from '../utils/weather'
import { japanCities, japanCitiesInRegion } from '../constants/cities'
import { JapanRegionList } from '../types/city'
import { japanRegions } from '../constants/regions'

type DataType = {
  isLoading: boolean
  cityCards: Array<any>
}

export default {
  name: 'IndexPage',
  data(): DataType {
    return {
      isLoading: true,
      cityCards: [],
    }
  },
  computed: {
    japanRegions(): Array<any> {
      return japanRegions
    },
    japanCitiesInRegion(): JapanRegionList {
      return japanCitiesInRegion
    },
  },
  async mounted() {
    const cityArray: Array<any> = []
    this.cityCards = await getCityWeather(japanCities, cityArray)
    this.isLoading = false
  },
}
</script>

<style>
.index-cities li {
  position: absolute;
  z-index: 10;
  padding: 6px;
  background-image: none;
  background-color: rgba(240, 240, 240, 0.5);
  border: solid 1px #fff;
  border-radius: 8px;
  -webkit-box-shadow: 0 1px 5px rgba(50, 50, 50, 0.25);
  box-shadow: 0 1px 5px rgba(50, 50, 50, 0.25);
  line-height: 1;
  outline: 0;
  width: 80px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.index-cities img {
  margin: 0 auto;
}

.index-japan-map {
  position: relative;
  background: url(/map-japan.png) no-repeat 0 0;
  width: 600px;
  height: 600px;
  margin-top: 20px;
  margin-bottom: 100px;
}
</style>
