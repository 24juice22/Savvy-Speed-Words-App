import React from "react"

export default function Key({boxes, setBoxes, keyValue, position, setPosition, hasStarted, keyColor}) {
    let keyIndex = keyColor.map(item => item.value).indexOf(keyValue)
    let insertColor = keyColor[keyIndex].color
    
    function insertLetter() {
        if (hasStarted !== true) return
        if (position.columnIndex > 4) return
        const board = [...boxes]
        board[position.rowIndex][position.columnIndex].value = keyValue
        setBoxes(board)
        setPosition(prevPosition => {
            return {
                ...prevPosition, 
                columnIndex: prevPosition.columnIndex + 1
            }
        })
    }
        
    return (
        <div className="key key-letter" id={insertColor} onClick={insertLetter}>{keyValue}</div>
    )
}