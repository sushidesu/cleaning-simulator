import React, { useCallback } from "react"
import { Grid } from "@chakra-ui/core"
import { Goods } from "../data"
import { GoodsCard } from "./goodsCard"

type ResultProps = {
  selectedGoods: Goods[]
  setSelectGoods: (value: React.SetStateAction<Goods[]>) => void
}

export const Result: React.FC<ResultProps> = ({ selectedGoods, setSelectGoods }) => {
  const remove = useCallback((index: number) => () => {
    setSelectGoods(prev => prev.filter((_, i) => i !== index))
  }, [setSelectGoods])

  return (
    <div>
      <Grid templateColumns="repeat(6, 1fr)">
      {selectedGoods.map((goods, index) => (
        <GoodsCard key={index} goods={goods} clickAction={remove(index)} />
      ))}
      </Grid>
      <p>合計</p>
      <p>{ selectedGoods.reduce((acc, goods) => acc + goods.price, 0) }円</p>
      <p>{ selectedGoods.reduce((acc, goods) => acc + goods.point, 0) }ポイント</p>
    </div>
  )
}
