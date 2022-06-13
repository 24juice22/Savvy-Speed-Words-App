import React from "react"

export default function Box(props) {
    return (
        <div className="box row-{props.props.rowNumber}__box"></div>
    )
}