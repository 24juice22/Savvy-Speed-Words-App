import React from "react"

export default function Highscore({highScore, message, word, otherTimer, setGameOver, setBoxes, allNewBoxes, setHasStarted, setMessage, setKeyColor, allNewKeys, setTimer, setPosition, timer}) {
    let array = highScore.map(item => {
        let minutes = Math.floor((item.score % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((item.score % (1000 * 60)) / 1000);
        let milliseconds = Math.floor((item.score % 10000) / 100);
        let display = minutes + "m " + seconds + "." + milliseconds + "s ";
        return {score: display, name: item.name}
    })

    console.log(array)
    let firstColumn = []
    let secondColumn = []
    for (let i = 0; i < 20; i++) {
        if (i < 10)
            firstColumn.push(array[i])
        else
            secondColumn.push(array[i])
    }
    
    
    let scoreName = firstColumn.map(scoreInstance => <li style={{color: scoreInstance.score === timer ? "rgb(5, 253, 5)" : "white"  }}>{scoreInstance.name} </li>)
    let scoreList = firstColumn.map(scoreInstance => <li style={{color: scoreInstance.score === timer ? "rgb(5, 253, 5)" : "white"  }}>{scoreInstance.score} </li>)
    let scoreSecondName = secondColumn.map(scoreInstance => <li style={{color: scoreInstance.score === timer ? "rgb(5, 253, 5)" : "white"  }}>{scoreInstance.name} </li>)
    let scoreSecondList = secondColumn.map(scoreInstance => <li style={{color: scoreInstance.score === timer ? "rgb(5, 253, 5)" : "white"  }}>{scoreInstance.score} </li>) 

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
            <h3 className="highScore__your-score">Your Time: {timer}</h3>
            <button className="btn" onClick={newGame}>NEW GAME</button>
        </div>
    )
}