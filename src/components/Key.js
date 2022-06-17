import React from "react"

export default function Key({boxes, setBoxes, keyValue, position, setPosition, hasStarted}) {
    
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
        <div className="key key-letter" onClick={insertLetter}>{keyValue}</div>
    )
}