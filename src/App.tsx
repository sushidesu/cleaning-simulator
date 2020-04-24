import React from "react"
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core"
import { Simulator } from "./components/simulator"

const fontfamily = '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Meiryo, "メイリオ", "Noto Sans Japanese", sans-serif'

const custom = {
  ...theme,
  fonts: {
    body: fontfamily,
    heading: fontfamily,
    mono: "Menlo, monospace",
  }
}

export default () => {
  return (
    <ThemeProvider theme={custom}>
      <CSSReset />
      <Simulator />
    </ThemeProvider>
  )
}
