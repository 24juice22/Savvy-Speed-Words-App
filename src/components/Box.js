import React, { useContext } from "react"
import { SavvyContext } from "../contexts/SavvyContext";

export default function Box({columnIndex, rowIndex}) {
    const { boxes, position, error } = useContext(SavvyContext)

    const letter = boxes[rowIndex][columnIndex];
    
    return (
        <div 
            className={error && rowIndex === position.rowIndex ? 
                        "box error" : 
                        position.rowIndex > rowIndex ? 
                            `box ${letter.color} boxFlip` : 
                            "box"
            }
        >
            {letter.value}
        </div>
    )
}
