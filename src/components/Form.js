import React from "react"

export default function Form({setName}) {
    function handleSubmit(event) {
        event.preventDefault()
        setName(event.target[0].value)
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="form__title">PLEASE ENTER YOUR NAME</h2>
            <input className="form__input" type="text" maxlength="12"/>
            <input className="btn" type="submit" />
        </form>
    )
}