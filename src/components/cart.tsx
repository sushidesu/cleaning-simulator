import React, { useCallback } from "react"
import { Grid } from "@chakra-ui/core"
import { Goods } from "../models/goods"
import { GoodsCard } from "./goodsCard"

type CartProps = {
  selectedGoods: Goods[]
  setSelectGoods: (value: React.SetStateAction<Goods[]>) => void
}

export const Cart: React.FC<CartProps> = ({ selectedGoods, setSelectGoods }) => {
  const remove = useCallback((index: number) => () => {
    setSelectGoods(prev => prev.filter((_, i) => i !== index))
  }, [setSelectGoods])

  return (
    <Grid
      gap={1}
      templateColumns="repeat(6, 1fr)"
      padding="8px 6px"
      rounded="md"
      backgroundColor="#f5f5f5"
      minHeight="220px"
      width="100%"
    >
    {selectedGoods.map((goods, index) => (
      <GoodsCard
        key={index}
        goods={goods}
        clickAction={remove(index)}
        clickIcon="minus"
        clickLabel="商品を削除"
      />
    ))}
    </Grid>
  )
}
