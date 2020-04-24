
export type Area = "北海道" | "北東北" | "南東北" | "関東信越" | "北陸中部" | "関西" | "中国" | "四国" | "九州" | "沖縄"

export const Areas: Area[] = [
  "北海道",
  "北東北",
  "南東北",
  "関東信越",
  "北陸中部",
  "関西",
  "中国",
  "四国",
  "九州",
  "沖縄",
]

type Postage = {
  [area in Area]: {
    area: Area
    priceSmall: number
    priceLarge: number
  }
}

export const POSTAGES: Postage = {
  "北海道": {
    area: "北海道",
    priceSmall: 750,
    priceLarge: 2111,
  },
  "北東北": {
    area: "北東北",
    priceSmall: 1600,
    priceLarge: 2668,
  },
  "南東北": {
    area: "南東北",
    priceSmall: 1700,
    priceLarge: 2718,
  },
  "関東信越": {
    area: "関東信越",
    priceSmall: 1800,
    priceLarge: 3008,
  },
  "北陸中部": {
    area: "北陸中部",
    priceSmall: 1900,
    priceLarge: 3010,
  },
  "関西": {
    area: "関西",
    priceSmall: 2400,
    priceLarge: 3301,
  },
  "中国": {
    area: "中国",
    priceSmall: 2500,
    priceLarge: 3404,
  },
  "四国": {
    area: "四国",
    priceSmall: 2600,
    priceLarge: 3268,
  },
  "九州": {
    area: "九州",
    priceSmall: 2700,
    priceLarge: 3648,
  },
  "沖縄": {
    area: "沖縄",
    priceSmall: 4300,
    priceLarge: 5475,
  }
}
