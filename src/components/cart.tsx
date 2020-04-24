import React, { useCallback } from "react"
import { Grid, Box } from "@chakra-ui/core"
import { Goods } from "../models/goods"
import { GoodsCard } from "./goodsCard"
import { Container } from "./container"

type CartProps = {
  selectedGoods: Goods[]
  setSelectGoods: (value: React.SetStateAction<Goods[]>) => void
}

export const Cart: React.FC<CartProps> = ({ selectedGoods, setSelectGoods }) => {
  const remove = useCallback((index: number) => () => {
    setSelectGoods(prev => prev.filter((_, i) => i !== index))
  }, [setSelectGoods])

  return (
    <Box padding="8px 6px" rounded="md" backgroundColor="#f5f5f5">
      <Container containerSize="large">
        <Grid
          gap={1}
          templateColumns="repeat(10, 1fr)"
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
      </Container>
    </Box>

  )
}
