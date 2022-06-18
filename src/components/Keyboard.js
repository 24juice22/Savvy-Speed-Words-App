import React from "react"
import Key from "./Key"

export default function Keyboard({boxes, setBoxes, position, setPosition, words, word, toggleErrorShake, colors, hasStarted, setMessage}) {  
    const newBoard = [...boxes]
    let wordEntered = (newBoard[position.rowIndex].map(object => object.value).join(""))

    const keysTop = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const keysMiddle = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const keysBottom = ["Z", "X", "C", "V", "B", "N", "M"]
  
    function deleteLetter() {
        if (position.columnIndex === 0) return 
        newBoard[position.rowIndex][position.columnIndex - 1].value = ""
        setBoxes(newBoard)
        setPosition(prevPosition => {
            return { 
                ...prevPosition,
                columnIndex: prevPosition.columnIndex - 1,
            }
        })
    }

    function enterWord() {
      if (position.columnIndex !== 5) return
      checkIfValidWord()  
    }

    function checkIfValidWord() {
        if (words.includes(wordEntered)) {
            if (word !== wordEntered && position.rowIndex !== 5)
                setPosition({rowIndex: position.rowIndex + 1, columnIndex: 0})
            colors()
            if (word !== wordEntered && position.rowIndex === 5)
                setMessage(`You lose! The word was "${word}"`)
        }
        else {
            toggleErrorShake()
            setTimeout(toggleErrorShake, 610)
        }
    }

    return (
        <div className="keyboard">
            <div className="flex keyboard-top">
                {keysTop.map(letter => <Key hasStarted={hasStarted} position={position} setPosition={setPosition} setBoxes={setBoxes} boxes={boxes} keyValue={letter} key={letter} />)}
            </div>
            <div className="flex keyboard-middle">
                {keysMiddle.map(letter => <Key hasStarted={hasStarted} position={position} setPosition={setPosition} setBoxes={setBoxes} boxes={boxes} keyValue={letter} key={letter} />)}
            </div>
            <div className="flex keyboard-bottom">
                <div className="key key-special key-enter" onClick={enterWord}>ENTER</div>
                {keysBottom.map(letter => <Key hasStarted={hasStarted} position={position} setPosition={setPosition} setBoxes={setBoxes} boxes={boxes} keyValue={letter} key={letter} />)}
                <div className="key key-special key-delete" onClick={deleteLetter} >DELETE</div>
            </div>
        </div> 
    )
}