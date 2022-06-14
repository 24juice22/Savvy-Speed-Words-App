import React from "react"

export default function Box(props) {
    const letter = props.boxes[props.rowIndex][props.columnIndex]
    
    return (
        <div 
            className="box row-{props.props.rowNumber}__box">{letter}</div>
    )
}