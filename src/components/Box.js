import React from "react"

export default function Box({boxes, columnIndex, rowIndex, position, error}) {
    const letter = boxes[rowIndex][columnIndex];
    
    return (
        <div 
            className={error && rowIndex === position.rowIndex ? 
                        "box error" : 
                        position.rowIndex > rowIndex ? 
                        "box boxFlip" : 
                        "box"
            }
            id={letter.color}
        >
            {letter.value}
        </div>
    )
}
