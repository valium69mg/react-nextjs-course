import React from "react";

export default function NumberInput({name}) {

    return (
        <div className="numberInput"> 
            <h2> {name} </h2>
            <input type="text" placeholder="0"/>
        </div>
    )
}