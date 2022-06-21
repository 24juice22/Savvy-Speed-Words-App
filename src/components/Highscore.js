import React from "react"

export default function Highscore({highScore, message, word, otherTimer, setGameOver, setBoxes, allNewBoxes, setHasStarted, setMessage, setKeyColor, allNewKeys, setTimer, setPosition, name}) {
    let firstColumn = []
    let secondColumn = []
    for (let i = 0; i < 20; i++) {
        if (i < 10)
            firstColumn.push(highScore[i])
        else
            secondColumn.push(highScore[i])
    }
    
    
    let scoreName = firstColumn.map(scoreInstance => <li style={{color: scoreInstance.score === otherTimer ? "rgb(5, 253, 5)" : "white"  }}>{scoreInstance.name} </li>)
    let scoreList = firstColumn.map(scoreInstance => <li style={{color: scoreInstance.score === otherTimer ? "rgb(5, 253, 5)" : "white"  }}>{scoreInstance.score} </li>)
    let scoreSecondName = secondColumn.map(scoreInstance => <li style={{color: scoreInstance.score === otherTimer ? "rgb(5, 253, 5)" : "white"  }}>{scoreInstance.name} </li>)
    let scoreSecondList = secondColumn.map(scoreInstance => <li style={{color: scoreInstance.score === otherTimer ? "rgb(5, 253, 5)" : "white"  }}>{scoreInstance.score} </li>) 


    function newGame() {
        setGameOver(prevGameOver => !prevGameOver)
        setBoxes(allNewBoxes())
        setHasStarted(prevHasStarted => !prevHasStarted)
        setMessage("")
        setKeyColor(allNewKeys())
        setTimer("")
        setPosition({rowIndex: 0, columnIndex: 0})
    }
    
    return (
        <div className="highScore">
            <h2 className="highScore__title">Lowest Time Legends</h2>
            <div className="flex">
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
            <h3 className="highScore__your-score">Your Time: {otherTimer}</h3>
            <button className="btn" onClick={newGame}>NEW GAME</button>
        </div>
    )
}