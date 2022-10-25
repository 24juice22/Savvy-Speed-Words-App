import React, { useContext } from "react";
import { SavvyContext } from "../contexts/SavvyContext";

function Buttons() {
    const { setGameOver, setBoxes, setHasStarted, setMessage, setKeyColor, setDisplayTimer, setPosition, setGameNumber, allNewBoxes, allNewKeys, setChooseGame, name } = useContext(SavvyContext);

    ///////// Start New Game of Specified Number of Words ////////////
    function newGame() {
        setGameOver(prevGameOver => !prevGameOver);
        setBoxes(allNewBoxes());
        setHasStarted(prevHasStarted => !prevHasStarted);
        setMessage("");
        setKeyColor(allNewKeys());
        setDisplayTimer("");
        setPosition({rowIndex: 0, columnIndex: 0});
        setGameNumber(1);
    }

    function buttonChooseGameClick(event) {
        let numberOfWordsChosen = parseInt(event.target.textContent);
        setChooseGame(numberOfWordsChosen);
        if (name !== "")
            newGame();
    }

    return (
            <div className="buttons">
                <button className="btn" onClick={buttonChooseGameClick}>1</button>
                <button className="btn btn--green" onClick={buttonChooseGameClick}>3</button>
                <button className="btn btn--blue" onClick={buttonChooseGameClick}>5</button>
                <button className="btn btn--pink" onClick={buttonChooseGameClick}>10</button>
            </div>
    )
}

export default Buttons;