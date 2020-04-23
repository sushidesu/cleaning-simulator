export type Goods = {
  type: "clothes" | "bedding"
  name: string
  point: number
  price: number
}

export const beddings: Goods[] = [
  {
    type: "bedding",
    name: "羽毛掛け布団シングル・ダブル",
    point: 3,
    price: 3000,
  },
  {
    type: "bedding",
    name: "掛け布団シングル",
    point: 2.5,
    price: 3000,
  },
  {
    type: "bedding",
    name: "掛け布団ダブル",
    point: 3.5,
    price: 3000,
  },
  {
    type: "bedding",
    name: "敷布団シングル",
    point: 3.5,
    price: 3000,
  },
  {
    type: "bedding",
    name: "敷布団ダブル",
    point: 5,
    price: 3000,
  },
  {
    type: "bedding",
    name: "肌掛け",
    point: 1.5,
    price: 2000,
  },
  {
    type: "bedding",
    name: "こたつ掛け",
    point: 2.5,
    price: 2000,
  }
]

export const outer: Goods[] = [
  {
    type: "clothes",
    name: "コート",
    point: 2,
    price: 1650,
  },
  {
    type: "clothes",
    name: "薄手アウター",
    point: 1,
    price: 880,
  },
  {
    type: "clothes",
    name: "厚手アウター",
    point: 2,
    price: 1650,
  },
  {
    type: "clothes",
    name: "スノーウェア(上or下)",
    point: 2,
    price: 1650,
  },
  {
    type: "clothes",
    name: "薄手ゴアテックス",
    point: 1,
    price: 2100,
  },
  {
    type: "clothes",
    name: "厚手ゴアテックス",
    point: 2,
    price: 4000,
  }
]

export const down: Goods[] = []

export const ceremonial: Goods[] = []

export const formal: Goods[] = []

export const options: Goods[] = []
