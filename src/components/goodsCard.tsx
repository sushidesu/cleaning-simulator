import React from "react"
import { Box, Flex, Image, IconButton, IconButtonProps } from "@chakra-ui/core"
import { Goods } from "../models/goods"
import Futon from "../images/futon.jpg"

type GoodsProps = {
  goods: Goods
  clickAction: () => void
  clickIcon: IconButtonProps["icon"]
  clickLabel: IconButtonProps["aria-label"]
}

export const GoodsCard: React.FC<GoodsProps> = ({ goods, clickAction, clickIcon, clickLabel }) => (
  <Flex
    direction="column"
    borderWidth="1px"
    rounded="md"
    maxWidth="180px"
    position="relative"
    backgroundColor="#fff"
  >
    {/* icon */}
    <Flex
      height="90px"
      align="center"
      justify="center"
    >
      <Box position="relative">
        <Flex
          position="absolute"
          top="-6px"
          right="-4px"
          size="xs"
          fontSize="1.08em"
          backgroundColor="#abd7f0"
          color="#fff"
          fontWeight="semibold"
          width="30px"
          height="30px"
          borderRadius="50%"
          justify="center"
          align="center"
        >{goods.point}</Flex>
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
          {`${goods.price.toLocaleString()} 円`}
        </Box>
      </Flex>

      <IconButton
        position="absolute"
        bottom="0"
        right="0"
        size="sm"
        icon={clickIcon}
        aria-label={clickLabel}
        onClick={clickAction}
      />
    </Box>
  </Flex>
)
