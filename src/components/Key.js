import React from "react";

export default function Key({letter, keyColor, insertLetter}) {
    let keyIndex = keyColor.map(item => item.value).indexOf(letter);
    let insertColor = keyColor[keyIndex].color;
     
    return (
        <div className={`key key--letter ${insertColor}`} onClick={() => insertLetter(letter)}>{letter}</div>
    )
}