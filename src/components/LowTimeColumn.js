import React from "react"

function LowTimeColumn({name, score, start}) {
    return (
        <div className="flex lowTime__column">
            <ol start={start} className="lowTime__list">
                {name}
            </ol>
            <ul className="lowTime__list lowTime__list-score">
                {score}
            </ul>
        </div>
    )
}

export default LowTimeColumn;