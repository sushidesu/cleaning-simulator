import React, { useCallback } from "react"
import { Grid, Heading, Box, Text } from "@chakra-ui/core"
import { Goods } from "../goods"
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
      <Box margin="30px 8px" padding="10px" borderWidth="1px" rounded="md">
        <Heading as="h2" size="md">合計</Heading>
        <Text m={1}>{ selectedGoods.reduce((acc, goods) => acc + goods.point, 0) } ポイント</Text>
        <Text m={1}>{ selectedGoods.reduce((acc, goods) => acc + goods.price, 0) } 円</Text>
      </Box>
    </div>
  )
}
