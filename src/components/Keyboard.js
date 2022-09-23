import React from "react";
import Key from "./Key";

export default function Keyboard({wordEntered, boxes, setBoxes, position, setPosition, words, word, toggleErrorShake, colors, hasStarted, gameOver, setMessage, keyColor, timeIntervalID, delayedGameOver}) {  
  
    const keysTop = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keysMiddle = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keysBottom = ["Z", "X", "C", "V", "B", "N", "M"];
  
    ////// Insert Chosen Letter into Boxes /////////////
    function insertLetter(letter) {
        if (hasStarted !== true) return;
        if (position.columnIndex > 4) return;
        const board = [...boxes];
        board[position.rowIndex][position.columnIndex].value = letter;
        setBoxes(board);
        setPosition(prevPosition => {
            return {
                ...prevPosition, 
                columnIndex: prevPosition.columnIndex + 1
            }
        });
    }
    
    ///// Make Keyboard Functional /////////////
    const handleKeyboard = React.useCallback((event) => {
        function insert(letter) {
            let newLetter = letter.toLowerCase();
            if (event.key === newLetter) 
                insertLetter(letter)
        }

        if (event.key === "Enter" && !gameOver) {
            enterWord();
        } 
        else if (event.key === "Backspace" || event.key === "Delete") {
            deleteLetter();
        }
        else {
            keysTop.forEach((key) => {
                insert(key);
            })
            keysMiddle.forEach((key) => {
                insert(key);
            })
             keysBottom.forEach((key) => {
                insert(key);
            })
        }
    })

    //////// Listen for Keydown and Clean Up ////////
    React.useEffect(() => {
        document.addEventListener("keydown", handleKeyboard);
        return () => {
            document.removeEventListener("keydown", handleKeyboard);
        }
    }, [handleKeyboard])
    //////////////////////////////////////
    
    function deleteLetter() {
        let newBoard = [...boxes];
        if (position.columnIndex === 0) return; 
        newBoard[position.rowIndex][position.columnIndex - 1].value = "";
        setBoxes(newBoard);
        setPosition(prevPosition => {
            return { 
                ...prevPosition,
                columnIndex: prevPosition.columnIndex - 1,
            }
        });
    }

    function enterWord() {
      if (position.columnIndex !== 5) return;
      checkIfValidWord();  
    }

    function checkIfValidWord() {
        if (words.includes(wordEntered)) {
            if (word !== wordEntered && position.rowIndex !== 5)
                setPosition({rowIndex: position.rowIndex + 1, columnIndex: 0});
            colors();
            if (word !== wordEntered && position.rowIndex === 5) {
                setMessage(`You lose! The word was "${word}"`);
                clearInterval(timeIntervalID);
                setTimeout(delayedGameOver, 1200);
            }
        }
        else {
            toggleErrorShake();
            setTimeout(toggleErrorShake, 610);
        }
    }

    return (
        <div className="keyboard" onKeyDown={handleKeyboard}>
            <div className="keyboard__row">
                {keysTop.map(letter => {
                    return <Key 
                                letter={letter} 
                                key={letter} 
                                keyColor={keyColor} 
                                insertLetter={insertLetter}
                            />
                })}
            </div>
            <div className="keyboard__row">
                {keysMiddle.map(letter => {
                    return <Key 
                                letter={letter} 
                                key={letter} 
                                keyColor={keyColor}
                                insertLetter={insertLetter}
                            />
                })}
            </div>
            <div className="keyboard__row">
                <div className="key key--special key--enter" onClick={enterWord}>ENT</div>
                {keysBottom.map(letter => {
                    return <Key 
                                letter={letter} 
                                key={letter} 
                                keyColor={keyColor}
                                insertLetter={insertLetter}
                            />
                })}
                <div className="key key--special key--delete" onClick={deleteLetter} >DEL</div>
            </div>
        </div> 
    )
}