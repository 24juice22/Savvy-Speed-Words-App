import React from "react"
import Key from "./Key"

export default function Keyboard(props) {  
    const keysTop = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const keysMiddle = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const keysBottom = ["Z", "X", "C", "V", "B", "N", "M"]
  
    return (
        <div className="keyboard">
            <div className="flex keyboard-top">
                {keysTop.map(letter => <Key position={props.position} setPosition={props.setPosition} setBoxes={props.setBoxes} boxes={props.boxes} keyValue={letter} key={letter} />)}
            </div>
            <div className="flex keyboard-middle">
                {keysMiddle.map(letter => <Key position={props.position} setPosition={props.setPosition} setBoxes={props.setBoxes} boxes={props.boxes} keyValue={letter} key={letter} />)}
            </div>
            <div className="flex keyboard-bottom">
                <div className="key key-special key-enter">ENTER</div>
                {keysBottom.map(letter => <Key position={props.position} setPosition={props.setPosition} setBoxes={props.setBoxes} boxes={props.boxes} keyValue={letter} key={letter} />)}
                <div className="key key-special key-delete">DELETE</div>
            </div>
        </div> 
    )
}