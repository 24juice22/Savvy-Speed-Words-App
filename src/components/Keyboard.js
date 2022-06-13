import React from "react"
import Key from "./Key"

export default function Keyboard(props) {  
    const keysTop = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const keysMiddle = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const keysBottom = ["Z", "X", "C", "V", "B", "N", "M"]

    return (
        <div className="keyboard">
            <div className="flex keyboard-top">
                {keysTop.map(item => <Key keyValue={item} key={item} />)}
            </div>
            <div className="flex keyboard-middle">
                {keysMiddle.map(item => <Key keyValue={item} key={item} />)}
            </div>
            <div className="flex keyboard-bottom">
                <div className="key key-special key-enter">ENTER</div>
                {keysBottom.map(item => <Key keyValue={item} key={item} />)}
                <div className="key key-special key-delete">DELETE</div>
            </div>
        </div> 
    )
}