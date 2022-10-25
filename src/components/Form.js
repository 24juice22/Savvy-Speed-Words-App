import React from "react";

export default function Form({setName}) {
    function handleSubmit(event) {
        event.preventDefault();
        setName(event.target[0].value);
    }

    return (
        <div className="form">
            <div className="container">
                <h2 className="form__title">PLEASE ENTER YOUR NAME</h2>
                <p className="form__directions">(Maximum of 12 Characters)</p>
                <form onSubmit={handleSubmit}>
                    <input className="form__input" type="text" maxLength="12" required/>
                    <input className="btn form__btn" type="submit" value="SUBMIT" />
                </form>
            </div>
        </div>
    )
}