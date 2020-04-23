import React, { useState, useCallback } from "react"
import { IconButton, Divider } from "@chakra-ui/core"
import { Goods, beddings } from "../data"
import { Result } from "./result"

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

      <ul>
        {beddings.map((goods, i) => (
          <li key={i}>{ goods.name }, { goods.price }円, {goods.point}ポイント <IconButton size="sm" onClick={select(goods)} icon="add" aria-label="商品を追加" /></li>
        ))}
      </ul>
    </div>
  )
}
