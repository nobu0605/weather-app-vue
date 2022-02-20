export type City = {
  name: string
  weather: string
  weatherIcon: string
  temp_max: number
  temp_min: number
}

export type JapanRegionList = {
  Hokkaido: Array<string>
  Tohoku: Array<string>
  KantoKoshinetsu: Array<string>
  TokaiHokurikuKinki: Array<string>
  ChugokuShikoku: Array<string>
  Kyushu: Array<string>
  Okinawa: Array<string>
  [key: string]: any
}

export type WorldRegionList = {
  NorthAmerica: Array<string>
  SouthAmerica: Array<string>
  Asia: Array<string>
  Australia: Array<string>
  Europe: Array<string>
  Africa: Array<string>
  [key: string]: any
}
