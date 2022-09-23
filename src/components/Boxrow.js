import React from "react";
import Box from "./Box";

export default function Boxrow({rowIndex}) {
    const boxIndex = [0, 1, 2, 3, 4];
    const createBoxes = boxIndex.map(index => 
        <Box rowIndex={rowIndex} columnIndex={index} key={index}/>
    );
     

    return (
        <div className="flex">
            {createBoxes}
        </div> 
    )
}