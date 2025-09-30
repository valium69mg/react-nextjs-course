import React from "react";

export default function ListItem({name, status, balance, src}) {
    return (
        <div className="listItem">
            <img src="/tanjiro.webp" alt="Tanjiro Kamado" />
            <NameAndStatus name={name} status={status} balance={balance}/>
            <SelectButton action={"Select"}/>
        </div>
    )
}

function NameAndStatus({name, status, balance}) {
    return (
        <div className="nameAndStatusContainer">
            <h3> {name} </h3>
            <p> {status} {name} {balance}$</p>
        </div>
    )
}

function SelectButton({action}) {
    return (
        <div className="selectButtonContainer">
            <h3> {action} </h3>
        </div>
    )
}