import React, { useState, useCallback } from "react"
import { Grid, Divider, Heading } from "@chakra-ui/core"
import { Goods, beddings } from "../models/goods"
import { Area } from "../models/area"
import { Cart } from "./cart"
import { Result } from "./result"
import { GoodsCard } from "./goodsCard"
import { AreaSelector } from "./areaSelector"

export const Simulator = () => {
  const [selected, setSelected] = useState<Goods[]>([])
  const selectGoods = useCallback((goods: Goods) => () => {
    setSelected(prev => [...prev, goods])
  }, [setSelected])

  const [area, setArea] = useState<Area>("北海道")
  const selectArea = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value as Area
    setArea(selected)
  }, [])

  return (
    <div>
      <Heading m={4} size="lg" as="h1">料金シミュレーター</Heading>

      <Cart selectedGoods={selected} setSelectGoods={setSelected} />

      <Result selectedGoods={selected} />

      <AreaSelector selectedArea={area} setSelectedArea={selectArea} />

      <Divider margin="30px 0" />

      <Grid gap={3} templateColumns="repeat(4, 1fr)">
        {beddings.map((goods, i) => (
          <GoodsCard
            key={i}
            goods={goods}
            clickAction={selectGoods(goods)}
            clickIcon="add"
            clickLabel="商品を追加"
          />
        ))}
      </Grid>
    </div>
  )
}
