import React from "react"
import { Heading, Box, Text } from "@chakra-ui/core"
import { Goods } from "../models/goods"

type ResultProps = {
  selectedGoods: Goods[]
}

export const Result: React.FC<ResultProps> = ({ selectedGoods }) => {

  return (
    <Box margin="30px 8px" padding="10px" borderWidth="1px" rounded="md">
      <Heading as="h2" size="md">合計</Heading>
      <Text m={1}>{ selectedGoods.reduce((acc, goods) => acc + goods.point, 0) } ポイント</Text>
      <Text m={1}>{ selectedGoods.reduce((acc, goods) => acc + goods.price, 0) } 円</Text>
    </Box>
  )
}
