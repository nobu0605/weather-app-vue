import axios from 'axios'
import { City } from '../types/city'

export function getCityWeather(
  cities: Array<string>,
  cityCardInfo: Array<City>
): Array<City> {
  cities.forEach(async (city, index) => {
    await axios
      .post(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${process.env.WEATHER_MAP_API_KEY}`
      )
      .then((response: any) => {
        cityCardInfo.push({
          name: city,
          weather: response.data.weather[0].description,
          weatherIcon: response.data.weather[0].icon,
          temp_max: response.data.main.temp_max,
          temp_min: response.data.main.temp_min,
        })
        // Index number starts from 0. So I added 1.
        if (cities.length === index + 1) {
          return cityCardInfo
        }
      })
      .catch((e) => {
        console.error(e)
      })
  })
  return cityCardInfo
}
