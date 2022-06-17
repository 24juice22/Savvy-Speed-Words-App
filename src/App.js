import React from "react"
import Boxrow from "./components/Boxrow"
import Keyboard from "./components/Keyboard"

export default function App() {
  const [boxes, setBoxes] = React.useState(allNewBoxes())
  const [position, setPosition] = React.useState({rowIndex: 0, columnIndex: 0})
  const [hasStarted, setHasStarted] = React.useState(false)
  const [error, setError] = React.useState(false)
  let wordEntered = boxes[position.rowIndex].map(object => object.value).join("")

  let hashOfWord = {}
  let pinkHash = {}
  let blueHash = {}

  let word = "FLAAA"
  let words = ["LFOOF", "AAFFF", "QWERA", "QAERA", "FLAAA", "SCALF", "LFOLF", "FLAME", "APPLE", "MAXAM", "AAAAA"]
  

  for (let i = 0; i < word.length; i++) {
    if (word[i] in hashOfWord)
        hashOfWord[word[i]] += 1;
    else
        hashOfWord[word[i]] = 1;
  }

  function allNewBoxes() {
    const newBoxes = [
      [{value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}],
      [{value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}],
      [{value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}],
      [{value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}],
      [{value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}],
      [{value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}]
    ]
    return newBoxes
  }
  
  const rows = [0, 1, 2, 3, 4, 5]
  const boxRowElements = rows.map(row => 
    <Boxrow error={error} position={position} boxes={boxes} rowIndex={row} key={row}/>
  )

  function startButtonClick() {
    setHasStarted(true)
  }

  function toggleErrorShake() {
    setError(prevError => !prevError)
  }

  function colors() {
    const board = [...boxes]
    for (let i = 0; i < wordEntered.length; i++) {
        if (wordEntered[i] in pinkHash)
            pinkHash[wordEntered[i]] += 0;
        else
            pinkHash[wordEntered[i]] = 0;
        if (wordEntered[i] === word[i]) {
            board[position.rowIndex][i].color = "boxPink"
            setBoxes(board);
            if (pinkHash[wordEntered[i]] >= 1) 
                pinkHash[wordEntered[i]] += 1;
            else
                pinkHash[wordEntered[i]] = 1;
        }
        else if (word.includes(wordEntered[i]) && (hashOfWord[wordEntered[i]] - pinkHash[wordEntered[i]] >= 1) && blueHash[wordEntered[i]] !== 1) {
            board[position.rowIndex][i].color = "boxBlue"
            setBoxes(board);
            if (wordEntered[i] in blueHash)
                blueHash[wordEntered[i]] += 0;
            else
                blueHash[wordEntered[i]] = 1;
        }
        else {
          board[position.rowIndex][i].color = "boxGray"
          setBoxes(board);
        }   
    }
   
    for (let j = wordEntered.length - 1; j >= 0; j--) {
        if (word.includes(wordEntered[j]) && wordEntered[j] !== word[j] && (hashOfWord[wordEntered[j]] - pinkHash[wordEntered[j]] < 1)) {
          board[position.rowIndex][j].color = "boxGray"
          setBoxes(board);
        }
    }
  }

  const startButtonDisplay = {display: hasStarted ? "none" : "block"}

  return (
    <div>
      <h1 className="title">SA<span>VV</span>Y SPEED WORDS</h1>
      <div className="word-area">
        {boxRowElements}  
      </div>
      <div className="message-area flex">
        <button className="btn" style={startButtonDisplay} onClick={startButtonClick}>START</button>
        <p className="message">{error && `"${wordEntered}" is not a Word!`}{(wordEntered === word && boxes[position.rowIndex][0].color !== null) && `You win! The word is "${word}"`}</p>
      </div>
      <Keyboard colors={colors} hasStarted={hasStarted} toggleErrorShake={toggleErrorShake} word={word} words={words} position={position} setPosition={setPosition} boxes={boxes} setBoxes={setBoxes} />
    </div>
  )
}