import React from "react"
import { Box, BoxProps } from "@chakra-ui/core"

type ContainerProps = {
  containerSize: "large" | "medium"
} & BoxProps

export const Container: React.FC<ContainerProps> = ({ containerSize, ...rest }) => (
  <Box maxWidth={containerSize === "medium" ? "900px" : "1400px"} margin="0 auto" {...rest}/>
)
