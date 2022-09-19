import React from "react"
import Buttons from "./Buttons"
import LowTimeColumn from "./LowTimeColumn"

export default function Lowtime({numberOfGamesIndex, displayTime, lowTime, setGameOver, setBoxes, allNewBoxes, setHasStarted, setMessage, setKeyColor, allNewKeys, setTimer, setPosition, timer, name, setGameNumber, setChooseGame, chooseGame}) {
    let arrayIndex = numberOfGamesIndex(chooseGame);

    let array = lowTime[arrayIndex].map(item => {
        if (item.score === null)
            return {score: "", name: item.name}
        return {score: displayTime(item.score), name: item.name} 
    })

    let firstColumn = [];
    let secondColumn = [];
    for (let i = 0; i < 20; i++) {
        if (i < 10)
            firstColumn.push(array[i]);
        else
            secondColumn.push(array[i]);
    }

    function lowTimeColors(value) {
       return {color: value.score === timer && name === value.name ? "rgb(5, 253, 5)" : "white"}
    }

    let scoreName = firstColumn.map(scoreInstance => {
        return  <li className="lowTime__list-item lowTime__list-name" style={lowTimeColors(scoreInstance)}>
                    {scoreInstance.name} 
                </li>
    })
    let scoreList = firstColumn.map(scoreInstance => {
        return  <li className="lowTime__list-item lowTime__list-score" style={lowTimeColors(scoreInstance)}>
                    {scoreInstance.score} 
                </li>
    })
    let scoreSecondName = secondColumn.map(scoreInstance => {
        return  <li className="lowTime__list-item lowTime__list-name" style={lowTimeColors(scoreInstance)}>
                    {scoreInstance.name} 
                </li>
    })
    let scoreSecondList = secondColumn.map(scoreInstance => {
        return  <li className="lowTime__list-item lowTime__list-score" style={lowTimeColors(scoreInstance)}>
                    {scoreInstance.score} 
                </li>
    }) 

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

    return (
        <div className="lowTime">
            <h2 className="lowTime__title">Fastest Times</h2>
            <h3 className="lowTime__subtitle">{chooseGame} WORD</h3>
            <div className="lowTime__columns">
                <LowTimeColumn name={scoreName} score={scoreList} start={"1"}/>
                <LowTimeColumn name={scoreSecondName} score={scoreSecondList} start={"11"}/>
            </div>
            <h3 className="lowTime__your-score"><span>Your Time:</span>{timer}</h3>
            <Buttons setChooseGame={setChooseGame} newGame={newGame} name={name}/>
        </div>
    )
}