<template>
  <NuxtLink :to="{ path: '/five-days-forecast?city={{city.name}}' }">
    <li :class="`cities__${cityNameForStyle}`">
      <span>{{ city.name }}</span>
      <NuxtImg
        :src="`https://openweathermap.org/img/wn/${city.weatherIcon}@2x.png`"
        alt="weather icon"
        quality="70"
        width="40"
        height="40"
        sizes="md:100% lg:40px"
      />
      <span class="font-bold mb-1.25 mt-1.25 text-black">
        <span class="text-red-600">{{ tempMax }}</span>
        &nbsp;/&nbsp;
        <span class="text-blue-600">{{ tempMin }}</span>
      </span>
    </li>
  </NuxtLink>
</template>

<script lang="ts">
import { PropType } from 'vue'

type Props = {
  name: string
  weatherIcon: string
  temp_max: number
  temp_min: number
}

export default {
  name: 'CityCard',
  props: {
    city: {
      type: Object as PropType<Props>,
      required: true,
    },
    keyNumber: {
      type: Number,
      required: false,
      default: 0,
    },
    nameForStyle: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    tempMax(): Number {
      return Math.floor(this.city.temp_max)
    },
    tempMin(): Number {
      return Math.floor(this.city.temp_min)
    },
    cityNameForStyle(): String {
      const name = this.nameForStyle ? this.nameForStyle : this.city.name
      return name
    },
  },
}
</script>

<style>
.cities__Sapporo {
  top: 50px;
  right: 200px;
}
.cities__Kushiro {
  top: 100px;
  right: 50px;
}
.cities__Sendai {
  top: 250px;
  right: 100px;
}
.cities__Niigata {
  top: 200px;
  right: 250px;
}
.cities__Tokyo {
  top: 380px;
  right: 120px;
}
.cities__Kanazawa {
  top: 320px;
  right: 310px;
}
.cities__Nagoya {
  top: 440px;
  right: 220px;
}
.cities__Osaka {
  top: 440px;
  right: 330px;
}
.cities__Hiroshima {
  top: 340px;
  right: 440px;
}
.cities__Kochi {
  top: 480px;
  right: 440px;
}
.cities__Fukuoka {
  top: 380px;
  right: 540px;
}
.cities__Kagoshima {
  top: 550px;
  right: 560px;
}
.cities__Naha {
  top: 560px;
  right: 110px;
}
</style>
