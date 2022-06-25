import React from "react"

export default function Choosegame({setChooseGame}) {
    
    function buttonChooseGameClick(event) {
        let numberClicked = parseInt(event.target.textContent)
        setChooseGame(numberClicked)
    }

    return (
        <div className="chooseGame">
            <h1 className="chooseGame__main-title">SA<span>VV</span>Y SPEED WORDS</h1>
            <h2 className="chooseGame__title">CHOOSE THE NUMBER OF WORDS</h2>
            <h3 className="chooseGame__directions-title">You will be timed on how long it takes you to correctly guess the number of words of your choosing.</h3> 
            <p className="chooseGame__directions-text">
                EXAMPLE: If you choose "3", once you correctly guess the first word, the board will reset and you will 
                    have a new word to guess. The timer will continue until you have correctly guessed all 3 words (or until you fail a word, then you lose!)
            </p>
            <div className="chooseGame__buttons grid grid--cols-2">
                <button className="btn chooseGame__btn btn-1" onClick={buttonChooseGameClick}>1</button>
                <button className="btn chooseGame__btn btn-3" onClick={buttonChooseGameClick}>3</button>
                <button className="btn chooseGame__btn btn-5" onClick={buttonChooseGameClick}>5</button>
                <button className="btn chooseGame__btn btn-10" onClick={buttonChooseGameClick}>10</button>
            </div>
        </div>
    )
}