import React from "react"
import { Box, Select } from "@chakra-ui/core"
import { Area, Areas } from "../models/area"


type AreaSelectorProps = {
  selectedArea: Area,
  setSelectedArea: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const AreaSelector: React.FC<AreaSelectorProps> = ({ selectedArea, setSelectedArea }) => (
  <Box width="fit-content">
    <Select value={selectedArea} onChange={setSelectedArea}>
      {Areas.map((area, i) => (
        <option key={i} value={area}>{ area }</option>
      ))}
    </Select>
  </Box>
)
