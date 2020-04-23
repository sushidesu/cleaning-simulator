import React, { useState, useCallback } from "react"
import { Grid, Divider } from "@chakra-ui/core"
import { Goods, beddings } from "../data"
import { Result } from "./result"
import { GoodsCard } from "./goodsCard"

export const Simulator = () => {
  const [selected, setSelected] = useState<Goods[]>([])
  const select = useCallback((goods: Goods) => () => {
    setSelected(prev => [...prev, goods])
  }, [setSelected])

  return (
    <div>
      <h1>Cleaning Simulator</h1>

      <Result selectedGoods={selected} setSelectGoods={setSelected} />

      <Divider />

      <Grid gap={3} templateColumns="repeat(4, 1fr)">
        {beddings.map((goods, i) => (
          <GoodsCard key={i} goods={goods} clickAction={select(goods)} />
        ))}
      </Grid>
    </div>
  )
}