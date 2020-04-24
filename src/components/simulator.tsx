import React, { useState, useCallback, useMemo } from "react"
import { Grid, Divider, Heading } from "@chakra-ui/core"
import { Goods, beddings } from "../models/goods"
import { Area } from "../models/area"
import { Cart } from "./cart"
import { Result } from "./result"
import { GoodsCard } from "./goodsCard"

export const Simulator = () => {
  const [goods, setGoods] = useState<Goods[]>([])
  const selectGoods = useCallback((goods: Goods) => () => {
    setGoods(prev => [...prev, goods])
  }, [setGoods])

  const [area, setArea] = useState<Area>("北海道")
  const selectArea = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value as Area
    setArea(selected)
  }, [setArea])

  const shippingType = useMemo((): "布団袋小" | "布団袋大" => {
    return goods.reduce((total, cur) => total + cur.point , 0) <= 3
      ? "布団袋小"
      : "布団袋大"
  }, [goods])

  return (
    <div>
      <Heading m={4} size="lg" as="h1">料金シミュレーター</Heading>

      <Cart selectedGoods={goods} setSelectGoods={setGoods} />

      <Result
        selectedGoods={goods}
        selectedArea={area}
        setSelectedArea={selectArea}
        type={shippingType}
      />

      <Divider margin="30px 0" />

      <Grid gap={3} templateColumns="repeat(4, 1fr)">
        {beddings.map((v, i) => (
          <GoodsCard
            key={i}
            goods={v}
            clickAction={selectGoods(v)}
            clickIcon="add"
            clickLabel="商品を追加"
          />
        ))}
      </Grid>
    </div>
  )
}
