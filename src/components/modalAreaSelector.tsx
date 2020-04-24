import React, { useState, useCallback } from "react"
import styled from "@emotion/styled"
import { Flex, Box, Button, Heading } from "@chakra-ui/core"
import { Area, Areas } from "../models/area"

const Modal = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(235, 235, 235, 0.7);
  z-index: 9999;
`

type ModalAreaSelectorProps = {
  setArea: React.Dispatch<React.SetStateAction<Area>>
}

export const ModalAreaSelector: React.FC<ModalAreaSelectorProps> = ({ setArea }) => {
  const [show, setShow] = useState(true)
  const selectArea = useCallback((area: Area) => () => {
    setArea(area)
    setShow(false)
  }, [setShow, setArea])

  return (
    <Modal justify="center" align="center" hidden={!show}>
      <Box backgroundColor="#fff" padding="30px" rounded="md" m={30}>
        <Heading textAlign="center" as="h2" size="md">お布団の配送先を選択してください</Heading>
        <Flex mt={5} maxW="500px" flexWrap="wrap">
          {Areas.map((area, index) => (
            <Button m={4} key={index} onClick={selectArea(area)}>{ area }</Button>
          ))}
        </Flex>
      </Box>
    </Modal>
  )
}
