import React from "react";
import Card from '../components/Card'; // Make sure 'Card' is correctly imported
import {pizzaData} from '../data.js';

const Menu = () => {
    return (
        <div>
            <ul className="menuContainer">
            <h2> Our menu </h2>       
            <p> Authentic italian cousine. 6 creative dishes to chooshe from. All organic ingredients,
                    cooked to perfection in our stone oven.</p>
                {pizzaData
                    .map((item, index) => (
                    <li key={index} >
                    <Card
                        imgSrc={"../" + item.photoName}
                        name={item.name}
                        ingredients={item.ingredients}
                        price={item.price}
                        photoName={item.photoName}
                        soldOut={item.soldOut}
                    />
                    </li>
                ))}
            </ul>
            
            
        </div>
    )
}

export default Menu;