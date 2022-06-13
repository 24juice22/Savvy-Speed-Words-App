import React from "react"

export default function Keyboard(props) {  
    return (
        <div className="keyboard">
            <div className="flex keyboard-top">
                <div className="key key-letter">Q</div>
                <div className="key key-letter">W</div>
                <div className="key key-letter">E</div>
                <div className="key key-letter">R</div>
                <div className="key key-letter">T</div>
                <div className="key key-letter">Y</div>
                <div className="key key-letter">U</div>
                <div className="key key-letter">I</div>
                <div className="key key-letter">O</div>
                <div className="key key-letter">P</div>
            </div>
            <div className="flex keyboard-middle">
                <div className="key key-letter">A</div>
                <div className="key key-letter">S</div>
                <div className="key key-letter">D</div>
                <div className="key key-letter">F</div>
                <div className="key key-letter">G</div>
                <div className="key key-letter">H</div>
                <div className="key key-letter">J</div>
                <div className="key key-letter">K</div>
                <div className="key key-letter">L</div>
            </div>
            <div className="flex keyboard-bottom">
                <div className="key key-special key-enter">ENTER</div>
                <div className="key key-letter">Z</div>
                <div className="key key-letter">X</div>
                <div className="key key-letter">C</div>
                <div className="key key-letter">V</div>
                <div className="key key-letter">B</div>
                <div className="key key-letter">N</div>
                <div className="key key-letter">M</div>
                <div className="key key-special key-delete">DELETE</div>
            </div>
        </div> 
    )
}