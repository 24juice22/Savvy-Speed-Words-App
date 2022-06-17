import React from "react"
import Box from "./Box"

export default function Boxrow({error, rowIndex, position, boxes}) {
    const boxIndex = [0, 1, 2, 3, 4]
    const createBoxes = boxIndex.map(index => 
        <Box error={error} columnIndex={index} rowIndex={rowIndex} position={position} boxes={boxes} key={index}/>
    )
     

    return (
        <div className="flex">
            {createBoxes}
        </div> 
    )
}