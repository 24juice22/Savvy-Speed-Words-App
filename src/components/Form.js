import React from "react"

export default function Form({setName}) {
    function handleSubmit(event) {
        event.preventDefault()
        setName(event.target[0].value)
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="form__title">PLEASE ENTER YOUR NAME</h2>
            <p>(Maximum of 14 Characters)</p>
            <input className="form__input" type="text" maxLength="14"/>
            <input className="btn" type="submit" />
        </form>
    )
}