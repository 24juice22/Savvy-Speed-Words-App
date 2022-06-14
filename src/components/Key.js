import React from "react"

export default function Key({boxes, setBoxes, keyValue, position, setPosition}) {
    
    function insertLetter() {
        const board = [...boxes]
        board[position.rowIndex][position.columnIndex] = keyValue
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