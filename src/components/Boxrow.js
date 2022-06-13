import React from "react"

export default function Boxrow(props) {
    return (
        <div className="row-{props.rowNumber} flex">
            <div className="box row-{props.rowNumber}__box"></div>
            <div className="box row-{props.rowNumber}__box"></div>
            <div className="box row-{props.rowNumber}__box"></div>
            <div className="box row-{props.rowNumber}__box"></div>
            <div className="box row-{props.rowNumber}__box"></div>
      </div> 
    )
}