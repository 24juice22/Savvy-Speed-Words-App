import React from "react"
import Box from "./Box"

export default function Boxrow(props) {
    const boxIndex = [0, 1, 2, 3, 4]
    const createRowBoxes = boxIndex.map(item => <Box boxIndex={item} rowNumber={props.rowNumber} key={item} />)
    

    return (
        <div className="row-{props.rowNumber} flex">
            {createRowBoxes}
        </div> 
    )
}