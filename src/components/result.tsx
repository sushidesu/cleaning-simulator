import React from "react"
import styled from "@emotion/styled"
import { Heading, Box, Flex, Text } from "@chakra-ui/core"
import { Goods } from "../models/goods"
import { Area, POSTAGES } from "../models/area"
import { AreaSelector, AreaSelectorProps } from "./areaSelector"

type ResultProps = {
  selectedGoods: Goods[]
  type: "布団袋小" | "布団袋大"
  selectedArea: Area
  setSelectedArea: AreaSelectorProps["setSelectedArea"]
}

const ResultCard = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 200px;
  min-width: 180px;
  padding: 10px;

  border-radius: 10px;
  border: 1px solid #ccc;

  .title, .content,
  .result {
    text-align: center;
  }
  .title {
    font-size: 1.2em;
    font-weight: bolder;
  }
  .content {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .result {

  }
`

export const Result: React.FC<ResultProps> = ({ selectedGoods, type, selectedArea, setSelectedArea }) => {
  const totalGoodsPrice = selectedGoods.reduce((acc, goods) => acc + goods.price, 0)
  const postage = type === "布団袋小" ? POSTAGES[selectedArea].priceSmall : POSTAGES[selectedArea].priceLarge
  const totalPrice = totalGoodsPrice + postage * 2

  return (
    <Box
      width="fit-content"
      margin="30px auto"
      padding="12px 20px"
      rounded="lg"
      boxShadow="rgba(67, 63, 108, 0.1) 0px 10px 40px 2px"
    >
      <Heading textAlign="center" as="h2" size="md">診断結果</Heading>

      <Flex mt={5}>
        <ResultCard mr={3}>
          <Text className="title">ポイント</Text>
          <Box className="content">
            <Text>{`${selectedGoods.reduce((total, cur) => total + cur.point, 0)} ポイント`}</Text>
          </Box>
          <Text className="result">{type}</Text>
        </ResultCard>

        <ResultCard mr={3}>
          <Text className="title">往復送料</Text>
          <Flex className="content" margin="auto" direction="column" style={{ alignItems: "flex-start" }}>
            <Flex direction="row" justify="flex-start" align="center">
              <Text mr={5}>タイプ:</Text>
              <Text textAlign="center">{type}</Text>
            </Flex>
            <Flex direction="row" justify="flex-start" align="center">
              <Text mr={3}>配送先: </Text>
              <AreaSelector selectedArea={selectedArea} setSelectedArea={setSelectedArea} />
            </Flex>
          </Flex>
          <Text className="result">{`${postage.toLocaleString()} 円 × 2`}</Text>
        </ResultCard>

        <ResultCard>
          <Text className="title">クリーニング料金</Text>
          <Text className="content">{`${selectedGoods.length} 点`}</Text>
          <Text className="result">{`計 ${totalGoodsPrice.toLocaleString()} 円`}</Text>
        </ResultCard>
      </Flex>

      <Flex mt={5} justify="flex-end" borderTop="1px solid #ccc">
        <Text pt={3} fontWeight="bold" fontSize="1.3em">{`合計 ${totalPrice.toLocaleString()} 円`}</Text>
      </Flex>
    </Box>
  )
}
