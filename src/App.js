import React from "react"
import Boxrow from "./components/Boxrow"
import Keyboard from "./components/Keyboard"

export default function App() {
  const [boxes, setBoxes] = React.useState(allNewBoxes())
  const [position, setPosition] = React.useState({rowIndex: 0, columnIndex: 0})
  
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
    <Boxrow  boxes={boxes} rowIndex={row} key={row}/>
  )


  return (
    <div>
      <h1 className="title">SA<span>VV</span>Y SPEED WORDS</h1>
      <div className="word-area">
        {boxRowElements}  
      </div>
      <div className="message-area flex">
        <button className="btn">START</button>
        <p className="message"></p>
      </div>
      <Keyboard position={position} setPosition={setPosition} boxes={boxes} setBoxes={setBoxes} />
    </div>
  )
}