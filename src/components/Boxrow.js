import React from "react"
import Box from "./Box"

export default function Boxrow(props) {
    const boxIndex = [0, 1, 2, 3, 4]
    const createBoxes = boxIndex.map(index => 
        <Box error={props.error} columnIndex={index} rowIndex={props.rowIndex} position={props.position} boxes={props.boxes} key={index}/>
    )
     

    return (
        <div className="row-{props.rowNumber} flex">
            {createBoxes}
        </div> 
    )
}