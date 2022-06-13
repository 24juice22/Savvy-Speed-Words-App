import React from "react"
import Boxrow from "./components/Boxrow"
import Keyboard from "./components/Keyboard"

export default function App() {
  const rowNumbers = [1, 2, 3, 4, 5, 6]
  const createBoxRows = rowNumbers.map(item => <Boxrow rowNumber={item} key={item} />)

  return (
    <div>
      <h1 className="title">SA<span>VV</span>Y SPEED WORDS</h1>
      <div className="word-area">
        {createBoxRows}  
      </div>
      <div className="message-area flex">
        <button className="btn">START</button>
        <p className="message"></p>
      </div>
      <Keyboard />
    </div>
  )
}