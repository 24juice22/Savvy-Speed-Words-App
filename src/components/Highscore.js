import React from "react"

export default function Highscore({highScore, message, word}) {
    let scoreList = highScore.map(score => <li>{score}</li>)
    
    return (
        <div className="highScore">
            <h2 className="highScore__title">High Score Legends</h2>
            <ol className="highScore__list">
                {scoreList}
            </ol>
        </div>
    )
}