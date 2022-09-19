import React from "react"

function Buttons({setChooseGame, newGame, name}) {

    function buttonChooseGameClick(event) {
        let numberOfWordsChosen = parseInt(event.target.textContent)
        setChooseGame(numberOfWordsChosen)
        if (name !== "")
            newGame()
    }

    return (
            <div className="chooseGame__buttons" >
                <button className="btn btn-1 chooseGame__btn" onClick={buttonChooseGameClick}>1</button>
                <button className="btn btn-3 chooseGame__btn" onClick={buttonChooseGameClick}>3</button>
                <button className="btn btn-5 chooseGame__btn" onClick={buttonChooseGameClick}>5</button>
                <button className="btn btn-10 chooseGame__btn" onClick={buttonChooseGameClick}>10</button>
            </div>
    )
}

export default Buttons;