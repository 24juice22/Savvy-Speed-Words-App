import React from "react"

export default function Box(props) {
    const letter = props.boxes[props.rowIndex][props.columnIndex]
    
    return (
        <div 
            className={props.error && props.rowIndex === props.position.rowIndex ? "box row-{props.props.rowNumber}__box error" : "box row-{props.props.rowNumber}__box"} >{letter}</div>
    )
}