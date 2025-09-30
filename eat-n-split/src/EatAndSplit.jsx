import React from "react";
import ListItem from "./ListItem";
import NumberInput from "./NumberInput";
import DropdownInput from "./DropdownInput";

export default function EatAndSplit() {

    return (
        <div className="mainContainer">
            <div  className="listContainer">
                <ListItem name={"Tanjiro Kamado"} status={"You owe"} balance={"10"}/>     
                <ListItem name={"Tanjiro Kamado"} status={"You owe"} balance={"10"}/>     
                <ListItem name={"Tanjiro Kamado"} status={"You owe"} balance={"10"}/>     
                <ListItem name={"Tanjiro Kamado"} status={"You owe"} balance={"10"}/>     
                <Button action={"Add Friend"}/>
            </div>
            <div className="cardContainer">
                <h1> SPLIT A BILL WITH ANTHONY </h1>
                <NumberInput name={"💸 Bill value"}/>
                <NumberInput name={"🧍 Your expense"}/>
                <NumberInput name={"🧑‍🤝‍🧑 Anthony's expense"}/>
                <DropdownInput options={["You", "Bill"]}/>
                <Button action={"Split Bill"}/>
            </div>
        </div>
    )

}

function Button ({action}) {
    return (
        <div className="buttonContainer">
            <h3> {action} </h3>
        </div>
    )
}