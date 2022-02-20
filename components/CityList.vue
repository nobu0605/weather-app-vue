<template>
  <div class="regions pb-10">
    <ul class="regions__lists">
      <li
        v-for="(region, key) in regions"
        :key="key"
        :class="['regions__list', oddOrEvenNumber(key)]"
      >
        <p class="regions__region-name">{{ region }}&nbsp;&nbsp;</p>
        <div class="regions__city-list">
          <span
            v-for="(city, index) in citiesInRegionArray(region)"
            :key="index"
          >
            <NuxtLink :to="{ path: '/five-days-forecast?city={{city}}' }">
              <a class="regions__city-name">{{ city }}</a>
            </NuxtLink>
            <span
              v-show="showPipe(index, citiesInRegionArray(region).length)"
              class="m-2.5"
            >
              |
            </span>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { JapanRegionList, WorldRegionList } from '../types/city'

export default {
  name: 'CityList',
  props: {
    regions: {
      type: Array as PropType<Array<string>>,
      required: true,
    },
    citiesInRegion: {
      type: Object as PropType<JapanRegionList | WorldRegionList>,
      required: true,
    },
    nameForStyle: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    citiesInRegionArray(): any {
      return (region: string): Array<string> => {
        const trimedRegion = this.trimedRegionName(region)

        return this.citiesInRegion[trimedRegion]
      }
    },
  },
  methods: {
    trimedRegionName(region: string): string {
      return region.replace(/\s/g, '')
    },
    oddOrEvenNumber(regionIndex: any): String {
      const oddOrEven = regionIndex % 2 === 0 ? 'even' : 'odd'
      return oddOrEven
    },
    showPipe(cityIndex: number, citiesInRegionLength: number): Boolean {
      return cityIndex + 1 !== citiesInRegionLength
    },
  },
}
</script>

<style lang="scss" scoped>
.regions {
  display: flex;
  justify-content: center;

  &__lists {
    border-top: 1px solid #dce5f5;
    border-bottom: 1px solid #dce5f5;
    width: 60%;
    padding-left: 0px;
  }

  &__list {
    display: flex;
    justify-content: flex-start;
    padding: 7px 10px;
    border-bottom: 1px solid #fff;
    line-height: 1;
  }

  .odd {
    background: #f9fbff;
  }

  .even {
    background: #f0f4fb;
  }

  &__city-list {
    width: 100%;
    height: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  &__region-name {
    font-weight: bold;
    width: 200px;
    padding: 10px;
    margin-bottom: 0px;
  }
}
</style>
