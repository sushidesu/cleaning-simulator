import React, { useState, useCallback } from "react"
import styled from "styled-components"
import { Goods, beddings } from "./data"
import { Result } from "./components/result"

const PointWrapper = styled.div`
  display: inline-block;
  position: relative;
  background-color: #dadada;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const Point: React.FC = ({ children }) => (
  <PointWrapper>
    <span>{ children }</span>
  </PointWrapper>
)

export default () => {
  const [selected, setSelected] = useState<Goods[]>([])
  const select = useCallback((goods: Goods) => () => {
    setSelected(prev => [...prev, goods])
  }, [setSelected])

  return (
    <div>
      <h1>Cleaning Simulator</h1>

      <Result selectedGoods={selected} setSelectGoods={setSelected} />

      <hr />

      <ul>
        {beddings.map((goods, i) => (
          <li key={i}>{ goods.name }, { goods.price }円 <Point>{goods.point}</Point><button onClick={select(goods)}>+</button></li>
        ))}
      </ul>
    </div>
  )
}
