import React from "react"
import Boxrow from "./components/Boxrow"
import Keyboard from "./components/Keyboard"

export default function App() {
  const [boxes, setBoxes] = React.useState(allNewBoxes())
  const [position, setPosition] = React.useState({rowIndex: 0, columnIndex: 0})
  const [keyColor, setKeyColor] = React.useState(allNewKeys())
  const [hasStarted, setHasStarted] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [message, setMessage] = React.useState("")
  const [timer, setTimer] = React.useState("")
  const [timeIntervalID, setTimeIntervalID] = React.useState(0)

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

  function allNewKeys() {
    const newKeys = [
      {value: "Q", color: null}, {value: "W", color: null}, {value: "E", color: null}, {value: "R", color: null},
      {value: "T", color: null}, {value: "Y", color: null}, {value: "U", color: null}, {value: "I", color: null},
      {value: "O", color: null}, {value: "P", color: null}, {value: "A", color: null}, {value: "S", color: null},
      {value: "D", color: null}, {value: "F", color: null}, {value: "G", color: null}, {value: "H", color: null},
      {value: "J", color: null}, {value: "K", color: null}, {value: "L", color: null}, {value: "Z", color: null},
      {value: "X", color: null}, {value: "C", color: null}, {value: "V", color: null}, {value: "B", color: null},
      {value: "N", color: null}, {value: "M", color: null}
    ]
    return newKeys
  }
  
  const rows = [0, 1, 2, 3, 4, 5]
  const boxRowElements = rows.map(row => 
    <Boxrow error={error} position={position} boxes={boxes} rowIndex={row} key={row}/>
  )

  function startButtonClick() {
    setHasStarted(true)
    let startDate = new Date().getTime();
    let countUpInterval = setInterval(countUp, 100, startDate)
    setTimeIntervalID(countUpInterval)
  }

  function countUp(beginningDate) {
    let timeIncreaseDate = new Date().getTime();

    let distance = timeIncreaseDate - beginningDate;

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((distance % 1000) / 100);

    let displayDistance = minutes + "m " + seconds + "." + milliseconds + "s ";
    setTimer(prevTimer => displayDistance)
  }

  function toggleErrorShake() {
    setError(prevError => !prevError)
    setMessage(prevMessage => {
      if (prevMessage === "") 
        return (`"${wordEntered}" is not a Word!`)     
      else 
        return ("")
    })
  }

  function colors() {
    const board = [...boxes]
    const keyboardColor = [...keyColor]
    for (let i = 0; i < wordEntered.length; i++) {
        let index = keyboardColor.map(item => item.value).indexOf(wordEntered[i])
        if (wordEntered[i] in pinkHash)
            pinkHash[wordEntered[i]] += 0;
        else
            pinkHash[wordEntered[i]] = 0;
        if (wordEntered[i] === word[i]) {
            board[position.rowIndex][i].color = "boxPink"
            setBoxes(board);
            keyboardColor[index].color = "keyPink"
            setKeyColor(keyboardColor)
            if (pinkHash[wordEntered[i]] >= 1) 
                pinkHash[wordEntered[i]] += 1;
            else
                pinkHash[wordEntered[i]] = 1;
        }
        else if (word.includes(wordEntered[i]) && (hashOfWord[wordEntered[i]] - pinkHash[wordEntered[i]] >= 1) && blueHash[wordEntered[i]] !== 1) {
            board[position.rowIndex][i].color = "boxBlue"
            setBoxes(board);
            if (keyboardColor[index].color !== "keyPink") 
                keyboardColor[index].color = "keyBlue"
            setKeyColor(keyboardColor)
            if (wordEntered[i] in blueHash)
                blueHash[wordEntered[i]] += 0;
            else
                blueHash[wordEntered[i]] = 1;
        }
        else {
          board[position.rowIndex][i].color = "boxGray"
          setBoxes(board);
          if (keyboardColor[index].color !== "keyPink" && keyboardColor[index].color !== "keyBlue")
              keyboardColor[index].color = "keyGray"
          setKeyColor(keyboardColor)
        }   
    }
   
    for (let j = wordEntered.length - 1; j >= 0; j--) {
      if (word.includes(wordEntered[j]) && wordEntered[j] !== word[j] && (hashOfWord[wordEntered[j]] - pinkHash[wordEntered[j]] < 1)) {
        board[position.rowIndex][j].color = "boxGray"
        setBoxes(board);
      }
    }
    if (wordEntered === word && boxes[position.rowIndex][0].color !== null) {
      setMessage(`You win! The word is "${word}"`)
      clearInterval(timeIntervalID)
    }
  }

  const startButtonDisplay = {display: hasStarted ? "none" : "block"}

  return (
    <div>
      <h1 className="title">SA<span>VV</span>Y SPEED WORDS</h1>
      <div className="word-area">
        {boxRowElements} 
        <div className={message === `You win! The word is "${word}"` ? "time time-finished" : "time"}>{timer}</div>
      </div>
      <div className="message-area flex">
        <button className="btn" style={startButtonDisplay} onClick={startButtonClick}>START</button>
        <p className="message">{message}</p>
      </div>
      <Keyboard timeIntervalID={timeIntervalID} keyColor={keyColor} setMessage={setMessage} colors={colors} hasStarted={hasStarted} toggleErrorShake={toggleErrorShake} word={word} words={words} position={position} setPosition={setPosition} boxes={boxes} setBoxes={setBoxes} />
    </div>
  )
}