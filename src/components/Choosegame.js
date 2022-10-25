import React from "react";
import Buttons from "./Buttons";

export default function Choosegame() {

    return (
        <div className="chooseGame">
            <div className="container">
                <h1 className="chooseGame__main-title">SA<span>VV</span>Y SPEED WORDS</h1>
                <h2 className="chooseGame__title">CHOOSE THE NUMBER OF WORDS</h2>
                <h3 className="chooseGame__directions-title">
                    You will be timed on how long it takes you to correctly guess the number 
                    of words of your choosing.
                </h3> 
                <p className="chooseGame__directions-text">
                    EXAMPLE: If you choose "3", once you correctly guess the first word, 
                    the board will reset and you will have a new word to guess. The timer 
                    will continue until you have correctly guessed all 3 words 
                    (or until you fail a word, then you lose!)
                </p>
                <Buttons />
            </div>
        </div>
    )
}