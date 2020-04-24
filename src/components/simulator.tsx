import React, { useState, useCallback } from "react"
import { Grid, Divider, Heading } from "@chakra-ui/core"
import { Goods, beddings } from "../goods"
import { Result } from "./result"
import { GoodsCard } from "./goodsCard"
import { AreaSlector } from "./areaSelector"

export const Simulator = () => {
  const [selected, setSelected] = useState<Goods[]>([])
  const select = useCallback((goods: Goods) => () => {
    setSelected(prev => [...prev, goods])
  }, [setSelected])

  return (
    <div>
      <Heading m={4} size="lg" as="h1">料金シミュレーター</Heading>

      <Result selectedGoods={selected} setSelectGoods={setSelected} />

      <AreaSlector />

      <Divider margin="30px 0" />

      <Grid gap={3} templateColumns="repeat(4, 1fr)">
        {beddings.map((goods, i) => (
          <GoodsCard
            key={i}
            goods={goods}
            clickAction={select(goods)}
            clickIcon="add"
            clickLabel="商品を追加"
          />
        ))}
      </Grid>
    </div>
  )
}
