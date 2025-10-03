import React from "react";

export default function ListItem({name, status, src, setCurrentId, currentId}) {

    return (
        <div className="listItem">
            <img src={src} alt="Tanjiro Kamado" />
            <NameAndStatus name={name} status={status}/>
            <SelectButton action={"Select"} setCurrentId={setCurrentId} currentId={currentId}/>
        </div>
    )
}

function NameAndStatus({name, status}) {
    return (
        <div className="nameAndStatusContainer">
            <h3> {name} </h3>
            <p> {status} </p>
        </div>
    )
}

function SelectButton({action, setCurrentId, currentId}) {
    return (
        <button className="selectButtonContainer" onClick={() => setCurrentId(currentId)}>
            {action}  
        </button>
    )
}