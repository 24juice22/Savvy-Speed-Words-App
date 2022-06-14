import React from "react"
import Key from "./Key"

export default function Keyboard(props) {  
    const keysTop = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const keysMiddle = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const keysBottom = ["Z", "X", "C", "V", "B", "N", "M"]
  
    function deleteLetter() {
        if (props.position.columnIndex === 0) return 
        const newBoard = [...props.boxes]
        newBoard[props.position.rowIndex][props.position.columnIndex - 1] = ""
        props.setBoxes(newBoard)
        props.setPosition(prevPosition => {
            return { 
                ...prevPosition,
                columnIndex: prevPosition.columnIndex - 1,
            }
        })
    }

    function enterWord() {
      if (props.position.columnIndex !== 5) return
      props.setPosition({rowIndex: props.position.rowIndex + 1, columnIndex: 0})  
    }

    return (
        <div className="keyboard">
            <div className="flex keyboard-top">
                {keysTop.map(letter => <Key position={props.position} setPosition={props.setPosition} setBoxes={props.setBoxes} boxes={props.boxes} keyValue={letter} key={letter} />)}
            </div>
            <div className="flex keyboard-middle">
                {keysMiddle.map(letter => <Key position={props.position} setPosition={props.setPosition} setBoxes={props.setBoxes} boxes={props.boxes} keyValue={letter} key={letter} />)}
            </div>
            <div className="flex keyboard-bottom">
                <div className="key key-special key-enter" onClick={enterWord}>ENTER</div>
                {keysBottom.map(letter => <Key position={props.position} setPosition={props.setPosition} setBoxes={props.setBoxes} boxes={props.boxes} keyValue={letter} key={letter} />)}
                <div className="key key-special key-delete" onClick={deleteLetter} >DELETE</div>
            </div>
        </div> 
    )
}