import React from "react";

export default function Accordion({id, title, number, body, hidden, expand, collapse}){
    return (
        <div className="accordion">
            <h2 className="accordion-number"> {number} </h2>
            <h2 className="accordion-title "> {title} </h2>
            <button
            className="accordion-dropdown"
            onClick={() => hidden ? expand(id) : collapse(id)}
            >
            {hidden ? '+' : '-'}
            </button>
            <p className={`accordion-text ${!hidden ? 'show' : 'collapsing'}`}>
            {body}
            </p>
        </div>
    )
}