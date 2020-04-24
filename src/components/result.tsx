import React from "react"
import styled from "@emotion/styled"
import { Heading, Box, Grid, Flex, Text } from "@chakra-ui/core"
import { Goods } from "../models/goods"
import { Area, POSTAGES } from "../models/area"
import { AreaSelector, AreaSelectorProps } from "./areaSelector"

type ResultProps = {
  selectedGoods: Goods[]
  type: "布団袋小" | "布団袋大"
  selectedArea: Area
  setSelectedArea: AreaSelectorProps["setSelectedArea"]
}

const GridContainer = styled(Grid)`
`

export const Result: React.FC<ResultProps> = ({ selectedGoods, type, selectedArea, setSelectedArea }) => {
  const totalGoodsPrice = selectedGoods.reduce((acc, goods) => acc + goods.price, 0)
  const postage = type === "布団袋小" ? POSTAGES[selectedArea].priceSmall : POSTAGES[selectedArea].priceLarge
  const totalPrice = totalGoodsPrice + postage * 2

  return (
    <Box maxWidth="680px" margin="30px auto" padding="10px" borderWidth="1px" rounded="md">
      <Heading textAlign="center" as="h2" size="md">診断結果</Heading>

      <GridContainer mt={3} templateColumns="20% 1fr 20%" templateRows="repeat(2, 1fr)" rowGap={1} alignItems="center">
        <Text textAlign="center">クリーニング料金</Text>
        <Text margin="auto">{`${selectedGoods.length} 点`}</Text>
        <Text textAlign="right">{`計 ${totalGoodsPrice.toLocaleString()} 円`}</Text>

        <Text textAlign="center">往復送料</Text>
        <Flex margin="auto" direction="column">
          <Flex direction="row" justify="flex-start" align="center">
            <Text mr={5}>タイプ:</Text>
            <Text textAlign="center">{type}</Text>
          </Flex>
          <Flex direction="row" justify="flex-start" align="center">
            <Text mr={3}>配送先: </Text>
            <AreaSelector selectedArea={selectedArea} setSelectedArea={setSelectedArea} />
          </Flex>
        </Flex>
        <Text textAlign="right">{`${postage.toLocaleString()} 円 × 2`}</Text>
      </GridContainer>

      <Flex mt={5} justify="flex-end" borderTop="1px solid #ccc">
        <Text pt={3} fontWeight="bold" fontSize="1.3em">{`合計 ${totalPrice.toLocaleString()} 円`}</Text>
      </Flex>
    </Box>
  )
}
