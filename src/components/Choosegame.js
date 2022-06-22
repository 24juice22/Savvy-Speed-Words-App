import React from "react"

export default function Choosegame({setChooseGame}) {
    
    function buttonOneClick() {
        setChooseGame(1)
    }

    function buttonThreeClick() {
        setChooseGame(3)
    }

    function buttonFiveClick() {
        setChooseGame(5)
    }

    function buttonTenClick() {
        setChooseGame(10)
    }

    return (
        <div className="chooseGame">
            <h1 className="chooseGame__title">CHOOSE THE NUMBER OF WORDS</h1>
            <h3 className="chooseGame__directions-title">You will be timed on how long it takes you to correctly guess the number of words of your choosing.</h3> 
            <p className="chooseGame__directions-text">
                EXAMPLE: If you choose "3", once you correctly guess the first word, the board will reset and you will 
                    have a new word to guess. The timer will continue until you have correctly guessed all 3 words (or until you fail a word, then you lose!)
            </p>
            <div className="chooseGame__buttons">
                <button className="btn chooseGame__btn btn-1" onClick={buttonOneClick}>1</button>
                <button className="btn chooseGame__btn btn-3" onClick={buttonThreeClick}>3</button>
                <button className="btn chooseGame__btn btn-5" onClick={buttonFiveClick}>5</button>
                <button className="btn chooseGame__btn btn-10" onClick={buttonTenClick}>10</button>
            </div>
        </div>
    )
}