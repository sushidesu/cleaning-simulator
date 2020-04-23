import React from "react"
import { Box, Flex, Image, IconButton, Avatar } from "@chakra-ui/core"
import { Goods } from "../data"
import Futon from "../images/futon.jpg"

type GoodsProps = {
  goods: Goods
  clickAction: () => void
}

export const GoodsCard: React.FC<GoodsProps> = ({ goods, clickAction }) => (
  <Flex
    direction="column"
    borderWidth="1px"
    rounded="md"
    maxWidth="180px"
    position="relative"
  >
    {/* icon */}
    <Flex
      height="90px"
      align="center"
      justify="center"
    >
      <Box position="relative">
        <Avatar
          position="absolute"
          top="-4px"
          right="-2px"
          name={goods.point.toString()}
          size="xs"
          fontSize="1.08em"
          backgroundColor="#abd7f0"
          color="#fff"
        />
        <Image src={Futon} />
      </Box>
    </Flex>

    {/* content */}
    <Box flex="1 1 auto">
      <Flex direction="column" justify="space-between" height="100%" padding="6px 8px">
        <Box>
          {goods.name}
        </Box>
        <Box mt={2}>
          {`${goods.price}円`}
        </Box>
      </Flex>

      <IconButton
        position="absolute"
        bottom="0"
        right="0"
        size="sm"
        icon="add"
        aria-label="商品を追加"
        onClick={clickAction}
      />
    </Box>
  </Flex>
)
