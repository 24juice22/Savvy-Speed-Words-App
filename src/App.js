import React from "react"
import Boxrow from "./components/Boxrow"
import Keyboard from "./components/Keyboard"

export default function App() {
  const [boxes, setBoxes] = React.useState(allNewBoxes())
  const [position, setPosition] = React.useState({rowIndex: 0, columnIndex: 0})
  const [hasStarted, setHasStarted] = React.useState(false)
  const [error, setError] = React.useState(false)
  
  let word = "flaaa"
  let words = ["lfoof", "flaaa", "scalf", "lfolf", "FLAME", "apple", "MAXAM", "ataaa"]

  function allNewBoxes() {
    const newBoxes = [
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""]
    ]
    return newBoxes
  }
  
  const rows = [0, 1, 2, 3, 4, 5]
  const boxRowElements = rows.map(row => 
    <Boxrow  error={error} position={position} boxes={boxes} rowIndex={row} key={row}/>
  )

  function startButtonClick() {
    setHasStarted(true)
  }

  function errorShake() {
    setError(prevError => !prevError)
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
        <p className="message"></p>
      </div>
      <Keyboard errorShake={errorShake} words={words} hasStarted={hasStarted} position={position} setPosition={setPosition} boxes={boxes} setBoxes={setBoxes} />
    </div>
  )
}