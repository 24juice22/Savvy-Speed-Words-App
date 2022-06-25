import React from "react"

export default function Highscore({highScore, message, word, otherTimer, setGameOver, setBoxes, allNewBoxes, setHasStarted, setMessage, setKeyColor, allNewKeys, setTimer, setPosition, timer, name, setGameNumber, setChooseGame, chooseGame}) {
    let arrayIndex = null
    if (chooseGame === 1) arrayIndex = 0
    else if (chooseGame === 3) arrayIndex = 1
    else if (chooseGame === 5) arrayIndex = 2
    else arrayIndex = 3
    
    let array = highScore[arrayIndex].map(item => {
        if (item.score === null)
            return {score: "", name: item.name}
        else {
            let minutes = Math.floor((item.score % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((item.score % (1000 * 60)) / 1000);
            let milliseconds = Math.floor((item.score % 10000) / 100);
            let display = minutes + "m " + seconds + "." + milliseconds + "s ";

            return {score: display, name: item.name}
        } 
    })

    let firstColumn = []
    let secondColumn = []
    for (let i = 0; i < 20; i++) {
        if (i < 10)
            firstColumn.push(array[i])
        else
            secondColumn.push(array[i])
    }
    
    let scoreName = firstColumn.map(scoreInstance => <li className="highScore__list-item highScore__list-name" style={{color: scoreInstance.score === timer && name === scoreInstance.name? "rgb(5, 253, 5)" : "white"  }}>{scoreInstance.name} </li>)
    let scoreList = firstColumn.map(scoreInstance => <li className="highScore__list-item highScore__list-score" style={{color: scoreInstance.score === timer && name === scoreInstance.name? "rgb(5, 253, 5)" : "white"  }}>{scoreInstance.score} </li>)
    let scoreSecondName = secondColumn.map(scoreInstance => <li className="highScore__list-item highScore__list-name" style={{color: scoreInstance.score === timer && name === scoreInstance.name? "rgb(5, 253, 5)" : "white"  }}>{scoreInstance.name} </li>)
    let scoreSecondList = secondColumn.map(scoreInstance => <li className="highScore__list-item highScore__list-score" style={{color: scoreInstance.score === timer && name === scoreInstance.name? "rgb(5, 253, 5)" : "white"  }}>{scoreInstance.score} </li>) 

    function newGame() {
        setGameOver(prevGameOver => !prevGameOver)
        setBoxes(allNewBoxes())
        setHasStarted(prevHasStarted => !prevHasStarted)
        setMessage("")
        setKeyColor(allNewKeys())
        setTimer("")
        setPosition({rowIndex: 0, columnIndex: 0})
        setGameNumber(1)
    }
    
    function buttonChooseGameClick(event) {
        let numberOfWordsChosen = parseInt(event.target.textContent)
        setChooseGame(numberOfWordsChosen)
        newGame()
    }

    return (
        <div className="highScore">
            <h2 className="highScore__title">Fastest Times</h2>
            <h3 className="highScore__subtitle">{chooseGame} WORD</h3>
            <div className="highScore__columns">
                <div className="flex highScore__column">
                    <ol className="highScore__list">
                        {scoreName}
                    </ol>
                    <ul className="highScore__list highScore__list-score">
                        {scoreList}
                    </ul>
                </div>
                <div className="flex highScore__column">
                    <ol start="11" className="highScore__list">
                        {scoreSecondName}
                    </ol>
                    <ul className="highScore__list highScore__list-score">
                        {scoreSecondList}
                    </ul>
                </div>
            </div>
            <h3 className="highScore__your-score"><span>Your Time:</span>{timer}</h3>
            <div className="highScore__buttons" >
                <button className="btn btn-1 highScore__btn" onClick={buttonChooseGameClick}>1</button>
                <button className="btn btn-3 highScore__btn" onClick={buttonChooseGameClick}>3</button>
                <button className="btn btn-5 highScore__btn" onClick={buttonChooseGameClick}>5</button>
                <button className="btn btn-10 highScore__btn" onClick={buttonChooseGameClick}>10</button>
            </div>
        </div>
    )
}