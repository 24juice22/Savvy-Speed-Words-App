import React from "react"
import Key from "./Key"

export default function Keyboard({boxes, setBoxes, position, setPosition, words, word, toggleErrorShake, colors, hasStarted, gameOver, setMessage, keyColor, timeIntervalID, setGameOver, delayedGameOver}) {  
    const newBoard = [...boxes]
    let wordEntered = (newBoard[position.rowIndex].map(object => object.value).join(""))

    const keysTop = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const keysMiddle = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const keysBottom = ["Z", "X", "C", "V", "B", "N", "M"]
  
    const handleKeyboard = React.useCallback((event) => {
        function insert(key) {
            let newKey = key.toLowerCase()
            if (event.key === newKey) {
                if (hasStarted !== true) return
                if (position.columnIndex > 4) return
                const board = [...boxes]
                board[position.rowIndex][position.columnIndex].value = key
                setBoxes(board)
                setPosition(prevPosition => {
                    return {
                        ...prevPosition, 
                        columnIndex: prevPosition.columnIndex + 1
                    }
                })
            } 
        }

        if (event.key === "Enter" && !gameOver) {
            enterWord()
        } 
        else if (event.key === "Backspace" || event.key === "Delete") {
            deleteLetter()
        }
        else {
            keysTop.forEach((key) => {
                insert(key)
            })
            keysMiddle.forEach((key) => {
                insert(key)
             })
             keysBottom.forEach((key) => {
                insert(key)
             })
        }
    })

    React.useEffect(() => {
        document.addEventListener("keydown", handleKeyboard)
        return () => {
            document.removeEventListener("keydown", handleKeyboard)
        }
    }, [handleKeyboard])

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
            if (word !== wordEntered && position.rowIndex === 5) {
                setMessage(`You lose! The word was "${word}"`)
                clearInterval(timeIntervalID)
                setTimeout(delayedGameOver, 1200)
            }
        }
        else {
            toggleErrorShake()
            setTimeout(toggleErrorShake, 610)
        }
    }

    return (
        <div className="keyboard" onKeyDown={handleKeyboard}>
            <div className="flex keyboard-top">
                {keysTop.map(letter => <Key hasStarted={hasStarted} position={position} setPosition={setPosition} setBoxes={setBoxes} boxes={boxes} keyValue={letter} key={letter} keyColor={keyColor} />)}
            </div>
            <div className="flex keyboard-middle">
                {keysMiddle.map(letter => <Key hasStarted={hasStarted} position={position} setPosition={setPosition} setBoxes={setBoxes} boxes={boxes} keyValue={letter} key={letter} keyColor={keyColor}/>)}
            </div>
            <div className="flex keyboard-bottom">
                <div className="key key-special key-enter" onClick={enterWord}>ENT</div>
                {keysBottom.map(letter => <Key hasStarted={hasStarted} position={position} setPosition={setPosition} setBoxes={setBoxes} boxes={boxes} keyValue={letter} key={letter} keyColor={keyColor}/>)}
                <div className="key key-special key-delete" onClick={deleteLetter} >DEL</div>
            </div>
        </div> 
    )
}