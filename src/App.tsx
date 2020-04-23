import React from "react"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { Simulator } from "./components/simulator"

export default () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Simulator />
    </ThemeProvider>
  )
}
