import React from "react";

const getFormattedPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                }).format(price)
}

export default function Card(props) {
    return (
    <div className="cardContainer">
        <h2>{props.name}</h2>
        <img className='cardImg' src={props.photoName} alt={props.photoName} />
        <h3 className="ingredients">{props.ingredients}</h3>
        <p> { props.soldOut ? "sold out" : getFormattedPrice(props.price)} </p>
       
    </div>
    );

}

